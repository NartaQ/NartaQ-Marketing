import { processEmailQueue, queueEmail } from '../src/lib/email-queue-service'
import { prisma } from '../src/lib/prisma'

async function verifyFix() {
  console.log('🧪 Verifying Email Queue Fix...')

  // 1. Queue a test email
  const testEmail = `test-${Date.now()}@example.com`
  console.log(`\n1️⃣  Queuing test email to ${testEmail}...`)

  await queueEmail({
    to: testEmail,
    subject: 'Verification Test',
    htmlContent: '<p>This is a verification test.</p>',
    type: 'campaign'
  })

  // 2. Check if it's in the database
  const queued = await prisma.emailQueue.findFirst({
    where: { to: testEmail },
    orderBy: { createdAt: 'desc' }
  })

  if (!queued) {
    console.error('❌ Failed to queue email!')
    return
  }
  console.log('✅ Email successfully queued in database')

  // 3. Simulate Cron Processing (calling the function directly as the API route would)
  console.log('\n2️⃣  Simulating Cron Processing...')
  const result = await processEmailQueue()

  console.log('📊 Processing Result:', result)

  // 4. Verify status updated
  const updated = await prisma.emailQueue.findUnique({
    where: { id: queued.id }
  })

  if (updated?.status === 'sent') {
    console.log('✅ Email marked as SENT!')
  } else if (updated?.status === 'failed') {
    console.log(`⚠️ Email marked as FAILED (Expected if no real SendGrid key): ${updated.lastError}`)
    console.log('   (This confirms the queue processing logic ran, even if sending failed)')
  } else {
    console.error(`❌ Email still in ${updated?.status} status!`)
  }
}

verifyFix()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })
