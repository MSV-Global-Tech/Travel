
"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Heart, Menu, X, User, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const navLinks = [
    { name: 'Destinations', href: '#' },
    { name: 'Tour Packages', href: '#' },
    { name: 'Indian Heritage', href: '#' },
    { name: 'Adventures', href: '#' },
  ]

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-white/90 backdrop-blur-lg border-b py-3 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <button 
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
        </button>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center space-x-8 uppercase tracking-widest text-[10px] font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={handleDisabledClick}
              className={cn(
                "hover:text-primary transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" onClick={handleDisabledClick} className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2">
          <Globe className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
          <div className="flex flex-col items-center text-center">
            <span className={cn("font-headline text-2xl lg:text-3xl tracking-tighter leading-none", isScrolled ? "text-foreground" : "text-white")}>VOYAGE</span>
            <span className="text-[8px] tracking-[0.4em] uppercase font-bold text-primary -mt-1">Elite</span>
          </div>
        </Link>

        {/* Action Icons */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className={cn("p-2 transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary")}>
            <Search className="w-5 h-5" />
          </button>
          <button className={cn("hidden lg:block p-2 transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary")}>
            <User className="w-5 h-5" />
          </button>
          <Link href="#" onClick={handleDisabledClick} className={cn("p-2 transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary")}>
            <Heart className="w-5 h-5" />
          </Link>
          <Button className="hidden sm:flex rounded-full h-9 px-6 text-[10px] uppercase tracking-widest font-bold bg-secondary text-white hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20" asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 flex flex-col items-center justify-center p-8 lg:hidden animate-in fade-in zoom-in duration-300">
          <button 
            className="absolute top-8 right-8 p-2 text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center space-y-8 uppercase tracking-widest text-lg font-bold">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  handleDisabledClick(e)
                  setMobileMenuOpen(false)
                }}
                className="hover:text-primary transition-colors text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/book" 
              className="px-8 py-3 bg-secondary text-white rounded-full text-sm font-bold tracking-widest uppercase shadow-xl shadow-secondary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book My Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
