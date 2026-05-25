'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Safely register ScrollTrigger for Next.js
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Animate the text container (staggering the H1 and P tags)
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
      );
    }

    // 2. Animate the form sliding in from the right
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
    );

    // 3. Smooth Parallax Background Effect
    if (bgRef.current && sectionRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 50, // Pushes the image down slowly as you scroll
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top', // Start the animation when the hero is at the top of the screen
          end: 'bottom top', // End when the hero scrolls out of view
          scrub: true, // Smoothly ties the animation to the scrollbar
        }
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      // Replaced the background classes with 'overflow-hidden' to trap the parallax image
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b1c2f]"
    >
      {/* The Parallax Background Image 
        It is larger than the section (130% height) to give it room to scroll smoothly 
      */}
      <div 
        ref={bgRef}
        className="absolute -top-[15%] left-0 w-full h-[130%] bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
      ></div>

      {/* Blue overlay to make the text readable over the busy background */}
      <div className="absolute inset-0 bg-[#254b80]/50 mix-blend-multiply"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        
        {/* Left Side: Text */}
        <div ref={textRef} className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
            Heavy Equipment & <br/> Industrial Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-lg drop-shadow-md">
            We Provide Supporting Construction, Energy, Infrastructure, and Industrial Projects with Reliable Equipment & professional service.
          </p>
        </div>

        {/* Right Side: Request a Quote Form (Frosted Glass Effect) */}
        <div 
          ref={formRef} 
          className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl border border-white/40 max-w-md ml-auto w-full"
        >
          <h3 className="text-2xl font-bold text-[#0b1c2f] mb-6">Request a Quote</h3>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#648ecc] outline-none text-gray-800" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#648ecc] outline-none text-gray-800" 
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#648ecc] outline-none text-gray-800" 
            />
            <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#648ecc] outline-none text-gray-600 bg-white">
              <option>Select service</option>
              <option>Crane Rental</option>
              <option>Access Equipment</option>
              <option>Forklifts</option>
            </select>
            <button 
              type="button"
              className="w-full bg-[#254b80] hover:bg-[#1a3861] text-white font-medium py-3.5 rounded-md transition-colors mt-4 shadow-md"
            >
              Send Request
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}