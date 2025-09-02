'use server'

import { azureBlobService } from '@/lib/azure-blob-service'

export async function uploadFileToAzure(formData: FormData) {
 try {
  const file = formData.get('file') as File

  if (!file) {
   return {
    success: false,
    error: 'No file provided'
   }
  }

  // Convert file to buffer
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Upload to Azure Blob Storage
  const fileUrl = await azureBlobService.uploadFile(
   buffer,
   file.name,
   file.type
  )

  return {
   success: true,
   url: fileUrl,
   fileName: file.name
  }
 } catch (error) {
  console.error('Error uploading file:', error)
  return {
   success: false,
   error: 'Failed to upload file'
  }
 }
}
