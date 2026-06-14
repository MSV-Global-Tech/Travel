"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Compass, Star, MapPin, IndianRupee } from 'lucide-react'
import { cn } from '@/lib/utils'

const handleDisabledClick = (e: React.MouseEvent) => {
  e.preventDefault()
}

const PACKAGES = [
  {
    id: '1',
    name: 'Serengeti Private Safari',
    price: '4,50,000',
    location: 'Tanzania',
    image: '/KASHMIR.jpg',
    rating: 5,
    tag: 'Trending'
  },
  {
    id: '2',
    name: 'Santorini Sunset Retreat',
    price: '2,65,000',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    tag: 'Popular'
  },
  {
    id: '3',
    name: 'Kyoto Zen Gardens',
    price: '3,95,000',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    rating: 4,
    tag: 'Exclusive'
  },
  {
    id: '4',
    name: 'Icelandic Northern Lights',
    price: '3,40,000',
    location: 'Iceland',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    tag: 'Seasonal'
  }
]

export const BestSellers = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6 border-l-4 border-primary pl-8"
        >
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-4 block">Hand-Picked Experiences</span>
            <h2 className="text-4xl lg:text-5xl font-headline">Trending Tour Packages</h2>
          </div>
          <Link href="#" onClick={handleDisabledClick} className="text-secondary font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors flex items-center group">
            Browse All Tours
            <motion.span 
              className="ml-2 inline-block"
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.map((pkg, index) => (
            <motion.div 
              key={pkg.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-muted"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={pkg.image} 
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white text-secondary hover:bg-secondary hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg"
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-primary text-white hover:bg-primary/90 rounded-full flex items-center justify-center transition-all shadow-lg"
                  >
                    <Compass className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-white/90 backdrop-blur-sm text-secondary text-[10px] uppercase font-bold tracking-widest rounded-full">
                    {pkg.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col items-start">
                <div className="flex items-center text-primary/60 text-[10px] font-bold uppercase tracking-widest mb-2">
                  <MapPin className="w-3 h-3 mr-1" /> {pkg.location}
                </div>
                <h3 className="text-xl font-headline mb-2 group-hover:text-primary transition-colors">{pkg.name}</h3>
                <div className="flex items-center justify-between w-full mt-auto">
                  <p className="text-foreground font-bold text-sm flex items-center">
                    <span className="text-muted-foreground text-[10px] font-normal mr-1">from</span>
                    <IndianRupee className="w-3 h-3 mr-0.5" />
                    {pkg.price}
                  </p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("w-3 h-3", i < pkg.rating ? "fill-secondary text-secondary" : "text-gray-200")} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
