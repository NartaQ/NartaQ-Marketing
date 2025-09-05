import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Apply: Community Manager',
    subtitle: 'Grow and nurture our founder and investor community',
    category: 'Marketing',
    isCareerPage: true,
  })
}