'use client';

import { useEffect, useRef } from 'react';
import { Mail, Phone, Calculator } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  
  // Array refs for staggered animations
  const masonryBoxesRef = useRef<(HTMLDivElement | null)[]>([]);
  const bannerCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Refs for the number counters
  const satisfactionRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 1. "Zoom Down" staggered animation for the 4 masonry boxes
    if (masonryBoxesRef.current.length > 0) {
      gsap.fromTo(
        masonryBoxesRef.current,
        { opacity: 0, scale: 0.9, y: -40 },
        {
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'back.out(1.2)', // Gives a slight pop effect
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // 2. Slide in the right text block
    gsap.fromTo(
      rightTextRef.current,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 3. Counter Animation for 98% and 500+
    const counterTarget = { sat: 0, proj: 0 };
    gsap.to(counterTarget, {
      sat: 98,
      proj: 500,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => {
        if (satisfactionRef.current) {
          satisfactionRef.current.innerText = Math.floor(counterTarget.sat).toString();
        }
        if (projectsRef.current) {
          projectsRef.current.innerText = Math.floor(counterTarget.proj).toString();
        }
      }
    });

    // 4. Slide-in reveal for the bottom contact banner cards
    if (bannerCardsRef.current.length > 0) {
      gsap.fromTo(
        bannerCardsRef.current,
        { opacity: 0, x: -60 }, // Sliding in from the left
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-banner-trigger',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <>
      {/* --- TOP: ABOUT & STATS SECTION --- */}
      <section ref={sectionRef} className="py-24 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Masonry-style Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
              {/* Yellow Crane Image */}
              <div 
                ref={(el) => { masonryBoxesRef.current[0] = el; }}
                className="h-36 sm:h-48 md:h-64 rounded-xl overflow-hidden bg-gray-200 bg-cover bg-center shadow-md"
                style={{ backgroundImage: "url('/crane-yellow.png')" }}
              />
              {/* 500+ Box */}
              <div 
                ref={(el) => { masonryBoxesRef.current[1] = el; }}
                className="bg-[#254b80] h-32 sm:h-40 md:h-48 rounded-xl flex flex-col justify-center items-center text-white shadow-lg p-2 sm:p-4 text-center"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center tracking-tight">
                  <span ref={projectsRef}>0</span>+
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 text-white/80 font-medium">Projects Completed</p>
              </div>
            </div>

            {/* Column 2 (Slightly offset downwards for styling) */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 md:mt-10">
              {/* 98% Box */}
              <div 
                ref={(el) => { masonryBoxesRef.current[2] = el; }}
                className="bg-slate-50 border border-gray-100 h-32 sm:h-40 md:h-48 rounded-xl flex flex-col justify-center items-center shadow-sm p-2 sm:p-4 text-center"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1c2f] flex items-baseline tracking-tight">
                  <span ref={satisfactionRef}>0</span>
                  <span className="text-xl sm:text-2xl md:text-3xl ml-1">%</span>
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 text-gray-500 font-medium">Customer Satisfaction</p>
              </div>
              {/* Orange Lift Image */}
              <div 
                ref={(el) => { masonryBoxesRef.current[3] = el; }}
                className="h-36 sm:h-48 md:h-64 rounded-xl overflow-hidden bg-gray-200 bg-cover bg-center shadow-md"
                style={{ backgroundImage: "url('/access-lift-orange.png')" }}
              />
            </div>
            
          </div>

          {/* Right Side: Text Content */}
          <div ref={rightTextRef} className="lg:pl-8">
            <span className="inline-block py-1.5 px-4 bg-gray-100 text-[#0b1c2f] text-xs font-bold rounded-full mb-4 sm:mb-6 tracking-wide">
              Our Specialize
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1c2f] mb-4 sm:mb-6 leading-tight">
              Trusted Industrial Equipment Partner
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base md:text-lg">
              Eagle Mountain specializes in providing heavy equipment and industrial support services for construction, infrastructure, logistics, and energy projects. With a commitment to safety, operational excellence, and timely project execution, we help clients complete projects efficiently using modern equipment and experienced support teams.
            </p>
          </div>
          
        </div>
      </section>

      {/* --- BOTTOM: CONTACT BANNER --- */}
      <section className="bg-[#648ecc] py-12 sm:py-16 px-6 lg:px-12 contact-banner-trigger overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Email */}
          <div 
            ref={(el) => { bannerCardsRef.current[0] = el; }}
            className="bg-[#1f2937] text-white p-5 sm:p-6 md:p-8 rounded-xl flex items-center gap-4 sm:gap-5 shadow-lg hover:bg-[#151c26] transition-colors cursor-pointer group"
          >
            <Mail className="text-[#648ecc] group-hover:scale-110 transition-transform duration-300" size={32} strokeWidth={1.5} />
            <div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Email Us</p>
              <p className="font-semibold tracking-wide text-sm lg:text-base">info@eaglemountain.com</p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div 
            ref={(el) => { bannerCardsRef.current[1] = el; }}
            className="bg-[#1f2937] text-white p-5 sm:p-6 md:p-8 rounded-xl flex items-center gap-4 sm:gap-5 shadow-lg hover:bg-[#151c26] transition-colors cursor-pointer group"
          >
            <div className="rounded-full border-2 border-[#648ecc] p-2 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-[#648ecc]" size={18} fill="currentColor" strokeWidth={0} />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Emergency Service</p>
              <p className="font-semibold tracking-wide text-sm lg:text-base">Call +929 333 9296</p>
            </div>
          </div>

          {/* Card 3: Free Estimation */}
          <div 
            ref={(el) => { bannerCardsRef.current[2] = el; }}
            className="bg-[#1f2937] text-white p-5 sm:p-6 md:p-8 rounded-xl flex items-center gap-4 sm:gap-5 shadow-lg hover:bg-[#151c26] transition-colors cursor-pointer group"
          >
            <Calculator className="text-[#648ecc] group-hover:scale-110 transition-transform duration-300" size={32} strokeWidth={1.5} />
            <div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">Request For</p>
              <p className="font-semibold tracking-wide text-sm lg:text-base">Free Estimation</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}