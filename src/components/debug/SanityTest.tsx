'use client'

import { useEffect, useState } from 'react'
import { client } from '../../lib/sanity'

export default function SanityTest() {
 const [testData, setTestData] = useState<any>(null)
 const [error, setError] = useState<string | null>(null)
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  const testSanityConnection = async () => {
   try {
    console.log('Testing Sanity connection...')
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
    console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)

    // Test basic connection
    const basicQuery = `*[_type == "post"][0..2]`
    const posts = await client.fetch(basicQuery)
    console.log('Sample posts:', posts)

    // Test callToAction documents
    const ctaQuery = `*[_type == "callToAction"]`
    const ctas = await client.fetch(ctaQuery)
    console.log('All CTAs:', ctas)

    setTestData({ posts, ctas })
   } catch (err) {
    console.error('Sanity connection error:', err)
    setError(err instanceof Error ? err.message : 'Unknown error')
   } finally {
    setLoading(false)
   }
  }

  testSanityConnection()
 }, [])

 if (loading) return <div>Testing Sanity connection...</div>
 if (error) return <div>Error: {error}</div>

 return (
  <div className="p-4 bg-gray-100 rounded">
   <h3>Sanity Connection Test</h3>
   <p>Posts found: {testData?.posts?.length || 0}</p>
   <p>CTAs found: {testData?.ctas?.length || 0}</p>
   <details>
    <summary>Raw Data</summary>
    <pre>{JSON.stringify(testData, null, 2)}</pre>
   </details>
  </div>
 )
}