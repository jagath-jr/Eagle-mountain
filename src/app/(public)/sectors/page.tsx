"use client";

import Image from "next/image";
import { Factory } from "lucide-react";
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

// --- Sector Data ---
const sectors = [
  {
    id: 1,
    title: "Construction",
    subtitle: "Building the Future with Reliable Equipment Solutions",
    description: "Eagle Mountain supports commercial, residential, and industrial construction projects with a comprehensive range of equipment and operational solutions. Our capabilities in heavy lifting, material handling, and transport enable project teams to meet development demands efficiently, safely, and on schedule. From site preparation and structural installations to equipment mobilization and logistical support, we provide reliable resources that contribute to successful project delivery.",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Infrastructure",
    subtitle: "Supporting Large-Scale Development Projects",
    description: "Eagle Mountain plays a vital role in supporting infrastructure developments that drive the region's growth and economic expansion. We provide specialized equipment and operational support for road networks, bridges, airports, utilities, and major civil engineering projects. Our highly trained teams and modern equipment fleet ensure safe, compliant, and efficient logistics solutions that meet the demands of complex infrastructure projects while maintaining the highest safety standards.",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2079&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Oil & Gas",
    subtitle: "Equipment Solutions for Demanding Energy Operations",
    description: "The oil and gas industry requires reliable equipment and operational expertise to support its energy in challenging environments. Eagle Mountain delivers heavy lifting, transportation, equipment rentals, and logistical support tailored for upstream, midstream, and downstream operations. Our solutions are designed to enhance operational efficiency, support maintenance activities, and ensure smooth execution of energy-related projects while meeting strict environmental and compliance requirements.",
    image: "https://images.unsplash.com/photo-1621504450181-5d156f063316?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Energy & Utilities",
    subtitle: "Supporting Power Generation & Utility Infrastructure",
    description: "Eagle Mountain delivers specialized equipment and support services for power generation facilities, utility infrastructure projects, renewable energy developments, and industrial energy operations. We assist clients with equipment transportation, maintenance support, infrastructure upgrading, and material handling, helping them maintain reliable operations and successfully complete critical energy projects with confidence and efficiency.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Manufacturing",
    subtitle: "Enhancing Industrial Productivity",
    description: "Manufacturing facilities rely on efficient material handling, equipment movement, and logistics operations to maintain productivity and operational performance. Eagle Mountain supports manufacturing environments with a wide array of specialized equipment including forklifts, heavy-duty transport, and lifting solutions required for streamlining material movement throughout production facilities. Our services help businesses optimize operations while maintaining safety and minimizing downtime.",
    image: "https://images.unsplash.com/photo-1565610222536-f8d152549244?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Warehousing & Logistics",
    subtitle: "Streamlining Storage & Distribution Operations",
    description: "Rapidly expanding e-commerce and manufacturing sectors demand optimized storage, inventory management, material handling, storage, and distribution operations. Our services are designed to help businesses optimize their supply chains, improve operational efficiency, and ensure the smooth movement of goods and equipment. Whether supplying specialized storage requirements or large-scale logistics operations, we provide reliable solutions tailored to clients' operational needs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Ports & Transportation",
    subtitle: "Supporting Maritime & Logistics Infrastructure",
    description: "Eagle Mountain provides material handling equipment and transportation services for ports, terminals, shipping facilities, and logistics hubs. Our expertise in material handling, heavy lifting, equipment transportation, and operational logistics enables us to support the efficient movement of goods and equipment across the maritime and transportation sectors. We work closely with clients to deliver safe, reliable, and cost-effective solutions that help optimize heavy operational efficiency and reliably support their initiatives.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function SectorPage() {
  return (
    <main className="relative min-h-screen">
      
      {/* ========================================
        1. FIXED BACKGROUND IMAGE (Parallax)
        ========================================
      */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#1e3458]">
        <Image
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial Sector Overview"
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
              Our Sectors
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide"
            >
              Sector
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
            <Factory className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- INTRO SECTION --- */}
          <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div 
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" 
                  alt="Industries We Serve" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>

              <motion.div 
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-[#5e81a7]">
                  Industries We Serve
                </h2>
                <h3 className="text-xl md:text-2xl font-medium text-[#1e3458] leading-snug">
                  Supporting Critical Industries with Reliable Equipment & Professional Expertise
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  Eagle Mountain is a premier provider of equipment and technical support for a wide range of industries. Our experience, equipment fleet, and operational capabilities ensure the success of heavy transport, lifting, and infrastructure projects across the UAE.
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
            className="text-center py-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#5e81a7]">
              Industries We Serve
            </h2>
            <div className="w-16 h-1 bg-[#244265] mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* --- ALTERNATING SECTORS LIST --- */}
          <section className="space-y-20 lg:space-y-32 pb-10">
            {sectors.map((sector, index) => {
              // Determine if the layout should be reversed (Image on left, Text on right)
              const isReversed = index % 2 !== 0;

              return (
                <div 
                  key={sector.id} 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  {/* Text Content */}
                  <motion.div 
                    variants={isReversed ? slideInRight : slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#5e81a7]">
                      {sector.title}
                    </h3>
                    <h4 className="text-lg md:text-xl font-medium text-[#1e3458]">
                      {sector.subtitle}
                    </h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {sector.description}
                    </p>
                  </motion.div>

                  {/* Image Content */}
                  <motion.div 
                    variants={isReversed ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <Image 
                      src={sector.image} 
                      alt={sector.title} 
                      fill 
                      className="object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </motion.div>
                </div>
              );
            })}
          </section>

        </div>
      </div>
    </main>
  );
}