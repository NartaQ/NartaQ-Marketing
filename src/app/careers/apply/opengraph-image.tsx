import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Apply for Career',
    subtitle: 'Take the next step in your career with NartaQ',
    category: 'Applications',
    isCareerPage: true,
  })
}
