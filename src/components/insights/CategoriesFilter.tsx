'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Category } from '@/types/sanity'

interface CategoriesFilterProps {
  categories: Category[]
}

export default function CategoriesFilter({ categories }: CategoriesFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  // Add "All" option at the beginning
  const allCategories = [
    { _id: 'all', title: 'All Posts', slug: { current: 'all' } },
    ...categories
  ]

  return (
    <div className='flex flex-wrap gap-2 md:gap-4 justify-center'>
      {allCategories.map((category, index) => (
        <motion.button
          key={category._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category.slug.current)}
          className={cn(
            'px-4 py-2 rounded-lg font-medium transition-all duration-300',
            'border border-[#2a2b35] hover:border-[#a98b5d]/50',
            activeCategory === category.slug.current
              ? 'bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black'
              : 'bg-[#1a1b23] text-gray-300 hover:text-white hover:bg-[#2a2b35]'
          )}
        >
          {category.title}
        </motion.button>
      ))}
    </div>
  )
}