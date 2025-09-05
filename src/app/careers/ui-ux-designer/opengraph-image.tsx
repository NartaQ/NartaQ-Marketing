import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'UI/UX Designer',
    subtitle: 'Design intuitive experiences for founders and investors',
    category: 'Design',
    isCareerPage: true,
  })
}