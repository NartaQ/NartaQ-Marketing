// Example usage of updated Sanity types in React components

import React from 'react';
import { PostListItem, Category, PostWithReferences, getAllPosts, getAllCategories } from '@/lib/sanity';

// Example: Insights page component with proper TypeScript typing
interface InsightsPageProps {
  posts: PostListItem[];
  categories: Category[];
}

export default function InsightsPage({ posts, categories }: InsightsPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Insights</h1>
      
      {/* Categories filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category._id}
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            {post.excerpt && (
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
            )}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.readTime} min read</span>
              <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
            </div>
            {post.categories && post.categories.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

// Example: Next.js getStaticProps with proper typing
export async function getStaticProps() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 60, // Revalidate every minute
  };
}

// Example: Single post page component
interface PostPageProps {
  post: PostWithReferences;
}

function PostPage({ post }: PostPageProps) {
  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      {post.excerpt && (
        <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
      )}

      <div className="flex items-center gap-4 mb-8">
        {post.author && (
          <div className="flex items-center gap-2">
            <span className="text-gray-700">By {post.author.name}</span>
          </div>
        )}
        <span className="text-gray-500">•</span>
        <time className="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString()}
        </time>
        {post.readTime && (
          <>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{post.readTime} min read</span>
          </>
        )}
      </div>

      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.categories.map((category) => (
            <span
              key={category._id}
              className={`px-3 py-1 rounded-full text-sm ${
                category.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                category.color === 'green' ? 'bg-green-100 text-green-800' :
                category.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                category.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                category.color === 'red' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}
            >
              {category.title}
            </span>
          ))}
        </div>
      )}

      {/* Render block content here */}
      <div className="prose max-w-none">
        {/* You would use a library like @portabletext/react to render the content */}
        {post.content && (
          <div>Content would be rendered here with PortableText</div>
        )}
      </div>
    </article>
  );
}