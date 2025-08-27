# Sanity TypeScript Types - NartaQ Blog

This document explains the updated Sanity TypeScript types and how to use them in your NartaQ blog project.

## Schema Updates Made

### 1. Post Schema Changes
- Changed `body` field to `content` to match seed data structure
- Flattened SEO fields from nested object to individual fields:
  - `seo.metaTitle` → `seoTitle`
  - `seo.metaDescription` → `seoDescription`
- All other fields remain the same

### 2. Schema Fields Summary
The `post` document type now includes:
- `title` (string, required)
- `slug` (slug, required)
- `excerpt` (text, optional)
- `author` (reference to author, optional)
- `mainImage` (image with alt text, optional)
- `categories` (array of category references, optional)
- `tags` (array of strings, optional)
- `featured` (boolean, default false)
- `publishedAt` (datetime, required)
- `readTime` (number, optional)
- `content` (blockContent, optional) ← **Changed from `body`**
- `seoTitle` (string, optional) ← **Flattened**
- `seoDescription` (text, optional) ← **Flattened**

## TypeScript Interfaces

### Core Types

```typescript
// Base Sanity document with common fields
interface Post {
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
```

### Query Result Types

```typescript
// For blog post lists (lighter payload)
interface PostListItem {
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

// For full post pages (with references resolved)
interface PostWithReferences extends Omit<Post, 'author' | 'categories'> {
  author?: Author;
  categories?: Category[];
}
```

## GROQ Queries

All GROQ queries are available in `/src/lib/sanity-queries.ts`:

### Key Queries
- `postsListQuery` - All posts with basic info for listings
- `featuredPostsQuery` - Featured posts for hero sections
- `postQuery` - Single post with full details
- `categoryQuery` - All categories
- `searchPostsQuery` - Text search across posts

### Example Usage
```typescript
import { client } from '@/lib/sanity';
import { postsListQuery, PostListItem } from '@/lib/sanity-queries';

// Get all posts
const posts: PostListItem[] = await client.fetch(postsListQuery);

// Get single post
const post = await client.fetch(postQuery, { slug: 'my-post-slug' });
```

## Utility Functions

Available in `/src/lib/sanity-utils.ts`:

### Data Fetching
```typescript
// Get all posts
const posts = await getAllPosts();

// Get featured posts
const featured = await getFeaturedPosts(); 

// Get single post
const post = await getPost('post-slug');

// Get posts by category
const categoryPosts = await getPostsByCategory('category-id');

// Search posts
const searchResults = await searchPosts('AI automation');

// Get paginated posts
const { posts, hasMore, total } = await getPaginatedPosts(0, 10);
```

### Helper Functions
```typescript
// Format dates
const formattedDate = formatDate(post.publishedAt);
const relativeDate = formatRelativeDate(post.publishedAt);

// Extract text from block content
const plainText = extractTextFromBlocks(post.content);

// Calculate reading time
const readingTime = calculateReadingTime(post.content);

// Generate URLs
const postUrl = getPostUrl(post.slug.current);
const categoryUrl = getCategoryUrl(category.slug.current);
```

## Usage in Components

### Using with Next.js Pages
```typescript
import { GetStaticProps } from 'next';
import { getAllPosts, PostListItem } from '@/lib/sanity';

interface InsightsPageProps {
  posts: PostListItem[];
}

export default function InsightsPage({ posts }: InsightsPageProps) {
  return (
    <div>
      {posts.map(post => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<InsightsPageProps> = async () => {
  const posts = await getAllPosts();
  
  return {
    props: { posts },
    revalidate: 60,
  };
};
```

### Using with App Router
```typescript
import { getAllPosts } from '@/lib/sanity';

export default async function InsightsPage() {
  const posts = await getAllPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

## Rendering Block Content

To render the `content` field (which contains rich text), you'll need `@portabletext/react`:

```bash
npm install @portabletext/react
```

```typescript
import { PortableText } from '@portabletext/react';

function PostContent({ post }: { post: PostWithReferences }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div className="prose">
        <PortableText value={post.content || []} />
      </div>
    </div>
  );
}
```

## Migration Notes

If you have existing code using the old schema:

### Field Name Changes
- `post.body` → `post.content`
- `post.seo.metaTitle` → `post.seoTitle`
- `post.seo.metaDescription` → `post.seoDescription`

### Schema Deployment
After making these changes, deploy the schema:
```bash
npx sanity schema deploy
```

### Existing Content
Existing documents will continue to work, but you should:
1. Run the seed script to populate with correctly structured content
2. Update existing documents in Sanity Studio to use the new field structure

## Type Safety Benefits

With these updated types, you get:
- **Compile-time checking** - TypeScript will catch field name errors
- **IntelliSense support** - Auto-completion for all Sanity fields
- **Consistent data structure** - All components use the same interfaces
- **Query validation** - GROQ queries are type-checked against schemas
- **Refactoring safety** - Renaming fields updates all references

## Best Practices

1. **Always use the typed queries** from `sanity-queries.ts`
2. **Import types from the main export** at `@/lib/sanity`
3. **Use PostListItem for listings** and PostWithReferences for full pages
4. **Handle optional fields** with conditional rendering
5. **Use utility functions** for consistent date formatting and URL generation