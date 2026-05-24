'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin safely for Next.js
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate the cards when the section scrolls into view
    if (sectionRef.current && cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { 
          opacity: 0, 
          y: 60 // Start 60px below their final position
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, // 0.2 seconds between each card appearing
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%', // Animation starts when the top of the section hits 75% down the viewport
            toggleActions: 'play none none none' // Play once and stay there
          }
        }
      );
    }
  }, []);

  const servicesData = [
    { 
      title: "Cranes", 
      img: "/crane.jpg", 
      desc: "Trust us to deliver safe lifting solutions, reliable equipment, and efficient support for all your industrial and construction projects." 
    },
    { 
      title: "Access Equipments", 
      img: "/access-lift.jpg", 
      desc: "Trust us to provide safe elevated access solutions and reliable man lifts for maintenance, construction, and industrial operations." 
    },
    { 
      title: "Forklifts", 
      img: "/forklift.jpg", 
      desc: "Trust us to deliver efficient material handling solutions and dependable forklift equipment for warehouses and worksites." 
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#254b80] py-24 px-6 lg:px-12 w-full"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {servicesData.map((service, idx) => (
          <div 
            key={idx} 
            // Save each card to our ref array for GSAP to animate
            ref={(el) => { cardsRef.current[idx] = el; }}
            className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col group"
          >
            {/* Image Container with a subtle zoom effect on hover */}
            <div className="h-56 relative overflow-hidden bg-gray-300">
              {/* Note: Replace this div with next/image once you have your actual photos */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.img})` }}
              ></div>
              {/* Fallback overlay just in case images are missing */}
              <div className="absolute inset-0 bg-[#254b80]/10 mix-blend-multiply"></div>
            </div>
            
            {/* Card Content */}
            <div className="p-8 flex flex-col flex-grow bg-white">
              <h3 className="text-xl font-bold text-[#0b1c2f] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>
              
              <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-[#0b1c2f] font-semibold rounded-md text-sm transition-colors">
                Read more
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}