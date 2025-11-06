import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob'

// Environment variables with validation
const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY
const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'nartaq-uploads'

// Validate required environment variables
function validateAzureConfig() {
  if (!accountName) {
    throw new Error(
      'AZURE_STORAGE_ACCOUNT_NAME is not set. Please add it to your environment variables.'
    )
  }
  if (!accountKey) {
    throw new Error(
      'AZURE_STORAGE_ACCOUNT_KEY is not set. Please add it to your environment variables.'
    )
  }
  // Validate account name format (lowercase, alphanumeric, 3-24 chars)
  if (!/^[a-z0-9]{3,24}$/.test(accountName)) {
    throw new Error(
      `Invalid AZURE_STORAGE_ACCOUNT_NAME format: "${accountName}". Must be lowercase alphanumeric, 3-24 characters.`
    )
  }
}

validateAzureConfig()

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey)
const blobServiceClient = new BlobServiceClient(
 `https://${accountName}.blob.core.windows.net`,
 sharedKeyCredential
)

export class AzureBlobService {
 private containerClient = blobServiceClient.getContainerClient(containerName)

 async ensureContainer(): Promise<void> {
  try {
   // Create container if it doesn't exist with public blob access
   const createResponse = await this.containerClient.createIfNotExists({
    access: 'blob' // Public read access for blobs
   })
   
   // If container already exists, verify/update access level
   if (!createResponse.succeeded) {
     try {
       // Get current access level
       const accessPolicy = await this.containerClient.getAccessPolicy()
       
       // If not set to blob access, update it
       if (accessPolicy.blobPublicAccess !== 'blob') {
         console.log(`Updating container "${containerName}" access level to "blob"`)
         await this.containerClient.setAccessPolicy('blob')
       }
     } catch (accessError) {
       console.warn('Could not verify/update container access level:', accessError)
       // Continue anyway - the upload might still work
     }
   }
  } catch (error) {
   console.error('Error ensuring container:', error)
   throw error
  }
 }

 async uploadFile(file: Buffer, fileName: string, contentType: string): Promise<string> {
  try {
   await this.ensureContainer()

   // Sanitize filename - remove special chars and spaces
   const sanitizedName = fileName
     .replace(/[^a-zA-Z0-9.-]/g, '_')
     .replace(/_+/g, '_')
     .toLowerCase()

   // Generate unique filename with timestamp
   const timestamp = Date.now()
   const uniqueFileName = `${timestamp}-${sanitizedName}`

   const blockBlobClient = this.containerClient.getBlockBlobClient(uniqueFileName)

   // Upload with metadata and headers
   await blockBlobClient.upload(file, file.length, {
    blobHTTPHeaders: {
     blobContentType: contentType,
     blobCacheControl: 'public, max-age=31536000', // 1 year cache
    },
    metadata: {
     originalFileName: fileName,
     uploadedAt: new Date().toISOString(),
    },
   })

   return blockBlobClient.url
  } catch (error) {
   const errorMessage = error instanceof Error ? error.message : 'Unknown error'
   console.error('Error uploading file to Azure Blob Storage:', {
     error: errorMessage,
     fileName,
     containerName,
   })
   throw new Error(`Failed to upload file: ${errorMessage}`)
  }
 }

 async deleteFile(fileName: string): Promise<boolean> {
  try {
   const blockBlobClient = this.containerClient.getBlockBlobClient(fileName)
   const response = await blockBlobClient.deleteIfExists()
   return response.succeeded
  } catch (error) {
   console.error('Error deleting file from Azure Blob Storage:', error)
   return false
  }
 }

 async getFileUrl(fileName: string): Promise<string | null> {
  try {
   const blockBlobClient = this.containerClient.getBlockBlobClient(fileName)
   const exists = await blockBlobClient.exists()
   return exists ? blockBlobClient.url : null
  } catch (error) {
   console.error('Error getting file URL:', error)
   return null
  }
 }
}

export const azureBlobService = new AzureBlobService()
