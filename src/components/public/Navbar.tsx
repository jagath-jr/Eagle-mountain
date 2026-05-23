'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // 1. Initial Page Load Animation (Desktop Items)
  useEffect(() => {
    // Fades in and slides down the logo and desktop links sequentially
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  // 2. Scroll Hide/Show Animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        gsap.to(headerRef.current, { yPercent: -100, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.to(headerRef.current, { yPercent: 0, duration: 0.4, ease: 'power2.out' });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // 3. Mobile Menu Animation (Container + Text Stagger)
  useEffect(() => {
    if (isOpen) {
      // Open container animation
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      
      // Staggered text entrance for mobile links
      gsap.fromTo(
        '.mobile-nav-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      // Close animation
      gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Projects', href: '/projects' },
    { name: 'Sectors', href: '/sectors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header ref={headerRef} className="w-full font-sans shadow-sm fixed top-0 left-0 z-50 bg-white">
      
      {/* Top Bar - Contact and Hours */}
      <div className="bg-[#254b80] text-gray-100 text-xs sm:text-sm py-2.5 px-4 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="sm:w-4 sm:h-4" />
            <span>+929 333 9296</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="sm:w-4 sm:h-4" />
            <span>info@eaglemountain.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2 hidden sm:flex">
          <Clock size={14} className="sm:w-4 sm:h-4" />
          <span>Mon - Fri 08.00 - 18.00</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white py-4 px-6 lg:px-12 flex justify-between items-center border-b">
        
        {/* Left Side: Logo (Added 'nav-item' class) */}
        <div className="flex-shrink-0 nav-item opacity-0">
           <Link href="/" className="text-2xl font-bold text-[#254b80] tracking-wider">
             LOGO
           </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              // Added 'nav-item opacity-0' class here
              className="nav-item opacity-0 text-[#648ecc] font-medium hover:text-[#254b80] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/schedule" 
            // Added 'nav-item opacity-0' class here
            className="nav-item opacity-0 bg-[#254b80] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#1a3861] transition-colors ml-2"
          >
            Schedule Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden p-2 text-[#254b80] focus:outline-none nav-item opacity-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        ref={mobileMenuRef} 
        className="overflow-hidden bg-white border-b border-gray-100 lg:hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              // Added 'mobile-nav-item opacity-0' class here
              className="mobile-nav-item opacity-0 text-[#648ecc] font-medium hover:text-[#254b80] transition-colors block border-b border-gray-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/schedule" 
            onClick={() => setIsOpen(false)}
            // Added 'mobile-nav-item opacity-0' class here
            className="mobile-nav-item opacity-0 bg-[#254b80] text-white px-4 py-3 rounded-md font-medium hover:bg-[#1a3861] transition-colors text-center mt-2 w-full"
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </header>
  );
}