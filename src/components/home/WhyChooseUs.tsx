"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Headset, PlaneTakeoff, CreditCard, HeartHandshake } from 'lucide-react'

export const WhyChooseUs = () => {
  const features = [
    { icon: PlaneTakeoff, title: 'Luxury Travel', desc: 'Curated 5-star experiences' },
    { icon: Headset, title: '24/7 Support', desc: 'Global concierge on call' },
    { icon: ShieldCheck, title: 'Insured Trips', desc: 'Travel with complete peace of mind' },
    { icon: CreditCard, title: 'Price Guarantee', desc: 'Best value for elite bookings' },
    { icon: HeartHandshake, title: 'Local Guides', desc: 'Deeply authentic connections' },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-24 bg-primary/5 border-t border-muted overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12"
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={item} className="flex flex-col items-center text-center group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 group-hover:bg-primary text-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl"
              >
                <f.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground font-body max-w-[150px]">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}