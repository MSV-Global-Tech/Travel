import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { Categories } from '@/components/home/Categories'
import { BestSellers } from '@/components/home/BestSellers'
import { AIConcierge } from '@/components/home/AIConcierge'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Consultation } from '@/components/home/Consultation'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Categories />
      <BestSellers />
      <AIConcierge />
      <Consultation />
      
      {/* Testimonials or Instagram Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-4 block">Traveler Stories</span>
          <h2 className="text-4xl lg:text-5xl font-headline mb-16">Postcards from Voyage Elite</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative overflow-hidden group rounded-2xl">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1887&auto=format&fit=crop" alt="Insta" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="aspect-square relative overflow-hidden group rounded-2xl">
              <img src="/hero.webp" alt="Insta" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="aspect-square relative overflow-hidden group rounded-2xl">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1964&auto=format&fit=crop" alt="Insta" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="aspect-square relative overflow-hidden group rounded-2xl">
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1887&auto=format&fit=crop" alt="Insta" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  )
}