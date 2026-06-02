"use client";

import Image from "next/image";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
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

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// --- Dummy Data for Projects ---
const projects = [
  {
    id: 1,
    title: "Downtown Commercial Tower",
    category: "Construction & Lifting",
    location: "Business Bay, Dubai",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    description: "Provided comprehensive heavy lifting solutions and crane operations for a 45-story commercial skyscraper, ensuring safety and timeline adherence.",
  },
  {
    id: 2,
    title: "Port Logistics Expansion",
    category: "Heavy Transportation",
    location: "Jebel Ali Port",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description: "Managed the relocation and installation of heavy-duty port machinery, utilizing our fleet of specialized flatbeds and forklifts.",
  },
  {
    id: 3,
    title: "Solar Farm Infrastructure",
    category: "Energy Sector Support",
    location: "Abu Dhabi Outskirts",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    description: "Supported the ground-up construction of a 50MW solar facility by providing off-road access lifts and earth-moving equipment.",
  },
  {
    id: 4,
    title: "Metro Line Extension",
    category: "Infrastructure",
    location: "Dubai Metro",
    image: "https://images.unsplash.com/photo-1517581177682-a085bc7fcb10?q=80&w=2070&auto=format&fit=crop",
    description: "Supplied continuous material handling and heavy equipment leasing for the structural development of three new metro stations.",
  },
  {
    id: 5,
    title: "Industrial Warehouse Hub",
    category: "HVAC & Construction",
    location: "Dubai Industrial City",
    image: "https://images.unsplash.com/photo-1565610222536-f8d152549244?q=80&w=2071&auto=format&fit=crop",
    description: "Facilitated the installation of large-scale industrial cooling systems and roof trusses using our high-reach access lifts.",
  },
  {
    id: 6,
    title: "Highway Bridge Assembly",
    category: "Construction & Lifting",
    location: "Sharjah Outer Bypass",
    image: "https://images.unsplash.com/photo-1545652985-78e734c56360?q=80&w=1974&auto=format&fit=crop",
    description: "Executed precision tandem lifts for massive pre-cast concrete bridge segments over a highly active traffic corridor.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      
      {/* ========================================
        1. FIXED BACKGROUND IMAGE (Parallax)
        ========================================
      */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#1e345853]">
        <Image
          src="project-page-hero.webp"
          alt="Engineering Projects"
          fill
          className="object-cover opacity-30 mix-blend-multiply"
          priority
        />
      </div>

      {/* ========================================
        2. HERO TEXT CONTENT
        ========================================
      */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center pt-10">
       {/* Switched to the split layout (flex-row justify-between) matching the Contact page */}
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
              Featured Work
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide"
            >
              Our Projects
            </motion.h1>
          </div>

          {/* Right Side: Description */}
          <motion.div 
            variants={fadeInUp}
            className="mt-6 md:mt-0 text-white md:text-right max-w-md lg:max-w-lg"
          >
            <p className="text-lg md:text-xl font-medium leading-snug drop-shadow-md">
              Delivering excellence in heavy equipment solutions, infrastructure support, and industrial logistics across the region.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================
        3. MAIN CONTENT (Solid Background)
        ========================================
      */}
      <div className="relative z-20 bg-[#f6f8fb] rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-32">
        
        {/* Decorative Top Overlap Icon */}
        <motion.div 
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
          className="absolute top-0 left-1/2 z-30 origin-center"
        >
          <div className="bg-[#244265] p-5 rounded-full border-[6px] border-[#f6f8fb] shadow-sm flex items-center justify-center">
            <Building2 className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Projects Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={cardVariant}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#244265] text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1e3458] mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
                    <MapPin className="w-4 h-4 text-[#8ba4b4]" />
                    <span>{project.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Read More Link (Decorative) */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[#244265] group-hover:text-[#8ba4b4] transition-colors font-medium text-sm cursor-pointer">
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </section>
      </div>
    </main>
  );
}