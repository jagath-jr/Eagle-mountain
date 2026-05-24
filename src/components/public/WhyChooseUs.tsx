'use client';

import { useEffect, useRef } from 'react';
import { Settings, CalendarClock, ThumbsUp, Truck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 1. Animate the main heading dropping in
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 2. Staggered slide-in animation for the feature boxes
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 }, // Starting 50px below and invisible
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, // 0.15s delay between each box
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  const features = [
    {
      icon: <Settings size={32} strokeWidth={1.5} />,
      title: "Modern Equipment Fleet",
      desc: "Reliable and professionally maintained equipment."
    },
    {
      icon: <CalendarClock size={32} strokeWidth={1.5} />,
      title: "Safety First Operations",
      desc: "Strict safety standards across all operations."
    },
    {
      icon: <ThumbsUp size={32} strokeWidth={1.5} />,
      title: "Industrial Expertise",
      desc: "Supporting complex construction and energy projects."
    },
    {
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: "Fast Mobilization",
      desc: "Rapid equipment deployment and support."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-12 bg-[#f8f9fa] border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1c2f] text-center mb-16 sm:mb-20 tracking-tight"
        >
          Why Choose Eagle Mountain
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left group"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#254b80] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-lg sm:text-xl font-bold text-[#0b1c2f] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}