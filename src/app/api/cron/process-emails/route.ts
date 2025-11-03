/**
 * Email Queue Processing Endpoint
 * 
 * Triggered by:
 * 1. Vercel Cron (every 4 hours) - Requires Pro tier
 * 2. Manual API call - For testing or immediate processing
 * 
 * Security: Protected by CRON_SECRET environment variable
 */

import { NextRequest, NextResponse } from 'next/server'
import { processEmailQueue, getQueueStats } from '@/lib/email-queue-service'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 25 // Free tier allows 10s, Pro allows 300s

export async function GET(request: NextRequest) {
  try {
    // Optional: Add authorization header check for security
    const authHeader = request.headers.get('authorization')
    const expectedAuth = process.env.CRON_SECRET
    
    if (expectedAuth && authHeader !== `Bearer ${expectedAuth}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.log('📧 Starting email queue processing...')
    
    // Process emails
    const result = await processEmailQueue(10) // Process max 10 per run
    
    // Get current stats
    const stats = await getQueueStats()
    
    return NextResponse.json({
      success: true,
      processed: result.processed,
      sent: result.sent,
      failed: result.failed,
      queue: stats,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('❌ Error in email processing endpoint:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  // Same as GET, but supports POST for GitHub Actions webhooks
  return GET(request)
}
