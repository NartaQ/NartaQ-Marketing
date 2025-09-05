import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Career Opportunities',
    subtitle: 'Join our mission to revolutionize venture capital',
    category: 'Careers',
    isCareerPage: true,
  })
}