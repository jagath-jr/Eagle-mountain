"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Users, Check } from "lucide-react";
import { motion, Variants, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// --- Custom Animated Counter Component ---
function AnimatedNumber({ to }: { to: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// --- Explicitly Typed Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

// Variant for the Masonry Grid to stagger and slide
const masonryContainer: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut",
      staggerChildren: 0.15 
    } 
  },
};

// Zoom-in variant for the individual boxes
const zoomInBox: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Features Data ---
const features = [
  {
    title: "Experienced Operators",
    description: "Skilled professionals delivering safe and reliable project support."
  },
  {
    title: "Flexible Equipment Solutions",
    description: "Flexible equipment solutions for projects of every size."
  },
  {
    title: "Modern Equipment Fleet",
    description: "Modern equipment delivering reliable performance."
  },
  {
    title: "Transparent Service Approach",
    description: "Clear communication and dependable project support."
  },
  {
    title: "Rapid Project Support",
    description: "Fast response and efficient project support."
  },
  {
    title: "Commitment to Excellence",
    description: "Committed to safety, reliability, and performance."
  }
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen ">
      
      {/* ========================================
        1. FIXED BACKGROUND IMAGE (Parallax)
        ========================================
      */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[linear-gradient(75.04deg,#234982_0%,rgba(35,73,130,0)_100%)]">
        <Image
          src="/about-us-hero.webp"
          alt="About Us Background"
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
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <div className="space-y-4">
            <motion.span 
              variants={fadeInUp}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium"
            >
              Discover
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide"
            >
              About Us
            </motion.h1>
          </div>

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
        3. MAIN CONTENT
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
          <div className="bg-[#1e3458] p-4 rounded-full border-[6px] border-white shadow-sm flex items-center justify-center">
            <Users className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-24 lg:space-y-32">
          
          {/* --- SECTION 1: HISTORY & MASONRY GRID --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <span className="inline-block bg-[#f6f8fb] text-[#5e81a7] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                Welcome
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1e3458] leading-tight">
                History of Our Company
              </h2>
              <div className="space-y-4 text-slate-500 text-sm md:text-base leading-relaxed">
                <p>
                  Welcome to Eagle Mountain, your trusted partner for heavy equipment, crane solutions, and industrial support services. With years of industry experience and a commitment to operational excellence, we specialize in providing reliable lifting, transportation, material handling, and logistics solutions tailored to the unique requirements of construction, infrastructure, energy, and industrial projects.
                </p>
                <p>
                  From crane rental and forklift services to access platforms, warehousing, and heavy transportation, our experienced team is dedicated to delivering safe, efficient, and dependable solutions that help keep your projects moving forward. Our focus on safety, reliability, and customer satisfaction enables us to support projects of all sizes while building long-term partnerships based on trust, performance, and exceptional service.
                </p>
              </div>
            </motion.div>

            {/* Right: Masonry Grid Layout with Zoom & Counter Animations */}
            <motion.div 
              variants={masonryContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-4 lg:gap-6"
            >
              {/* Column 1 */}
              <div className="flex flex-col gap-4 lg:gap-6">
                <motion.div variants={zoomInBox} className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/about-us-section2.webp" 
                    alt="Planning and Hardhat" 
                    fill 
                    className="object-cover" 
                  />
                </motion.div>
                <motion.div variants={zoomInBox} className="bg-[#648ecc] rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-white shadow-sm h-36 md:h-40">
                  <h4 className="text-4xl md:text-5xl font-bold mb-1">
                    <AnimatedNumber to={500} /><span className="text-2xl md:text-3xl">+</span>
                  </h4>
                  <p className="text-xs md:text-sm font-medium text-white/90">Projects Completed</p>
                </motion.div>
              </div>

              {/* Column 2 (Offset downwards) */}
              <div className="flex flex-col gap-4 lg:gap-6 pt-8 md:pt-12">
                <motion.div variants={zoomInBox} className="bg-[#1e3458] rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-white shadow-sm h-36 md:h-40">
                  <h4 className="text-4xl md:text-5xl font-bold mb-1">
                    <AnimatedNumber to={98} /><span className="text-2xl md:text-3xl">%</span>
                  </h4>
                  <p className="text-xs md:text-sm font-medium text-white/90">Customer Satisfaction</p>
                </motion.div>
                <motion.div variants={zoomInBox} className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src="/about-us-section2-01.webp" 
                    alt="Engineers collaborating" 
                    fill 
                    className="object-cover" 
                  />
                </motion.div>
              </div>
            </motion.div>

          </section>

          {/* --- SECTION 2: WHY CHOOSE US (Blue Box) --- */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#648ecc] rounded-[2.5rem] p-8 md:p-16 shadow-lg"
          >
            <div className="text-center mb-12 flex flex-col items-center">
              <span className="bg-[#1e3458] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                Top 6 Reasons
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu culpa ut irure nisi occaecat dolore adipisicing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-[#1e3458] p-2.5 rounded-xl shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* --- SECTION 3: THE INDUSTRIES WE WORK WITH --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Single Industry Image */}
            <motion.div 
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="order-2 lg:order-1 relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-md group"
            >
              <Image 
                src="aboutl-us-services.png" 
                alt="Industries We Work With" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <span className="inline-block bg-[#f6f8fb] text-[#5e81a7] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                Services Process
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1e3458] leading-tight">
                The Industries We Work With
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Eagle Mountain supports a diverse range of industries through dependable equipment, skilled operators, and tailored project solutions. From construction and infrastructure to logistics, warehousing, and energy operations, we are committed to delivering safe, efficient, and reliable services that help our clients achieve their operational and project goals with confidence.
              </p>
            </motion.div>

          </section>

        </div>
      </div>
    </main>
  );
}