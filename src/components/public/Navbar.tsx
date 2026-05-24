'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // 1. Initial Page Load Animation (Desktop Items)
  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  // 2. Scroll Hide/Show Animation & Transparent Background Detection
  useEffect(() => {
    // Check initial scroll position on load
    setIsScrolled(window.scrollY > 20);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we have scrolled past the very top
      setIsScrolled(currentScrollY > 20);

      // Automatically close mobile menu if scrolling
      if (isOpen && Math.abs(currentScrollY - lastScrollY.current) > 20) {
        setIsOpen(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
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
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      
      gsap.fromTo(
        '.mobile-nav-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Projects', href: '/projects' },
    { name: 'Sectors', href: '/sectors' },
    { name: 'Contact', href: '/contact' },
  ];

  // Logic to determine if the navbar should be transparent
  // It is only transparent if: We are on the home page AND at the top AND the mobile menu is closed.
  const isTransparent = isHome && !isScrolled && !isOpen;

  return (
    // Removed the permanent 'bg-white' and 'shadow-sm' from the master header container
    <header ref={headerRef} className="w-full font-sans fixed top-0 left-0 z-50 transition-colors duration-300">
      
      {/* Top Bar - Contact and Hours (Remains solid blue always) */}
      <div className="bg-[#254b80] text-gray-100 text-xs sm:text-sm py-2.5 px-4 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 relative z-20">
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

      {/* Main Navigation Bar (Dynamically changes background) */}
      <nav 
        className={`py-4 px-6 lg:px-12 flex justify-between items-center transition-all duration-300 relative z-10 ${
          isTransparent 
            ? 'bg-transparent border-transparent' 
            : 'bg-white border-b shadow-sm'
        }`}
      >
        
        {/* Left Side: Logo */}
        <div className="flex-shrink-0 nav-item opacity-0">
           <Link 
            href="/" 
            className={`text-2xl font-bold tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white drop-shadow-md' : 'text-[#254b80]'
            }`}
           >
             LOGO
           </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`nav-item opacity-0 font-medium transition-colors duration-300 ${
                isTransparent 
                  ? 'text-white/90 hover:text-white drop-shadow-sm' 
                  : 'text-[#648ecc] hover:text-[#254b80]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/schedule" 
            className={`nav-item opacity-0 px-6 py-2.5 rounded-md font-medium transition-colors ml-2 shadow-sm ${
              isTransparent 
                ? 'bg-white text-[#254b80] hover:bg-gray-100' 
                : 'bg-[#254b80] text-white hover:bg-[#1a3861]'
            }`}
          >
            Schedule Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`lg:hidden p-2 focus:outline-none nav-item opacity-0 transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-[#254b80]'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown (Always white background for readability) */}
      <div 
        ref={mobileMenuRef} 
        className="overflow-hidden bg-white border-b border-gray-100 lg:hidden shadow-lg absolute w-full"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="mobile-nav-item opacity-0 text-[#648ecc] font-medium hover:text-[#254b80] transition-colors block border-b border-gray-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/schedule" 
            onClick={() => setIsOpen(false)}
            className="mobile-nav-item opacity-0 bg-[#254b80] text-white px-4 py-3 rounded-md font-medium hover:bg-[#1a3861] transition-colors text-center mt-2 w-full"
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </header>
  );
}