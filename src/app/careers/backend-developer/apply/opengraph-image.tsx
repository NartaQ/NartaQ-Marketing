import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Apply: Backend Developer',
    subtitle: 'Join our engineering team and build the future of venture capital',
    category: 'Engineering',
    isCareerPage: true,
  })
}