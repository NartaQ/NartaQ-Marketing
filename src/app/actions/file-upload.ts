'use server'

import { azureBlobService } from '@/lib/azure-blob-service'

export async function uploadFileToAzure(formData: FormData) {
  try {
    const file = formData.get('file') as File

    if (!file) {
      return {
        success: false,
        error: 'No file provided',
      }
    }

    // Additional file validation
    const maxSize = 5 * 1024 * 1024 // 5MB limit
    if (file.size > maxSize) {
      return {
        success: false,
        error: 'File size exceeds 5MB limit',
      }
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        error: 'Only PDF and Word documents are allowed',
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
      fileName: file.name,
    }
  } catch (error) {
    console.error('Error uploading file:', error)
    return {
      success: false,
      error: 'Failed to upload file. Please try again.',
    }
  }
}
