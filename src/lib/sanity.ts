// Re-export all Sanity-related types and utilities
export * from '../types/sanity';
export * from './sanity-queries';
export * from './sanity-utils';

// Re-export Sanity client
export { client } from '../../sanity/lib/client';
export { urlFor } from '../../sanity/lib/image';

// Common imports for easy access
export type { 
  Post, 
  Category, 
  Author,
  PostListItem, 
  PostWithReferences,
  InsightsPageData,
  PaginatedPosts,
  PostFilters
} from '../types/sanity';