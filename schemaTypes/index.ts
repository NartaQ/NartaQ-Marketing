import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import careerPosition, { salaryRangeType } from './careerPosition'
import careerPageSettings, { benefitType, cultureValueType } from './careerPageSettings'
import siteSettings from './siteSettings'
import bannerSettings, { bannerItemType } from './bannerSettings'

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  salaryRangeType,
  benefitType,
  cultureValueType,
  bannerItemType,
  careerPosition,
  careerPageSettings,
  siteSettings,
  bannerSettings,
]
