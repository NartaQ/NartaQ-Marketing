import { client } from '../../sanity/lib/client';
import { 
  PostListItem, 
  Category, 
  Post, 
  PostWithReferences,
  PaginatedPosts,
  InsightsPageData,
  PostFilters 
} from '@/types/sanity';
import {
  postsListQuery,
  featuredPostsQuery,
  categoryQuery,
  postQuery,
  postsByCategoryQuery,
  searchPostsQuery,
  relatedPostsQuery,
  categoriesWithCountQuery,
  paginatedPostsQuery,
  totalPostsQuery
} from './sanity-queries';

// Get all posts for insights page
export async function getAllPosts(): Promise<PostListItem[]> {
  try {
    return await client.fetch(postsListQuery);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Get featured posts
export async function getFeaturedPosts(): Promise<PostListItem[]> {
  try {
    return await client.fetch(featuredPostsQuery);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

// Get all categories
export async function getAllCategories(): Promise<Category[]> {
  try {
    return await client.fetch(categoryQuery);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Get categories with post count
export async function getCategoriesWithCount() {
  try {
    return await client.fetch(categoriesWithCountQuery);
  } catch (error) {
    console.error('Error fetching categories with count:', error);
    return [];
  }
}

// Get single post by slug
export async function getPost(slug: string): Promise<PostWithReferences | null> {
  try {
    return await client.fetch(postQuery, { slug });
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Get posts by category
export async function getPostsByCategory(categoryId: string): Promise<PostListItem[]> {
  try {
    return await client.fetch(postsByCategoryQuery, { categoryId });
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

// Search posts
export async function searchPosts(searchTerm: string): Promise<PostListItem[]> {
  try {
    return await client.fetch(searchPostsQuery, { searchTerm });
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

// Get related posts
export async function getRelatedPosts(currentPostId: string, categoryIds: string[]): Promise<PostListItem[]> {
  try {
    return await client.fetch(relatedPostsQuery, { currentPostId, categoryIds });
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

// Get paginated posts
export async function getPaginatedPosts(offset: number = 0, limit: number = 10): Promise<PaginatedPosts> {
  try {
    const [posts, totalCount] = await Promise.all([
      client.fetch(paginatedPostsQuery, { offset, limit }),
      client.fetch(totalPostsQuery)
    ]);

    return {
      posts,
      hasMore: offset + limit < totalCount,
      total: totalCount
    };
  } catch (error) {
    console.error('Error fetching paginated posts:', error);
    return {
      posts: [],
      hasMore: false,
      total: 0
    };
  }
}

// Get all data for insights page
export async function getInsightsPageData(): Promise<InsightsPageData> {
  try {
    const [posts, categories, featuredPosts, totalPosts] = await Promise.all([
      getAllPosts(),
      getAllCategories(),
      getFeaturedPosts(),
      client.fetch(totalPostsQuery)
    ]);

    return {
      posts,
      categories,
      featuredPosts,
      totalPosts
    };
  } catch (error) {
    console.error('Error fetching insights page data:', error);
    return {
      posts: [],
      categories: [],
      featuredPosts: [],
      totalPosts: 0
    };
  }
}

// Utility functions for working with Sanity data

// Format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Format date for relative time
export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }
}

// Extract plain text from block content
export function extractTextFromBlocks(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  
  return blocks
    .filter(block => block._type === 'block')
    .map(block => 
      block.children
        ?.filter((child: any) => child._type === 'span')
        .map((span: any) => span.text)
        .join('')
    )
    .join(' ');
}

// Get reading time
export function calculateReadingTime(content: any[]): number {
  const text = extractTextFromBlocks(content);
  const words = text.split(/\s+/).length;
  const wordsPerMinute = 200; // Average reading speed
  return Math.ceil(words / wordsPerMinute);
}

// Get post URL
export function getPostUrl(slug: string): string {
  return `/insights/${slug}`;
}

// Get category URL
export function getCategoryUrl(slug: string): string {
  return `/insights/category/${slug}`;
}

// Filter posts by various criteria
export function filterPosts(posts: PostListItem[], filters: PostFilters): PostListItem[] {
  let filtered = [...posts];

  if (filters.category) {
    filtered = filtered.filter(post => 
      post.categories?.some(cat => cat.slug.current === filters.category)
    );
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt?.toLowerCase().includes(searchLower)
    );
  }

  if (filters.featured !== undefined) {
    filtered = filtered.filter(post => post.featured === filters.featured);
  }

  if (filters.offset) {
    filtered = filtered.slice(filters.offset);
  }

  if (filters.limit) {
    filtered = filtered.slice(0, filters.limit);
  }

  return filtered;
}