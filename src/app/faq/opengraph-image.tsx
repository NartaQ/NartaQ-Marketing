import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Frequently Asked Questions',
    subtitle: 'Get answers to common questions about NartaQ',
    category: 'Support',
  })
}