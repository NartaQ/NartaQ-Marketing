import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Apply: UI/UX Designer',
    subtitle: 'Shape the user experience for founders and investors',
    category: 'Design',
    isCareerPage: true,
  })
}