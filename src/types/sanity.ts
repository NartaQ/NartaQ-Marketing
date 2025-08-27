// Sanity TypeScript interfaces for NartaQ blog

export interface SanityImageAsset {
  _id: string;
  url: string;
}

export interface SanityImage {
  asset: SanityImageAsset;
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface SanityReference {
  _type: 'reference';
  _ref: string;
}

export interface SanitySlug {
  current: string;
  _type: 'slug';
}

export interface SanityBlockContent {
  _type: 'block';
  _key: string;
  children: Array<{
    _type: 'span';
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<any>;
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
  listItem?: 'bullet' | 'number';
  level?: number;
}

export interface Category {
  _id: string;
  _type: 'category';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: SanitySlug;
  description?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

export interface Author {
  _id: string;
  _type: 'author';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  slug: SanitySlug;
  image?: SanityImage;
  bio?: SanityBlockContent[];
}

export interface Post {
  _id: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  author?: SanityReference | Author;
  mainImage?: SanityImage;
  categories?: Array<SanityReference | Category>;
  tags?: string[];
  featured?: boolean;
  publishedAt: string;
  readTime?: number;
  content?: SanityBlockContent[];
  seoTitle?: string;
  seoDescription?: string;
}

// Populated versions (after GROQ queries with references resolved)
export interface PostWithReferences extends Omit<Post, 'author' | 'categories'> {
  author?: Author;
  categories?: Category[];
}

// Utility types for GROQ queries
export interface PostListItem {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  publishedAt: string;
  readTime?: number;
  featured?: boolean;
  mainImage?: SanityImage;
  categories?: Array<{
    _id: string;
    title: string;
    slug: SanitySlug;
    color?: string;
  }>;
  author?: {
    _id: string;
    name: string;
    image?: SanityImage;
  };
}

export interface FeaturedPost extends PostListItem {
  content?: SanityBlockContent[];
  seoTitle?: string;
  seoDescription?: string;
}

// For category filtering
export interface CategoryWithCount extends Category {
  postCount: number;
}

// GROQ query result types
export interface InsightsPageData {
  posts: PostListItem[];
  categories: Category[];
  featuredPosts: FeaturedPost[];
  totalPosts: number;
}

// Search and filtering types
export interface PostFilters {
  category?: string;
  search?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
}

export interface PaginatedPosts {
  posts: PostListItem[];
  hasMore: boolean;
  total: number;
}