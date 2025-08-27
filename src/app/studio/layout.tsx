import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  ...studioMetadata,
  title: 'NartaQ Studio',
}

export const viewport: Viewport = {
  ...studioViewport,
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}