'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger safely for Next.js SSR
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  
  // 1. Get the current pathname to detect route changes
  const pathname = usePathname();

  useEffect(() => {
    if (!footerRef.current) return;

    // 2. Use gsap.context for safe React cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%', // Triggers when the top of the footer enters 85% of the screen
          toggleActions: 'play none none none' // Plays once
        }
      });

      // Top CTA Banner slides down and fades in
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );

      // The 4 main columns slide up in a staggered sequence
      if (columnsRef.current.length > 0) {
        tl.fromTo(
          columnsRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' },
          "-=0.3" 
        );
      }

      // The bottom copyright bar gently fades in at the end
      tl.fromTo(
        bottomBarRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        "-=0.2"
      );
    }, footerRef);

    // 3. Force ScrollTrigger to recalculate page heights after a tiny delay
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // 4. Cleanup function to prevent memory leaks and overlapping animations
    return () => {
      ctx.revert(); 
      clearTimeout(timeoutId);
    };
    
  }, [pathname]);

  return (
    <footer ref={footerRef} className="w-full font-sans flex flex-col overflow-hidden">
      
      {/* Top CTA Banner */}
      <div 
        ref={ctaRef}
        className="bg-[#254b80] py-6 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-4"
      >
        <h2 className="text-white text-xl sm:text-2xl font-medium tracking-wide text-center sm:text-left">
          Ready to Start Your Project?
        </h2>
        <Link 
          href="/schedule" 
          className="w-full sm:w-auto text-center bg-[#648ecc] text-white px-6 py-3 sm:py-2.5 rounded-md font-medium hover:bg-[#537cba] transition-colors"
        >
          Schedule Appointment
        </Link>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0b1c2f] pt-12 md:pt-16 pb-12 px-6 lg:px-12">
        {/* Adjusted gap for mobile (gap-10 instead of gap-12) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8">
          
          {/* Column 1: Description */}
          <div ref={(el) => { columnsRef.current[0] = el; }} className="lg:pr-8">
            <p className="text-gray-300 text-sm leading-relaxed mt-1 lg:mt-2 text-center md:text-left">
              We provide reliable heavy equipment, crane solutions, and industrial support services for construction, infrastructure, logistics, and energy projects with a strong focus on safety, efficiency, and performance.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div ref={(el) => { columnsRef.current[1] = el; }} className="text-center md:text-left">
            <h3 className="text-white font-medium text-lg mb-4 md:mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm inline-block text-left">
               <li>
                <Link href="/home" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-xl leading-none group-hover:text-[#648ecc] transition-colors">&bull;</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-xl leading-none group-hover:text-[#648ecc] transition-colors">&bull;</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-xl leading-none group-hover:text-[#648ecc] transition-colors">&bull;</span> Expertise
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-xl leading-none group-hover:text-[#648ecc] transition-colors">&bull;</span> Equipment
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-xl leading-none group-hover:text-[#648ecc] transition-colors">&bull;</span> Projects
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-xl leading-none group-hover:text-[#648ecc] transition-colors">&bull;</span> Sectors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-xl leading-none group-hover:text-[#648ecc] transition-colors">&bull;</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div ref={(el) => { columnsRef.current[2] = el; }} className="text-center md:text-left">
            <h3 className="text-white font-medium text-lg mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-4 text-gray-300 text-sm inline-block text-left">
              <li><Link href="#" className="hover:text-white transition-colors">Crane Rental</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Forklift Solutions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Access Platforms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Heavy Transportation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Warehouse Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div ref={(el) => { columnsRef.current[3] = el; }} className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-[#648ecc] font-medium mb-4">24 Hours & Emergencies</h3>
            
            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8 group cursor-pointer">
              <div className="p-2 border border-gray-500 rounded-full text-[#648ecc] group-hover:bg-[#648ecc] group-hover:text-white transition-colors duration-300">
                <Phone size={20} className="sm:w-6 sm:h-6" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-wide">+929 xxx xxxx</span>
            </div>

            <div className="space-y-6 w-full max-w-[250px] md:max-w-none text-left">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <MapPin size={16} className="text-[#648ecc] group-hover:scale-110 transition-transform shrink-0" />
                  <h4>Office Location</h4>
                </div>
                <p className="text-gray-400 text-sm pl-6 group-hover:text-gray-200 transition-colors">100 S Main St, New York, NY</p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <Mail size={16} className="text-[#648ecc] group-hover:scale-110 transition-transform shrink-0" />
                  <h4>Send a Message</h4>
                </div>
                <p className="text-gray-400 text-sm pl-6 group-hover:text-gray-200 transition-colors break-all sm:break-normal">info@eaglemountain.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div 
        ref={bottomBarRef}
        className="bg-[#0a1524] border-t border-gray-700/50 py-6 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4"
      >
        <p className="text-center md:text-left">Copyright 2026 - Eagle Mountain</p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-2 md:mt-0">
          <Link href="/terms" className="hover:text-white transition-colors whitespace-nowrap">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}