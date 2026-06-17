"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Explicitly Typed Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// --- Expertise Data ---
const expertiseAreas = [
  {
    id: 1,
    title: "Heavy Lifting Solutions",
    description: "Heavy lifting operations require precision, planning, and specialized equipment. Eagle Mountain provides crane solutions for structural steel erection, equipment installation, infrastructure development, and industrial construction projects.",
    image: "/expertise-page-heavy-lifting-solutions.webp",
  },
  {
    id: 2,
    title: "Material Handling Solutions",
    description: "Efficient movement of materials is critical to every operation. Our forklift and material handling services help businesses improve productivity while maintaining safety and operational efficiency.",
    image: "/expertise-page-material-handling-solutions.webp",
  },
  {
    id: 3,
    title: "Transportation & Logistics",
    description: "Moving oversized equipment and industrial cargo requires expertise and proper planning. Our transportation solutions ensure equipment and materials reach project sites safely and efficiently.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Access Equipment Solutions",
    description: "We provide safe access solutions for construction, maintenance, installation, and industrial operations requiring elevated working platforms.",
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Warehouse & Storage Solutions",
    description: "Our warehousing and storage services provide secure and organized support for industrial operations, equipment management, and project logistics.",
    image: "/expertise-page-warehouse-storage-solutions.webp",
  },
  {
    id: 6,
    title: "Energy & Industrial Support",
    description: "We support energy, utility, manufacturing, and industrial facilities with specialized equipment and operational support services designed for demanding environments.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ExpertisePage() {
  return (
<main className="relative min-h-screen overflow-x-hidden w-full">      
      {/* ========================================
        1. FIXED BACKGROUND IMAGE (Parallax)
        ========================================
      */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[linear-gradient(75.04deg,#234982_0%,rgba(35,73,130,0)_100%)]">
        {/* Using a bridge/infrastructure background as seen in the design */}
        <Image
          src="expertise-page-hero.webp"
          alt="Expertise Background"
          fill
          className="object-cover opacity-40 mix-blend-multiply"
          priority
        />
      </div>

      {/* ========================================
        2. HERO TEXT CONTENT
        ========================================
      */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center pt-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          {/* Left Side: Badge and Title */}
          <div className="space-y-4">
            <motion.span 
              variants={fadeInUp}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium"
            >
              Our Service
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide"
            >
              Expertise
            </motion.h1>
          </div>

          {/* Right Side: Description */}
          <motion.div 
            variants={fadeInUp}
            className="mt-6 md:mt-0 text-white md:text-right max-w-md lg:max-w-lg"
          >
            <p className="text-lg md:text-xl font-medium leading-snug drop-shadow-md">
              Reliable Heavy Equipment & Industrial Support Solutions
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================
        3. MAIN CONTENT (Solid Background)
        ========================================
      */}
      <div className="relative z-20 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-32">
        
        {/* Decorative Top Overlap Icon */}
        <motion.div 
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
          className="absolute top-0 left-1/2 z-30 origin-center"
        >
          <div className="bg-[#244265] p-5 rounded-full border-[6px] border-white shadow-sm flex items-center justify-center">
            {/* Note: I used 'Award' here to represent expertise, but you can swap it to 'Mail' if you strictly want the envelope icon from the mockup */}
            <Award className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- INTRO SECTION --- */}
          <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div 
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm"
              >
                <Image 
                  src="/expertise-page-section1-0.webp" 
                  alt="Our Expertise Overview" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>

              <motion.div 
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-3xl md:text-4xl font-light text-[#5e81a7]">
                  Our Expertise
                </h2>
                <h3 className="text-xl md:text-3xl font-semibold text-[#1e3458] leading-snug pb-2">
                  Trusted Industrial Solutions Partner
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  Eagle Mountain combines industry expertise, modern equipment, and skilled professionals to provide dependable support for construction, infrastructure, logistics, energy, and industrial projects. We help clients overcome complex operational challenges through safe, efficient, and cost-effective equipment solutions tailored to their specific project requirements.
                </p>
              </motion.div>
            </div>
          </section>

          {/* --- CENTERED TITLE --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center pb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#5e81a7]">
              Area of Expertise
            </h2>
            <div className="w-16 h-1 bg-[#244265] mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* --- EXPERTISE GRID --- */}
          <section>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
              {expertiseAreas.map((area) => (
                <motion.div 
                  key={area.id}
                  variants={cardVariant}
                  className="flex flex-col group"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-56 md:h-48 overflow-hidden rounded-2xl shadow-sm mb-6">
                    <Image 
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1e3458] mb-3">
                      {area.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

        </div>
      </div>
    </main>
  );
}