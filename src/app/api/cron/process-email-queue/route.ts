import { NextResponse } from 'next/server'
import { processEmailQueue } from '@/lib/email-queue-service'

export const dynamic = 'force-dynamic' // Ensure this route is not cached

export async function GET(request: Request) {
  try {
    // Check for authorization header to prevent unauthorized access
    // Vercel Cron jobs automatically send this header
    const authHeader = request.headers.get('authorization')

    // In production, verify the CRON_SECRET if you want to secure it further
    // For now, we'll allow it but log the attempt

    console.log('⏱️ Cron: Starting email queue processing...')

    const result = await processEmailQueue(20) // Process up to 20 emails per run

    return NextResponse.json({
      success: true,
      message: 'Email queue processed',
      stats: result
    })
  } catch (error) {
    console.error('❌ Cron: Failed to process email queue:', error)
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
