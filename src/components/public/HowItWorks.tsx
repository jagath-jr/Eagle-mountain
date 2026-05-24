'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize the drag/swipe carousel with auto-play
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    // Staggered slide-up animation for the process cards
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  const steps = [
    { step: "Step 1", title: "Consultation" },
    { step: "Step 2", title: "Planning" },
    { step: "Step 3", title: "Execution" },
    { step: "Step 4", title: "Completion" },
  ];

  // Placeholder names for the logos
  const clients = ["Amana", "DAIKIN", "Honeywell", "LENNOX", "Carrier", "Trane", "Rheem"];

  return (
    <section ref={sectionRef} className="w-full flex flex-col font-sans">
      
      {/* Top Blue Header Section */}
      <div className="bg-[#254b80] w-full pt-20 pb-12 px-6 flex flex-col items-center text-center">
        <span className="px-5 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full mb-6 tracking-wide">
          Services Process
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          How It Works
        </h2>
      </div>

      {/* Fixed Parallax Background Section */}
      {/* Note: Place a process-bg.jpg image in your public folder */}
      <div className="relative w-full py-20 px-6 lg:px-12 bg-[url('/process-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        {/* Dark overlay to make cards stand out */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative">
            
            {steps.map((process, idx) => (
              <div key={idx} className="relative w-full lg:w-1/4 flex items-center group">
                
                {/* The Process Card */}
                <div 
                  ref={(el) => { cardsRef.current[idx] = el; }}
                  className="bg-[#648ecc]/95 backdrop-blur-md p-8 rounded-xl shadow-xl w-full border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#537cba]/95 cursor-default"
                >
                  <span className="text-white/80 text-sm font-semibold mb-2 block tracking-wide">
                    {process.step}
                  </span>
                  <h4 className="text-white text-2xl font-bold mb-4">
                    {process.title}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Reliable and professionally maintained equipment.
                  </p>
                </div>

                {/* Arrow Connector (Hidden on Mobile, visible on Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-white opacity-80">
                    <ArrowRight size={28} strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </div>
      </div>

      {/* Client Logo Slider Section */}
      <div className="bg-white py-12 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex items-center gap-12 sm:gap-20">
            {/* We map through the clients array twice to ensure seamless infinite looping */}
            {[...clients, ...clients].map((client, idx) => (
              <div 
                key={idx} 
                className="flex-[0_0_auto] min-w-[120px] sm:min-w-[150px] flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {/* Replace this div with an actual <Image /> tag when you have the logo files */}
                <div className="text-2xl font-bold text-[#0b1c2f] italic">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}