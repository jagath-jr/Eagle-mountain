"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
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

export default function ContactPage() {
  return (
    // Removed the background color from main so the fixed background can show through
    <main className="relative min-h-screen">
      
      {/* ========================================
        1. FIXED BACKGROUND IMAGE 
        ========================================
        This div is fixed to the viewport. It stays still while everything else scrolls.
      */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#8ba4b4]">
        <Image
          src="contact-page-hero.webp"
          alt="Construction Workers"
          fill
          className="object-cover opacity-50 mix-blend-multiply"
          priority
        />
      </div>

      {/* ========================================
        2. HERO TEXT CONTENT (Transparent)
        ========================================
        This section just holds the text and scrolls normally over the fixed image.
      */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center pt-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          {/* Left Side */}
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
              Get In Touch
            </motion.h1>
          </div>

          {/* Right Side */}
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
        The bg-white here creates a solid block that slides up and covers the fixed image.
      */}
      <div className="relative z-20 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        
        {/* Circular Mail Icon Overlap */}
        {/* Moved to the top edge of the white container so it scrolls WITH the content */}
        <motion.div 
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
          className="absolute top-0 left-1/2 z-30 origin-center"
        >
          <div className="bg-[#244265] p-5 rounded-full border-[6px] border-white shadow-sm flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Inner Content Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 overflow-hidden">
          
          {/* LEFT COLUMN: Form Area */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2 bg-[#f6f8fb] p-8 md:p-12 rounded-[2rem]"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3458] mb-4">
              Need equipment or project support?
            </h2>
            <p className="text-slate-500 mb-10 text-sm md:text-base leading-relaxed">
              We specialize in providing reliable heavy equipment, crane solutions, transportation, and industrial support services tailored to construction, infrastructure, logistics, and energy projects. Our experienced team is committed to delivering safe and efficient solutions that support operational excellence and project success.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inputs Column */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#1e3458] mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#244265] focus:ring-1 focus:ring-[#244265] bg-transparent transition-all placeholder:text-gray-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1e3458] mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#244265] focus:ring-1 focus:ring-[#244265] bg-transparent transition-all placeholder:text-gray-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1e3458] mb-2">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#244265] focus:ring-1 focus:ring-[#244265] bg-transparent transition-all placeholder:text-gray-400" 
                  />
                </div>
              </div>

              {/* Textarea Column */}
              <div className="h-full flex flex-col">
                <label className="block text-sm font-medium text-[#1e3458] mb-2">Message</label>
                <textarea 
                  placeholder="Your Message" 
                  className="w-full flex-grow min-h-[150px] md:min-h-0 px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#244265] focus:ring-1 focus:ring-[#244265] bg-transparent resize-none transition-all placeholder:text-gray-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-2">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="bg-[#244265] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1a314d] transition-colors shadow-sm"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* RIGHT COLUMN: Contact Info */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8 lg:pt-4"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#1e3458]">Our Office</h3>

            {/* Office Image Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-sm"
            >
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Office Building" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#244265]/90 via-[#244265]/20 to-transparent flex items-end justify-center pb-5">
                <p className="text-white font-medium text-sm tracking-wide">
                  Mon - Fri 08.00 - 18.00
                </p>
              </div>
            </motion.div>

            {/* Contact Details List */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-7 pt-2"
            >
              
              <motion.div variants={fadeInUp} className="flex gap-4 items-start group">
                <div className="bg-[#f6f8fb] p-2 rounded-lg group-hover:bg-[#244265] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#5e81a7] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <div className="mt-1">
                  <h4 className="font-semibold text-[#1e3458] text-sm mb-1">Office Location</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Eagle Mountain<br />
                    Business Bay, Dubai, UAE
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4 items-start group">
                <div className="bg-[#f6f8fb] p-2 rounded-lg group-hover:bg-[#244265] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#5e81a7] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <div className="mt-1">
                  <h4 className="font-semibold text-[#1e3458] text-sm mb-1">Send a Message</h4>
                  <p className="text-slate-500 text-sm">
                    info@eaglemountain.com
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4 items-start group">
                <div className="bg-[#f6f8fb] p-2 rounded-lg group-hover:bg-[#244265] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#5e81a7] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <div className="mt-1">
                  <h4 className="font-semibold text-[#1e3458] text-sm mb-1">Call Us Directly</h4>
                  <p className="text-slate-500 text-sm">
                    +971 XX XXX XXXX
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </section>
      </div>
    </main>
  );
}