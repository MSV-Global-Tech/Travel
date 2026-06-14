
"use client"

import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Plane, Calendar, Users, MapPin, Phone, Mail, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from '@/hooks/use-toast'
import Link from 'next/link'

export default function BookNowPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Request Received",
      description: "One of our travel curators will contact you within 24 hours to finalize your itinerary.",
    })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="group hover:bg-transparent p-0 text-muted-foreground hover:text-primary transition-colors">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Back to Home</span>
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-4 block">Reservation Request</span>
            <h1 className="text-5xl lg:text-6xl font-headline mb-6">Begin Your Journey</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to explore Incredible India or the world? Provide us with your details, and we'll craft a bespoke itinerary tailored precisely to your desires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="border-primary/10 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-primary text-white p-8">
                  <CardTitle className="font-headline text-2xl">Elite Support</CardTitle>
                  <CardDescription className="text-white/80">Available 24/7 for our members</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Call Us</p>
                      <p className="font-bold">+91 800-VOYAGE-ELITE</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Email</p>
                      <p className="font-bold">concierge@voyageelite.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Headquarters</p>
                      <p className="font-bold text-sm">Gurugram, Haryana, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-8 bg-secondary/5 rounded-3xl border border-secondary/10">
                <h4 className="font-headline text-xl mb-4">Why Book With Us?</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center"><Plane className="w-4 h-4 mr-2 text-primary" /> Exclusive Private Access</li>
                  <li className="flex items-center"><Plane className="w-4 h-4 mr-2 text-primary" /> Hand-picked 5-Star Stays</li>
                  <li className="flex items-center"><Plane className="w-4 h-4 mr-2 text-primary" /> Dedicated Personal Curator</li>
                </ul>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest ml-2">Full Name</label>
                    <Input placeholder="E.g. Arjun Kapoor" className="h-14 rounded-2xl bg-white border-primary/10 focus:ring-primary" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest ml-2">Email Address</label>
                    <Input type="email" placeholder="arjun@example.com" className="h-14 rounded-2xl bg-white border-primary/10 focus:ring-primary" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest ml-2">Destination Preference</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="E.g. Leh-Ladakh, India" className="h-14 pl-12 rounded-2xl bg-white border-primary/10 focus:ring-primary" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest ml-2">Departure Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input type="date" className="h-14 pl-12 rounded-2xl bg-white border-primary/10 focus:ring-primary" required />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest ml-2">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input type="number" min="1" placeholder="2" className="h-14 pl-12 rounded-2xl bg-white border-primary/10 focus:ring-primary" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest ml-2">Estimated Budget (₹)</label>
                    <Input placeholder="E.g. 5,00,000" className="h-14 rounded-2xl bg-white border-primary/10 focus:ring-primary" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest ml-2">Tell Us Your Vision</label>
                  <Textarea 
                    placeholder="Describe your dream trip—activities, special requests, or specific vibes you're looking for..." 
                    className="min-h-[150px] rounded-2xl bg-white border-primary/10 focus:ring-primary p-6"
                  />
                </div>

                <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-2xl uppercase tracking-widest font-bold shadow-xl shadow-primary/20 transition-all active:scale-95">
                  Submit Reservation Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
