"use client"

import React from 'react'
import { Calendar, UserCheck, PhoneCall, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Consultation = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-primary/5 rounded-[40px] border border-primary/10 p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-4 block">Concierge Service</span>
              <h2 className="text-4xl lg:text-5xl font-headline mb-8 leading-tight">Your Private Travel Curator</h2>
              <p className="text-lg text-muted-foreground font-body mb-10 leading-relaxed">
                Unlock the world's most exclusive experiences with a dedicated travel expert. Whether you need a private jet across the Atlantic or a hidden villa in the hills of Provence, we handle every detail so you can focus on the journey.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest">Expert Planning</h4>
                    <p className="text-sm text-muted-foreground">Certified Curators</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest">Global Access</h4>
                    <p className="text-sm text-muted-foreground">Private Vault Deals</p>
                  </div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white px-12 h-14 rounded-full uppercase tracking-widest text-[10px] font-bold shadow-lg shadow-primary/20">
                Book My Free Consultation
              </Button>
            </motion.div>

            {/* Image */}
            <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden hidden lg:block">
              <Image 
                src="/tourist.avif" 
                alt="Travel Consultant" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}