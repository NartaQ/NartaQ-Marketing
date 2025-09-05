import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Join Elite Investors',
    subtitle: 'Access curated deal flow and smart investment opportunities',
    category: 'For Investors',
  })
}