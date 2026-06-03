"use client";

import React from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { motion, Variants } from "framer-motion";

// ========================================
// 1. DATA MODELS & CONTENT
// ========================================

const heroData = {
  tagline: "Our Fleet",
  title: "Equipments",
  description: "Reliable Heavy Equipment & Industrial Support Solutions",
  backgroundImage: "/equipments-page-hero.webp",
};

type LayoutType = "textLeft" | "textLeftResponsive" | "imageLeft";

interface SubCard {
  title: string;
  desc: string;
  img: string;
}

interface EquipmentSection {
  id: string;
  title: string;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  image: string;
  layout: LayoutType;
  subSectionTitle?: string;
  subCardsRow1?: SubCard[];
  subCardsRow2?: SubCard[];
}

const equipmentData: EquipmentSection[] = [
  {
    id: "cranes",
    title: "Cranes",
    subtitle: (
      <>
        Heavy Lifting Solutions for Industrial &<br />
        Construction Projects
      </>
    ),
    description: (
      <>
        Eagle Mountain provides reliable crane solutions designed to support lifting
        operations across construction sites, infrastructure developments, industrial
        facilities, logistics operations, and energy projects. Our modern crane fleet is
        operated by experienced professionals committed to safety, efficiency, and
        precision on every project.Whether it’s heavy equipment installation, material
        lifting, structural assembly, or industrial maintenance, we deliver dependable
        lifting solutions tailored to project requirements.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2079&auto=format&fit=crop",
    layout: "textLeft",
    subSectionTitle: "Available Crane Types",
    subCardsRow1: [
      {
        title: "All Terrain Cranes",
        desc: "Versatile cranes designed for both on-road travel and off-road jobsite performance. Ideal for large construction, infrastructure, and industrial lifting operations.",
        img: "/All-Terrain-Cranes.webp",
      },
      {
        title: "Rough Terrain Cranes",
        desc: "Powerful cranes built for challenging off-road environments and rugged construction sites where stability and mobility are essential.",
        img: "/Rough-Terrain-Cranes.webp",
      },
      {
        title: "Truck Mounted Cranes",
        desc: "Mobile lifting solutions mounted on trucks for fast transportation and efficient lifting operations across multiple project locations.",
        img: "/Truck-Mounted-Cranes.webp",
      },
    ],
    subCardsRow2: [
      {
        title: "Lattice Boom Crawler Cranes",
        desc: "Heavy-duty crawler cranes designed for large-scale lifting operations requiring exceptional stability and lifting capacity.",
        img: "/Lattice-Boom-Crawler-Cranes.webp",
      },
      {
        title: "Telescopic Crawler Cranes",
        desc: "Advanced crawler cranes combining mobility and telescopic boom flexibility for efficient lifting in restricted or demanding environments.",
        img: "/Telescopic-Crawler-Cranes.webp",
      },
    ],
  },
  {
    id: "trailers",
    title: "Trailers",
    subtitle: (
      <>
        Reliable Transportation Solutions for<br />
        Industrial & Heavy Equipment Projects
      </>
    ),
    description: (
      <>
        Eagle Mountain provides dependable trailer and heavy transportation solutions
        designed to support equipment mobilization, oversized cargo transport, logistics
        operations, and industrial project requirements. Our transportation fleet is
        equipped to handle demanding operations safely and efficiently across
        construction, infrastructure, and energy sectors.
        <br />
        Whether it’s heavy machinery transportation, project logistics coordination, or
        specialized cargo movement, we deliver reliable transportation solutions
        tailored to operational and project needs.
      </>
    ),
    image:
      "/Trailers.webp",
    layout: "textLeftResponsive",
  },
  {
    id: "forklift",
    title: "Forklift",
    subtitle: (
      <>
        Efficient Material Handling Solutions for<br />
        Industrial & Warehouse Operations
      </>
    ),
    description: (
      <>
        Eagle Mountain provides reliable forklift solutions designed to support material
        handling operations across warehouses, construction sites, logistics centers,
        industrial facilities, and manufacturing environments. Our modern forklift fleet
        is maintained to ensure safe, efficient, and smooth operational performance for
        every project.
        <br />
        Whether it’s loading and unloading, pallet movement, warehouse logistics, or
        industrial material handling, we deliver dependable forklift solutions tailored
        to operational requirements.
      </>
    ),
    image:
      "/Forklift.webp",
    layout: "imageLeft",
  },
  {
    id: "man-lifts",
    title: "Man Lift / Scissor Lifts",
    subtitle: (
      <>
        Safe Elevated Access Solutions for<br />
        Construction & Industrial Operations
      </>
    ),
    description: (
      <>
        Eagle Mountain offers professional access platform solutions designed to support
        elevated work activities across construction sites, maintenance operations,
        industrial facilities, and infrastructure projects. Our equipment provides safe
        and efficient access for projects requiring flexibility, stability, and reliable
        height access.
        <br />
        Whether it’s installation work, facility maintenance, inspection tasks, or
        construction support, we deliver dependable elevated access solutions focused on
        safety, efficiency, and operational performance.
      </>
    ),
    image:
      "/Man-Lift.webp",
    layout: "textLeftResponsive",
    subSectionTitle: "Available Access Platform Types",
    subCardsRow2: [
      {
        title: "Man Lifts",
        desc: "Safe elevated access equipment designed for maintenance, installation, and industrial operations requiring vertical reach and mobility.",
        img: "/Man-Lifts2.webp",
      },
      {
        title: "Scissor Lifts",
        desc: "Stable elevated work platforms designed for safe vertical access in warehouses, construction sites, and industrial environments.",
        img: "/Scissor-Lifts.webp",
      },
    ],
  },
  {
    id: "warehouse",
    title: "Warehouse and Storage",
    subtitle: (
      <>
        Secure Storage & Logistics Support<br />
        Solutions for Industrial Operations
      </>
    ),
    description: (
      <>
        Eagle Mountain provides warehouse and storage solutions designed to support
        industrial operations, project logistics, equipment management, and material
        distribution requirements. Our facilities and logistics services ensure secure
        storage, organized inventory handling, and efficient operational support.
        <br />
        Whether it’s equipment storage, inventory management, logistics coordination, or
        industrial supply support, we deliver reliable warehouse solutions tailored to
        project and operational needs.
      </>
    ),
    image:
      "/Warehouse-and-Storage.webp",
    layout: "imageLeft",
  },
  {
    id: "energy",
    title: "Energy Equipment",
    subtitle: (
      <>
        Reliable Equipment Solutions for Power<br />
        & Industrial Projects
      </>
    ),
    description: (
      <>
        Eagle Mountain provides dependable energy equipment solutions designed to support
        power generation, utility infrastructure, oil & gas operations, and industrial
        sector projects. Our equipment and operational support services are focused on
        delivering safe, efficient, and reliable performance in demanding project
        environments.
        <br />
        Whether it’s industrial maintenance support, power sector operations, or
        specialized energy project requirements, we deliver equipment solutions tailored
        to operational efficiency and project success.
      </>
    ),
    image:
      "/Energy-Equipment.webp",
    layout: "textLeftResponsive",
  },
  {
    id: "other",
    title: "Other Equipment",
    subtitle: (
      <>
        Versatile Industrial Equipment Solutions for<br />
        Diverse Project Requirements
      </>
    ),
    description: (
      <>
        Eagle Mountain offers a wide range of additional industrial equipment designed to
        support construction, logistics, maintenance, warehousing, and specialized
        operational requirements across multiple industries. Our modern equipment fleet
        is maintained to ensure reliability, safety, and efficient project execution.
        <br />
        Whether it’s specialized operational support, project-specific equipment
        requirements, or industrial site assistance, we deliver dependable equipment
        solutions tailored to every project environment.
      </>
    ),
    image:
      "/Other-Equipment.webp",
    layout: "imageLeft",
  },
];

// ========================================
// 2. ANIMATION VARIANTS
// ========================================

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

// ========================================
// 3. PAGE COMPONENT
// ========================================

export default function EquipmentPage() {
  return (
    <main className="relative min-h-screen bg-[#f9fafb2f] overflow-x-hidden">      {/* ========================================
        FIXED BACKGROUND IMAGE (Parallax)
        ========================================
      */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[linear-gradient(75.04deg,#234982_0%,rgba(35,73,130,0)_100%)]">
        <Image
          src={heroData.backgroundImage}
          alt="Equipment Hero"
          fill
          className="object-cover opacity-60 mix-blend-multiply"
          priority
        />
      </div>

      {/* ========================================
        HERO TEXT CONTENT
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
              {heroData.tagline}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide"
            >
              {heroData.title}
            </motion.h1>
          </div>

          {/* Right Side */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 md:mt-0 text-white md:text-right max-w-md"
          >
            <p className="text-sm md:text-base font-medium leading-snug drop-shadow-md">
              {heroData.description}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================
        MAIN CONTENT
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
          {equipmentData.map((section) => {
            const hasSubCards = !!section.subSectionTitle;

            // Generate Layout specific classes based on enum
            const isResponsiveTextLeft = section.layout === "textLeftResponsive";
            const isImageLeft = section.layout === "imageLeft";

            const textContent = (
              <motion.div
                variants={isImageLeft ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={isResponsiveTextLeft ? "order-2 lg:order-1" : undefined}
              >
                <h2 className="text-3xl font-light text-[#5e81a7] mb-2">
                  {section.title}
                </h2>
                <h3 className="text-lg font-semibold text-[#1e3458] mb-4">
                  {section.subtitle}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            );

            const imageContent = (
              <motion.div
                variants={isImageLeft ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden ${
                  isResponsiveTextLeft ? "order-1 lg:order-2" : ""
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            );

            return (
              <section
                key={section.id}
                className={
                  !hasSubCards ? "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" : ""
                }
              >
                {/* Main Row Layer */}
                {hasSubCards ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                    {isImageLeft ? (
                      <>
                        {imageContent}
                        {textContent}
                      </>
                    ) : (
                      <>
                        {textContent}
                        {imageContent}
                      </>
                    )}
                  </div>
                ) : isImageLeft ? (
                  <>
                    {imageContent}
                    {textContent}
                  </>
                ) : (
                  <>
                    {textContent}
                    {imageContent}
                  </>
                )}

                {/* Sub-Cards Layer (Rendered conditionally) */}
                {hasSubCards && (
                  <>
                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-2xl font-light text-[#5e81a7] text-center mb-8"
                    >
                      {section.subSectionTitle}
                    </motion.h4>

                    {/* Sub-cards Row 1 */}
                    {section.subCardsRow1 && (
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
                      >
                        {section.subCardsRow1.map((card, idx) => (
                          <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="relative h-48 w-full">
                              <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-5">
                              <h5 className="font-semibold text-[#1e3458] text-base mb-2">
                                {card.title}
                              </h5>
                              <p className="text-xs text-slate-500">{card.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {/* Sub-cards Row 2 */}
                    {section.subCardsRow2 && (
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                      >
                        {section.subCardsRow2.map((card, idx) => (
                          <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="border border-[#d1e0e8] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="relative h-48 w-full">
                              <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-5 text-center">
                              <h5 className="font-semibold text-[#1e3458] text-base mb-2">
                                {card.title}
                              </h5>
                              <p className="text-xs text-slate-500">{card.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}