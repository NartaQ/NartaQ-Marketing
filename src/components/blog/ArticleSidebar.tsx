'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as LinkIcon, Check, Share2 } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

interface ArticleSidebarProps {
  category?: {
    title: string
    slug: {
      current: string
    }
  }
  author: {
    name: string
    image?: {
      asset: {
        _ref: string
      }
    }
  }
  authorRole?: string
}

export default function ArticleSidebar({ category, author, authorRole }: ArticleSidebarProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  return (
    <aside className='space-y-8'>
      {/* Breadcrumb */}
      <div>
        <Link
          href='/blog'
          className='text-sm text-[#dcd7ce]/60 hover:text-[#a98b5d] transition-colors inline-flex items-center gap-1'
        >
          ← Blog
        </Link>
      </div>

      {/* Category */}
      {category && (
        <div>
          <div className='text-xs font-semibold text-[#dcd7ce]/50 mb-2 tracking-wider'>
            CATEGORY
          </div>
          <Link
            href={`/blog?category=${category.slug.current}`}
            className='inline-block bg-[#a98b5d]/10 border border-[#a98b5d]/20 text-[#a98b5d] px-3 py-1.5 rounded-full text-sm font-medium hover:bg-[#a98b5d]/20 transition-colors'
          >
            {category.title}
          </Link>
        </div>
      )}

      {/* Author */}
      <div>
        <div className='text-xs font-semibold text-[#dcd7ce]/50 mb-3 tracking-wider'>
          WRITTEN BY
        </div>
        <div className='flex items-start gap-3'>
          {author.image ? (
            <div className='relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-[#a98b5d]/30 flex-shrink-0'>
              <Image
                src={urlFor(author.image).width(48).height(48).url()}
                alt={author.name}
                fill
                className='object-cover'
              />
            </div>
          ) : (
            <div className='h-12 w-12 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#dcd7ce] flex items-center justify-center flex-shrink-0'>
              <span className='text-black font-semibold text-lg'>
                {author.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className='font-semibold text-[#dcd7ce]'>{author.name}</div>
            {authorRole && typeof authorRole === 'string' && (
              <div className='text-sm text-[#dcd7ce]/60 mt-0.5'>{authorRole}</div>
            )}
          </div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className='flex gap-2'>
        <button
          onClick={handleCopyLink}
          className='p-2.5 bg-[#1a1a1a] border border-[#a98b5d]/20 rounded-lg hover:bg-[#a98b5d]/10 hover:border-[#a98b5d]/40 transition-all text-[#dcd7ce] group relative'
          aria-label='Copy link'
        >
          {copied ? (
            <Check className='w-4 h-4 text-[#a98b5d]' />
          ) : (
            <LinkIcon className='w-4 h-4' />
          )}
          <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#dcd7ce]/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
            {copied ? 'Copied!' : 'Copy link'}
          </span>
        </button>

        <button
          onClick={handleShare}
          className='p-2.5 bg-[#1a1a1a] border border-[#a98b5d]/20 rounded-lg hover:bg-[#a98b5d]/10 hover:border-[#a98b5d]/40 transition-all text-[#dcd7ce] group relative'
          aria-label='Share'
        >
          <Share2 className='w-4 h-4' />
          <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#dcd7ce]/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
            Share
          </span>
        </button>
      </div>
    </aside>
  )
}
