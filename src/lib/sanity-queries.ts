import { groq } from 'next-sanity';

// Base queries
export const categoryQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    description,
    color
  }
`;

export const authorQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    name,
    slug,
    image {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    bio
  }
`;

// Post list query for insights page
export const postsListQuery = groq`
  *[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  }
`;

// Featured posts query
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true && publishedAt <= now()] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    },
    content,
    seoTitle,
    seoDescription
  }
`;

// Single post query
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    categories[]-> {
      _id,
      title,
      slug,
      description,
      color
    },
    tags,
    author-> {
      _id,
      name,
      slug,
      image {
        asset-> {
          _id,
          url
        },
        alt
      },
      bio
    },
    content,
    seoTitle,
    seoDescription
  }
`;

// Posts by category query
export const postsByCategoryQuery = groq`
  *[_type == "post" && references($categoryId) && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  }
`;

// Search query
export const searchPostsQuery = groq`
  *[_type == "post" && publishedAt <= now() && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    pt::text(content) match $searchTerm + "*"
  )] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  }
`;

// Related posts query (posts with similar categories)
export const relatedPostsQuery = groq`
  *[_type == "post" && _id != $currentPostId && count((categories[]._ref)[@ in $categoryIds]) > 0 && publishedAt <= now()] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  }
`;

// Categories with post count
export const categoriesWithCountQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    slug,
    description,
    color,
    "postCount": count(*[_type == "post" && references(^._id) && publishedAt <= now()])
  } | order(title asc)
`;

// Sitemap queries
export const sitemapPostsQuery = groq`
  *[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    slug,
    publishedAt,
    _updatedAt
  }
`;

export const sitemapCategoriesQuery = groq`
  *[_type == "category"] {
    _id,
    slug,
    _updatedAt
  }
`;

// Paginated posts query
export const paginatedPostsQuery = groq`
  *[_type == "post" && publishedAt <= now()] | order(publishedAt desc) [$offset...($offset + $limit)] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      image {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  }
`;

// Total posts count
export const totalPostsQuery = groq`
  count(*[_type == "post" && publishedAt <= now()])
`;