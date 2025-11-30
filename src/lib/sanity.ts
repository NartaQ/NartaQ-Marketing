import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

/**
 * Cached Sanity fetch helper
 * Wraps client.fetch with Next.js caching options
 * @param query - GROQ query string
 * @param params - Query parameters
 * @param options - Caching options (revalidate in seconds, tags)
 */
export async function sanityFetch<T = any>(
  query: string,
  params: Record<string, any> = {},
  options: { revalidate?: number; tags?: string[] } = {}
): Promise<T> {
  const { revalidate = 3600, tags = [] } = options
  
  return client.fetch<T>(query, params, {
    next: {
      revalidate,
      tags,
    },
  })
}
