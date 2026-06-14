"use client"

import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Globe } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white/70 py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-8 group">
              <Globe className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
              <div className="flex flex-col">
                <span className="font-headline text-3xl tracking-tighter text-white">VOYAGE</span>
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary -mt-1">Elite</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Redefining the art of exploration. Since 1998, Voyage Elite has been the premier choice for travelers who seek the extraordinary and demand the impeccable.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-headline text-xl mb-8">Destinations</h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest font-bold text-[10px]">
              <li><Link href="/destinations" className="hover:text-primary transition-colors">Maldives & Islands</Link></li>
              <li><Link href="/destinations" className="hover:text-primary transition-colors">European Escapes</Link></li>
              <li><Link href="/destinations" className="hover:text-primary transition-colors">African Safaris</Link></li>
              <li><Link href="/destinations" className="hover:text-primary transition-colors">Asian Wonders</Link></li>
              <li><Link href="/destinations" className="hover:text-primary transition-colors">Arctic Expeditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-headline text-xl mb-8">India Headquarters</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 800-VOYAGE-ELITE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>concierge@voyageelite.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-headline text-xl mb-8">Elite Newsletter</h4>
            <p className="text-sm mb-6">Receive curated travel inspiration and early access to invitation-only retreats.</p>
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Email Address" 
                className="bg-white/5 border-white/10 text-white rounded-full h-12 px-6 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full uppercase tracking-widest text-[10px] font-bold h-12">
                Join the Journey
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© 2024 VOYAGE ELITE LUXURY TRAVEL. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Global Offices</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
