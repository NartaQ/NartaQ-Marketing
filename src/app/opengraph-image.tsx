import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'AI-Powered Startup Funding Platform',
    subtitle: 'Connecting founders with the right investors through automated deal execution',
    category: 'Platform',
  })
}