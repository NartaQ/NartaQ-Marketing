import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Apply to NartaQ',
    subtitle: 'Join our platform as a founder, investor, or team member',
    category: 'Applications',
  })
}