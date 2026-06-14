"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, Loader2, Plane, Map, IndianRupee } from 'lucide-react'
import { aiTravelRecommendation, type AITravelRecommendationOutput } from '@/ai/flows/ai-travel-recommendation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const handleDisabledClick = (e: React.MouseEvent) => {
  e.preventDefault()
}

export const AIConcierge = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AITravelRecommendationOutput | null>(null)

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setLoading(true)
    setResult(null)
    try {
      const output = await aiTravelRecommendation({ preferenceOrVibe: input })
      setResult(output)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Decor Elements */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-primary/10 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-primary mb-4"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="uppercase tracking-[0.3em] text-xs font-bold">AI Travel Curator</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-headline mb-6"
          >
            Where Does Your Heart Want to Go?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-muted-foreground font-body"
          >
            Tell us about your dream vacation vibes—whether it's "sipping wine in Tuscany" or "surfing in Bali"—and our AI will build your perfect itinerary.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <form onSubmit={handleRecommend} className="flex flex-col sm:flex-row gap-4 p-3 bg-white border border-primary/20 rounded-full shadow-2xl transition-all duration-300 focus-within:ring-4 focus-within:ring-primary/10">
            <div className="flex-1 flex items-center px-4">
              <Map className="w-5 h-5 text-primary/40 mr-3" />
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. A romantic beach getaway with zero crowds..."
                className="bg-transparent border-none text-foreground h-14 placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-lg p-0"
              />
            </div>
            <Button 
              disabled={loading}
              className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-10 uppercase tracking-widest text-xs font-bold shrink-0 transition-all active:scale-95"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <span className="flex items-center">
                  Inspire Me <Plane className="ml-2 w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
        </motion.div>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-12 p-10 bg-white border border-primary/10 text-center relative overflow-hidden rounded-3xl shadow-xl"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <p className="italic text-xl font-headline leading-relaxed text-foreground relative z-10">
                  "{result.summary}"
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {result.recommendations.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Card className="bg-white border-primary/10 overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-3xl h-full flex flex-col border">
                      <div className="relative aspect-video overflow-hidden">
                        <Image 
                          src={item.imageUrl} 
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <span className="px-4 py-1.5 bg-secondary text-white text-[10px] uppercase font-bold tracking-widest rounded-full shadow-lg">
                            {item.type}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                           <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-primary text-[10px] uppercase font-bold tracking-widest rounded-full shadow-lg flex items-center">
                            <IndianRupee className="w-3 h-3 mr-1" /> {item.price}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-headline mb-4 text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                          {item.description}
                        </p>
                        <Button onClick={handleDisabledClick} className="w-full bg-background border border-primary text-primary hover:bg-primary hover:text-white rounded-full uppercase text-[10px] tracking-widest font-bold group/btn transition-all">
                          Plan This Journey <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
