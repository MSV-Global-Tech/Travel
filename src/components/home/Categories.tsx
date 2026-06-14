
"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { cn } from '@/lib/utils'

export const Categories = () => {
  const categories = [
    { name: 'Taj Mahal', id: 'cat-heritage', span: 'col-span-1 md:col-span-2' },
    { name: 'Golden Temple', id: 'cat-backwaters', span: 'col-span-1' },
    { name: 'Himalayan Peaks', id: 'cat-mountains', span: 'col-span-1' },
    { name: 'Hampi', id: 'cat-desert', span: 'col-span-1 md:col-span-2' },
    { name: 'India Gate', id: 'cat-beaches', span: 'col-span-1' },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-4 block">Incredible India</span>
          <h2 className="text-4xl lg:text-5xl font-headline">Explore by Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[400px]">
          {categories.map((cat, i) => {
            const imgData = PlaceHolderImages.find(img => img.id === cat.id);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn("relative group overflow-hidden rounded-2xl shadow-lg cursor-default", cat.span)}
              >
                <Image 
                  src={imgData?.imageUrl || "/KASHMIR.jpg"}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint={imgData?.imageHint || "india travel"}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <motion.h3 
                    className="text-2xl lg:text-3xl font-headline mb-4 tracking-wide text-center"
                  >
                    {cat.name}
                  </motion.h3>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-[2px] bg-secondary origin-center"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
