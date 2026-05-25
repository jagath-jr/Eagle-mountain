'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Safely register ScrollTrigger for Next.js SSR
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Refs for the Parallax Effect
  const parallaxContainerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Initialize the carousel with Autoplay
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true }, 
    [
      Autoplay({ 
        delay: 2500,
        stopOnInteraction: false, 
        stopOnMouseEnter: true 
      })
    ]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    // Using gsap.context for React cleanup to prevent glitches
    const ctx = gsap.context(() => {
      
      // 1. Staggered slide-up animation for process cards
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

      // 2. BULLETPROOF UPWARD Parallax Background Effect
      if (bgRef.current && parallaxContainerRef.current) {
        gsap.to(bgRef.current, {
          yPercent: -20, // Moves up safely within the 30% extra space provided by h-[130%]
          ease: 'none',
          scrollTrigger: {
            trigger: parallaxContainerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      }

    }); 

    // Clean up all GSAP animations when the component unmounts
    return () => ctx.revert();
    
  }, []);

  const steps = [
    { step: "Step 1", title: "Consultation" },
    { step: "Step 2", title: "Planning" },
    { step: "Step 3", title: "Execution" },
    { step: "Step 4", title: "Completion" },
  ];

  const clients = [
    { name: "Amana", src: "/logo-amana.png" },
    { name: "Daikin", src: "/logo-daikin.png" },
    { name: "Honeywell", src: "/logo-honeywell.png" },
    { name: "Lennox", src: "/logo-lennox.png" },
    { name: "Carrier", src: "/logo-carrier.png" }
  ];

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

      {/* Dynamic UPWARD Parallax Background Section */}
      <div 
        ref={parallaxContainerRef}
        // INCREASED padding to show more of your image, completely transparent background
        className="relative w-full py-24 lg:py-32 px-6 lg:px-12 overflow-hidden"
      >
        {/* The Parallax Background Image */}
        <div 
          ref={bgRef}
          // h-[130%] gives a massive 30% safety buffer at the bottom
          className="absolute top-0 left-0 w-full h-[130%] bg-[url('/process-bg.jpg')] bg-cover bg-center bg-no-repeat"
        ></div>

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
            {/* Array mapped 4 times to ensure a massive strip, preventing visible snapping */}
            {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
              <div 
                key={idx} 
                className="flex-[0_0_auto] min-w-[120px] sm:min-w-[150px] flex justify-center items-center transition-transform duration-300 hover:scale-110 relative h-16 cursor-pointer"
              >
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 120px, 150px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}