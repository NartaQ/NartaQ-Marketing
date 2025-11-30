'use server'

import { sanityFetch } from '@/lib/sanity'

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
 * Returns default settings (including cohort urgency banner) if not found or on error
 * 
 * The cohort urgency banner is always included as the first banner by default.
 * Marketing team can add additional banners in Sanity CMS which will rotate with it.
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
    
    const settings = await sanityFetch(query, {}, { revalidate: 3600, tags: ['banner-settings'] })
    
    
    // If CMS has settings, merge with cohort urgency banner as first item
    if (settings && settings.banners && settings.banners.length > 0) {
      const cohortBanner = {
        bannerText: 'Cohort Urgency Banner',
        bannerEmoji: '🚀',
        bannerLinkText: 'Apply Now',
        bannerLinkUrl: '/apply/cohort-urgency',
        bannerBackgroundColor: '#a98b5d',
        bannerTextColor: 'white',
      }
      
      // Check if cohort urgency banner already exists in CMS
      const hasCohortBanner = settings.banners.some(
        (b: BannerItem) => b.bannerLinkUrl === '/apply/cohort-urgency'
      )
      
      const result = {
        ...settings,
        banners: hasCohortBanner 
          ? settings.banners 
          : [cohortBanner, ...settings.banners]
      }
      
      return result
    }
    
    // Return default settings if not found
    const defaultSettings = getDefaultBannerSettings()
    return defaultSettings
  } catch (error) {
    console.error('Error fetching banner settings:', error)
    // Return default settings on error
    const defaultSettings = getDefaultBannerSettings()
    console.log('Returning default settings after error:', defaultSettings)
    return defaultSettings
  }
}

/**
 * Returns default banner settings with cohort urgency banner as the first item
 */
function getDefaultBannerSettings(): BannerSettings {
  return {
    bannerEnabled: true,
    banners: [
      {
        bannerText: 'Cohort Urgency Banner',
        bannerEmoji: '🚀',
        bannerLinkText: 'Apply Now',
        bannerLinkUrl: '/apply/cohort-urgency',
        bannerBackgroundColor: '#a98b5d',
        bannerTextColor: 'white',
      }
    ],
    rotationInterval: 5,
    scrollSpeed: 50,
    bannerDismissible: true,
  }
}