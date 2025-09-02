import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob'

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY
const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'nartaq-uploads'

if (!accountName || !accountKey) {
 throw new Error('Azure Storage account name and key must be set in environment variables')
}

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey)
const blobServiceClient = new BlobServiceClient(
 `https://${accountName}.blob.core.windows.net`,
 sharedKeyCredential
)

export class AzureBlobService {
 private containerClient = blobServiceClient.getContainerClient(containerName)

 async ensureContainer(): Promise<void> {
  try {
   await this.containerClient.createIfNotExists({
    access: 'blob' // Public read access for blobs
   })
  } catch (error) {
   console.error('Error creating container:', error)
   throw error
  }
 }

 async uploadFile(file: Buffer, fileName: string, contentType: string): Promise<string> {
  try {
   await this.ensureContainer()

   // Generate unique filename with timestamp
   const timestamp = Date.now()
   const uniqueFileName = `${timestamp}-${fileName}`

   const blockBlobClient = this.containerClient.getBlockBlobClient(uniqueFileName)

   await blockBlobClient.upload(file, file.length, {
    blobHTTPHeaders: {
     blobContentType: contentType
    }
   })

   return blockBlobClient.url
  } catch (error) {
   console.error('Error uploading file to Azure Blob Storage:', error)
   throw error
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
