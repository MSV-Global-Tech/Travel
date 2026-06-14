
"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

import Link from 'next/link'

const handleDisabledClick = (e: React.MouseEvent) => {
  e.preventDefault()
}

export const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-airplane')

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with subtle zoom */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image
          src={heroImage?.imageUrl || "/hero.webp"}
          alt="Aeroplane in Blue Sky"
          fill
          className="object-cover"
          priority
          data-ai-hint="airplane sky"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl">

          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl lg:text-8xl font-headline mb-6 leading-tight"
          >
            Discover Your<br />
            <span className="text-primary italic">Next Adventure</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl font-body mb-10 text-white/90 leading-relaxed max-w-xl"
          >
            Experience the world like never before. From the spiritual soul of Varanasi to the pristine peaks of the Himalayas, we curate your ultimate Indian escape.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" onClick={handleDisabledClick} className="bg-primary hover:bg-primary/90 text-white px-10 rounded-full tracking-widest h-14 uppercase text-xs font-bold transition-all shadow-xl hover:scale-105">
              Explore Destinations
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90 hover:text-black px-10 rounded-full tracking-widest h-14 uppercase text-xs font-bold transition-all" asChild>
              <Link href="/book">Plan My Trip</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats/Floating element */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 right-12 hidden lg:flex bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 items-center space-x-6"
      >
        <div className="flex flex-col">
          <span className="text-3xl font-headline font-bold">1000+</span>
          <span className="text-[10px] uppercase tracking-widest text-white/70">Indian Stays</span>
        </div>
        <div className="w-[1px] h-12 bg-white/20" />
        <div className="flex flex-col">
          <span className="text-3xl font-headline font-bold">24/7</span>
          <span className="text-[10px] uppercase tracking-widest text-white/70">Support</span>
        </div>
      </motion.div>
    </section>
  )
}
