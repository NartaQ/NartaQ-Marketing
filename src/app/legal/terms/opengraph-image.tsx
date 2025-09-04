import { generateOGImage } from '@/lib/og-image'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return generateOGImage({
    title: 'Terms of Service',
    subtitle: 'Terms and conditions for using the NartaQ platform',
    category: 'Legal',
  })
}