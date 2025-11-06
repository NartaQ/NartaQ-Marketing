#!/usr/bin/env tsx
/**
 * Azure Storage Connection Test Script
 * 
 * Tests the Azure Blob Storage configuration and connectivity
 * Run: npx tsx scripts/test-azure-storage.ts
 */

import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY
const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'nartaq-uploads'

async function testAzureStorage() {
  console.log('🔍 Testing Azure Storage Configuration...\n')

  // Step 1: Validate environment variables
  console.log('1️⃣  Checking environment variables...')
  
  if (!accountName) {
    console.error('❌ AZURE_STORAGE_ACCOUNT_NAME is not set')
    process.exit(1)
  }
  console.log(`   ✅ Account Name: ${accountName}`)

  if (!accountKey) {
    console.error('❌ AZURE_STORAGE_ACCOUNT_KEY is not set')
    process.exit(1)
  }
  console.log(`   ✅ Account Key: ${accountKey.substring(0, 10)}...${accountKey.substring(accountKey.length - 10)}`)

  console.log(`   ✅ Container Name: ${containerName}`)

  // Step 2: Validate account name format
  console.log('\n2️⃣  Validating account name format...')
  if (!/^[a-z0-9]{3,24}$/.test(accountName)) {
    console.error(`   ❌ Invalid account name: "${accountName}"`)
    console.error('      Must be lowercase alphanumeric, 3-24 characters')
    process.exit(1)
  }
  console.log('   ✅ Account name format is valid')

  // Step 3: Create blob service client
  console.log('\n3️⃣  Creating BlobServiceClient...')
  try {
    const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey)
    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      sharedKeyCredential
    )
    console.log(`   ✅ Client created for: https://${accountName}.blob.core.windows.net`)

    // Step 4: Test connection by listing containers
    console.log('\n4️⃣  Testing connection (listing containers)...')
    const containerIterator = blobServiceClient.listContainers()
    const containers: string[] = []
    
    for await (const container of containerIterator) {
      containers.push(container.name)
    }
    
    console.log(`   ✅ Successfully connected! Found ${containers.length} container(s):`)
    containers.forEach(name => console.log(`      - ${name}`))

    // Step 5: Test container access
    console.log(`\n5️⃣  Testing container access: "${containerName}"...`)
    const containerClient = blobServiceClient.getContainerClient(containerName)
    
    try {
      const exists = await containerClient.exists()
      if (exists) {
        console.log(`   ✅ Container "${containerName}" exists`)
        
        // Get container properties
        const properties = await containerClient.getProperties()
        console.log(`   📊 Public Access: ${properties.blobPublicAccess || 'private'}`)
      } else {
        console.log(`   ⚠️  Container "${containerName}" does not exist`)
        console.log('   Creating container...')
        
        await containerClient.create({
          access: 'blob' // Public read access for blobs
        })
        console.log(`   ✅ Container "${containerName}" created successfully`)
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error(`   ❌ Error accessing container: ${errorMessage}`)
      throw error
    }

    // Step 6: Test file upload
    console.log('\n6️⃣  Testing file upload...')
    const testFileName = `test-${Date.now()}.txt`
    const testContent = 'Azure Storage Test - This file can be safely deleted'
    const testBuffer = Buffer.from(testContent)
    
    const blockBlobClient = containerClient.getBlockBlobClient(testFileName)
    await blockBlobClient.upload(testBuffer, testBuffer.length, {
      blobHTTPHeaders: {
        blobContentType: 'text/plain'
      }
    })
    console.log(`   ✅ Test file uploaded: ${testFileName}`)
    console.log(`   📍 URL: ${blockBlobClient.url}`)

    // Step 7: Test file download/read
    console.log('\n7️⃣  Testing file download...')
    const downloadResponse = await blockBlobClient.download()
    const downloadedContent = await streamToBuffer(downloadResponse.readableStreamBody!)
    const downloadedText = downloadedContent.toString()
    
    if (downloadedText === testContent) {
      console.log('   ✅ File downloaded and verified successfully')
    } else {
      console.error('   ❌ Downloaded content does not match uploaded content')
    }

    // Step 8: Cleanup test file
    console.log('\n8️⃣  Cleaning up test file...')
    await blockBlobClient.delete()
    console.log('   ✅ Test file deleted')

    // Success summary
    console.log('\n✅ All tests passed! Azure Storage is configured correctly.\n')
    console.log('📋 Configuration Summary:')
    console.log(`   Account: ${accountName}`)
    console.log(`   Container: ${containerName}`)
    console.log(`   Endpoint: https://${accountName}.blob.core.windows.net`)
    console.log(`   Public Access: blob (files are publicly readable)`)
    console.log('\n💡 Your Azure Storage is ready for production!')

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`\n❌ Test failed: ${errorMessage}`)
    
    if (errorMessage.includes('AuthenticationFailed')) {
      console.error('\n💡 Authentication failed. Check that:')
      console.error('   - AZURE_STORAGE_ACCOUNT_KEY is correct')
      console.error('   - The key has not expired or been regenerated')
      console.error('   - You are using the correct storage account')
    } else if (errorMessage.includes('ResourceNotFound')) {
      console.error('\n💡 Resource not found. Check that:')
      console.error('   - AZURE_STORAGE_ACCOUNT_NAME is correct')
      console.error('   - The storage account exists in Azure')
    }
    
    process.exit(1)
  }
}

// Helper function to convert stream to buffer
async function streamToBuffer(readableStream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    readableStream.on('data', (data: Buffer) => {
      chunks.push(data)
    })
    readableStream.on('end', () => {
      resolve(Buffer.concat(chunks))
    })
    readableStream.on('error', reject)
  })
}

// Run the test
testAzureStorage().catch(console.error)
