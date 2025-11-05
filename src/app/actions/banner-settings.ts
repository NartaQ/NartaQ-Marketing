'use server'

import { client } from '@/lib/sanity'

export interface BannerItem {
  bannerText: string
  bannerEmoji?: string
  bannerLinkText: string
  bannerLinkUrl: string
  bannerBackgroundColor: string
  bannerTextColor: string
}

export interface BannerSettings {
  bannerEnabled: boolean
  banners: BannerItem[]
  rotationInterval: number
  scrollSpeed: number
  bannerDismissible: boolean
}

/**
 * Fetches banner settings from Sanity CMS
 * Returns default settings if not found or on error
 */
export async function getBannerSettings(): Promise<BannerSettings> {
  try {
    const query = `*[_type == "bannerSettings"][0] {
      bannerEnabled,
      banners[] {
        bannerText,
        bannerEmoji,
        bannerLinkText,
        bannerLinkUrl,
        bannerBackgroundColor,
        bannerTextColor
      },
      rotationInterval,
      scrollSpeed,
      bannerDismissible
    }`
    
    const settings = await client.fetch(query)
    
    if (settings && settings.banners && settings.banners.length > 0) {
      return settings
    }
    
    // Return default settings if not found
    return getDefaultBannerSettings()
  } catch (error) {
    console.error('Error fetching banner settings:', error)
    // Return default settings on error
    return getDefaultBannerSettings()
  }
}

/**
 * Returns default banner settings with a single banner
 */
function getDefaultBannerSettings(): BannerSettings {
  return {
    bannerEnabled: true,
    banners: [
      {
        bannerText: 'Get Early Access',
        bannerEmoji: '🚀',
        bannerLinkText: 'Apply Now',
        bannerLinkUrl: '/apply',
        bannerBackgroundColor: 'var(--lion)',
        bannerTextColor: 'black',
      }
    ],
    rotationInterval: 5,
    scrollSpeed: 50,
    bannerDismissible: false,
  }
}