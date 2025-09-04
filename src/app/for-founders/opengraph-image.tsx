import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'For Founders',
    subtitle: 'Get funded faster with AI-powered investor matching',
    category: 'For Founders',
  })
}