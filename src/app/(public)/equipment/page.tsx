"use client";

import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
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

export default function EquipmentPage() {
  return (
    <main className="relative min-h-screen bg-[#f9fafb2f]">
      
      {/* ========================================
        1. FIXED BACKGROUND IMAGE (Parallax)
        ========================================
      */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[linear-gradient(75.04deg,#234982_0%,rgba(35,73,130,0)_100%)]">
        {/* Replace with your actual hero image (hard hats/equipment) */}
        <Image
          src="/equipments-page-hero.webp"
          alt="Equipment Hero"
          fill
          className="object-cover opacity-60 mix-blend-multiply"
          priority
        />
      </div>

      {/* ========================================
        2. HERO TEXT CONTENT
        ========================================
      */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center pt-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          {/* Left Side */}
          <div className="space-y-2">
            <motion.span 
              variants={fadeInUp}
              className="text-white/80 text-sm font-medium tracking-wider uppercase"
            >
              Our Fleet
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide"
            >
              Equipments
            </motion.h1>
          </div>

          {/* Right Side */}
          <motion.div 
            variants={fadeInUp}
            className="mt-6 md:mt-0 text-white md:text-right max-w-md"
          >
            <p className="text-sm md:text-base font-medium leading-snug drop-shadow-md">
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
          <div className="bg-[#244265] p-4 rounded-full border-[6px] border-white shadow-sm flex items-center justify-center">
            <PhoneCall className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-24">
          
          {/* --- SECTION 1: CRANES --- */}
          <section>
            {/* Top Row: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <h2 className="text-3xl font-light text-[#5e81a7] mb-2">Cranes</h2>
                <h3 className="text-lg font-semibold text-[#1e3458] mb-4">Heavy Lifting Solutions for Industrial &<br/>Construction Projects</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eagle Mountain provides reliable crane solutions designed to support lifting operations across construction sites, infrastructure developments, industrial facilities, logistics operations, and energy projects. Our modern crane fleet is operated by experienced professionals committed to safety, efficiency, and precision on every project.Whether it’s heavy equipment installation, material lifting, structural assembly, or industrial maintenance, we deliver dependable lifting solutions tailored to project requirements.
                </p>
              </motion.div>
              <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2079&auto=format&fit=crop" alt="Cranes" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Sub-section: Available Crane Types */}
            <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-light text-[#5e81a7] text-center mb-8">
              Available Crane Types
            </motion.h4>

            {/* Sub-cards Row 1 (3 items) */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full"><Image src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" alt="All Terrain Cranes" fill className="object-cover" /></div>
                <div className="p-5">
                  <h5 className="font-semibold text-[#1e3458] text-base mb-2">All Terrain Cranes</h5>
                  <p className="text-xs text-slate-500">Versatile cranes designed for both on-road travel and off-road jobsite performance. Ideal for large construction, infrastructure, and industrial lifting operations.</p>
                </div>
              </motion.div>
              {/* Card 2 */}
              <motion.div variants={fadeInUp} className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full"><Image src="https://images.unsplash.com/photo-1545652985-78e734c56360?q=80&w=1974&auto=format&fit=crop" alt="Rough Terrain Cranes" fill className="object-cover" /></div>
                <div className="p-5">
                  <h5 className="font-semibold text-[#1e3458] text-base mb-2">Rough Terrain Cranes</h5>
                  <p className="text-xs text-slate-500">Powerful cranes built for challenging off-road environments and rugged construction sites where stability and mobility are essential.</p>
                </div>
              </motion.div>
              {/* Card 3 */}
              <motion.div variants={fadeInUp} className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full"><Image src="https://images.unsplash.com/photo-1587293852726-70cdb56c28ea?q=80&w=2070&auto=format&fit=crop" alt="Truck Mounted Cranes" fill className="object-cover" /></div>
                <div className="p-5">
                  <h5 className="font-semibold text-[#1e3458] text-base mb-2">Truck Mounted Cranes</h5>
                  <p className="text-xs text-slate-500">Mobile lifting solutions mounted on trucks for fast transportation and efficient lifting operations across multiple project locations.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Sub-cards Row 2 (2 items, centered) */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Card 4 */}
              <motion.div variants={fadeInUp} className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full"><Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" alt="Lattice Boom Crawler Cranes" fill className="object-cover" /></div>
                <div className="p-5 text-center">
                  <h5 className="font-semibold text-[#1e3458] text-base mb-2">Lattice Boom Crawler Cranes</h5>
                  <p className="text-xs text-slate-500">Heavy-duty crawler cranes designed for large-scale lifting operations requiring exceptional stability and lifting capacity.</p>
                </div>
              </motion.div>
              {/* Card 5 */}
              <motion.div variants={fadeInUp} className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full"><Image src="https://images.unsplash.com/photo-1522067756286-905187e148e6?q=80&w=1964&auto=format&fit=crop" alt="Telescopic Crawler Cranes" fill className="object-cover" /></div>
                <div className="p-5 text-center">
                  <h5 className="font-semibold text-[#1e3458] text-base mb-2">Telescopic Crawler Cranes</h5>
                  <p className="text-xs text-slate-500">Advanced crawler cranes combining mobility and telescopic boom flexibility for efficient lifting in restricted or demanding environments.</p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* --- SECTION 2: TRAILERS --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="order-2 lg:order-1">
              <h2 className="text-3xl font-light text-[#5e81a7] mb-2">Trailers</h2>
              <h3 className="text-lg font-semibold text-[#1e3458] mb-4">Reliable Transportation Solutions for<br/>Industrial & Heavy Equipment Projects</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Eagle Mountain provides dependable trailer and heavy transportation solutions designed to support equipment mobilization, oversized cargo transport, logistics operations, and industrial project requirements. Our transportation fleet is equipped to handle demanding operations safely and efficiently across construction, infrastructure, and energy sectors.<br/>
Whether it’s heavy machinery transportation, project logistics coordination, or specialized cargo movement, we deliver reliable transportation solutions tailored to operational and project needs.
              </p>
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" alt="Trailers" fill className="object-cover" />
            </motion.div>
          </section>

          {/* --- SECTION 3: FORKLIFT --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Forklift" fill className="object-cover" />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h2 className="text-3xl font-light text-[#5e81a7] mb-2">Forklift</h2>
              <h3 className="text-lg font-semibold text-[#1e3458] mb-4">Efficient Material Handling Solutions for<br/>Industrial & Warehouse Operations</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Eagle Mountain provides reliable forklift solutions designed to support material handling operations across warehouses, construction sites, logistics centers, industrial facilities, and manufacturing environments. Our modern forklift fleet is maintained to ensure safe, efficient, and smooth operational performance for every project.<br/>
Whether it’s loading and unloading, pallet movement, warehouse logistics, or industrial material handling, we deliver dependable forklift solutions tailored to operational requirements.
              </p>
            </motion.div>
          </section>

          {/* --- SECTION 4: MAN LIFT / SCISSOR LIFTS --- */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="order-2 lg:order-1">
                <h2 className="text-3xl font-light text-[#5e81a7] mb-2">Man Lift / Scissor Lifts</h2>
                <h3 className="text-lg font-semibold text-[#1e3458] mb-4">Safe Elevated Access Solutions for<br/>Construction & Industrial Operations</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eagle Mountain offers professional access platform solutions designed to support elevated work activities across construction sites, maintenance operations, industrial facilities, and infrastructure projects. Our equipment provides safe and efficient access for projects requiring flexibility, stability, and reliable height access.<br/>
Whether it’s installation work, facility maintenance, inspection tasks, or construction support, we deliver dependable elevated access solutions focused on safety, efficiency, and operational performance.
                </p>
              </motion.div>
              <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden order-1 lg:order-2">
                <Image src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=2070&auto=format&fit=crop" alt="Lifts" fill className="object-cover" />
              </motion.div>
            </div>

            <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-light text-[#5e81a7] text-center mb-8">
              Available Access Platform Types
            </motion.h4>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div variants={fadeInUp} className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full"><Image src="https://images.unsplash.com/photo-1616421487228-568ea0283c74?q=80&w=2070&auto=format&fit=crop" alt="Man Lifts" fill className="object-cover" /></div>
                <div className="p-5 text-center">
                  <h5 className="font-semibold text-[#1e3458] text-base mb-2">Man Lifts</h5>
                  <p className="text-xs text-slate-500">Safe elevated access equipment designed for maintenance, installation, and industrial operations requiring vertical reach and mobility.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full"><Image src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop" alt="Scissor Lifts" fill className="object-cover" /></div>
                <div className="p-5 text-center">
                  <h5 className="font-semibold text-[#1e3458] text-base mb-2">Scissor Lifts</h5>
                  <p className="text-xs text-slate-500">Stable elevated work platforms designed for safe vertical access in warehouses, construction sites, and industrial environments.</p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* --- SECTION 5: WAREHOUSE AND STORAGE --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1565610222536-f8d152549244?q=80&w=2071&auto=format&fit=crop" alt="Warehouse" fill className="object-cover" />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h2 className="text-3xl font-light text-[#5e81a7] mb-2">Warehouse and Storage</h2>
              <h3 className="text-lg font-semibold text-[#1e3458] mb-4">Secure Storage & Logistics Support<br/>Solutions for Industrial Operations</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Eagle Mountain provides warehouse and storage solutions designed to support industrial operations, project logistics, equipment management, and material distribution requirements. Our facilities and logistics services ensure secure storage, organized inventory handling, and efficient operational support.<br/>
Whether it’s equipment storage, inventory management, logistics coordination, or industrial supply support, we deliver reliable warehouse solutions tailored to project and operational needs.
              </p>
            </motion.div>
          </section>

          {/* --- SECTION 6: ENERGY EQUIPMENT --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="order-2 lg:order-1">
              <h2 className="text-3xl font-light text-[#5e81a7] mb-2">Energy Equipment</h2>
              <h3 className="text-lg font-semibold text-[#1e3458] mb-4">Reliable Equipment Solutions for Power<br/>& Industrial Projects</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Eagle Mountain provides dependable energy equipment solutions designed to support power generation, utility infrastructure, oil & gas operations, and industrial sector projects. Our equipment and operational support services are focused on delivering safe, efficient, and reliable performance in demanding project environments.<br/>
Whether it’s industrial maintenance support, power sector operations, or specialized energy project requirements, we deliver equipment solutions tailored to operational efficiency and project success.
              </p>
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" alt="Energy Equipment" fill className="object-cover" />
            </motion.div>
          </section>

          {/* --- SECTION 7: OTHER EQUIPMENT --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" alt="Other Equipment" fill className="object-cover" />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <h2 className="text-3xl font-light text-[#5e81a7] mb-2">Other Equipment</h2>
              <h3 className="text-lg font-semibold text-[#1e3458] mb-4">Versatile Industrial Equipment Solutions for<br/>Diverse Project Requirements</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Eagle Mountain offers a wide range of additional industrial equipment designed to support construction, logistics, maintenance, warehousing, and specialized operational requirements across multiple industries. Our modern equipment fleet is maintained to ensure reliability, safety, and efficient project execution.<br/>
Whether it’s specialized operational support, project-specific equipment requirements, or industrial site assistance, we deliver dependable equipment solutions tailored to every project environment.
              </p>
            </motion.div>
          </section>

        </div>
      </div>
    </main>
  );
}