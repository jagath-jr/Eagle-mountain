import Image from 'next/image';
import { Mail, Phone, Calculator, Shield, Settings, Truck, Wrench } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* 1. HERO SECTION WITH FORM */}
      <section className="relative w-full min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
        {/* Note: Place a suitable construction background image in your public folder */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Heavy Equipment & <br/> Industrial Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              We Provide Supporting Construction, Energy, Infrastructure, and Industrial Projects with Reliable equipment & Professional Service.
            </p>
          </div>

          {/* Quote Form */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-white/20 max-w-md ml-auto w-full">
            <h3 className="text-xl font-semibold text-white mb-6">Request a Quote</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-[#648ecc] outline-none" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-[#648ecc] outline-none" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-[#648ecc] outline-none" />
              <select className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-[#648ecc] outline-none text-gray-600">
                <option>Select service</option>
                <option>Crane Rental</option>
                <option>Access Equipments</option>
                <option>Forklifts</option>
              </select>
              <button className="w-full bg-[#254b80] hover:bg-[#1a3861] text-white font-medium py-3 rounded-md transition-colors mt-2">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CARDS SECTION */}
      <section className="bg-[#254b80] py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Cranes", img: "/crane.jpg", desc: "Trust us to deliver safe lifting solutions, reliable equipment, and efficient support for all your industrial and construction projects." },
            { title: "Access Equipments", img: "/access-lift.jpg", desc: "Trust us to provide safe elevated access solutions and reliable man lifts for maintenance, construction, and industrial operations." },
            { title: "Forklifts", img: "/forklift.jpg", desc: "Trust us to deliver efficient material handling solutions and dependable forklift equipment for warehouses and worksites." }
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual next/image when you have images */}
                <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-gray-600">[Image: {service.title}]</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0b1c2f] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{service.desc}</p>
                <button className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-[#0b1c2f] font-medium rounded text-sm transition-colors">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT / STATS SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-200 h-48 rounded-lg"></div>
              <div className="bg-[#254b80] text-white p-8 rounded-lg flex flex-col items-center justify-center h-40">
                <span className="text-4xl font-bold mb-1">500+</span>
                <span className="text-sm text-center">Projects Completed</span>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gray-50 p-8 rounded-lg border flex flex-col items-center justify-center h-40">
                <span className="text-4xl font-bold text-[#254b80] mb-1">98%</span>
                <span className="text-sm text-center text-gray-600">Customer Satisfaction</span>
              </div>
              <div className="bg-gray-200 h-48 rounded-lg"></div>
            </div>
          </div>

          {/* Right Side Text */}
          <div>
            <span className="inline-block py-1 px-3 bg-gray-100 text-gray-600 text-xs font-semibold rounded mb-4">Our Specialities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c2f] mb-6 leading-tight">
              Trusted Industrial Equipment Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Eagle Mountain specializes in providing heavy equipment and industrial support services for construction, infrastructure, logistics, and energy projects. With a commitment to safety, operational excellence, and timely project execution, we help clients complete projects efficiently using modern equipment and experienced support teams.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CONTACT BANNER */}
      <section className="bg-[#648ecc] py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-[#1f2937] text-white p-6 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition-colors cursor-pointer">
            <Mail className="text-[#648ecc]" size={32} />
            <div>
              <p className="text-xs text-gray-400">Email Us</p>
              <p className="font-medium">info@eaglemountain.com</p>
            </div>
          </div>
          <div className="bg-[#1f2937] text-white p-6 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition-colors cursor-pointer">
            <Phone className="text-[#648ecc]" size={32} />
            <div>
              <p className="text-xs text-gray-400">Emergency Service</p>
              <p className="font-medium">Call +929 333 9296</p>
            </div>
          </div>
          <div className="bg-[#1f2937] text-white p-6 rounded-lg flex items-center gap-4 hover:bg-gray-800 transition-colors cursor-pointer">
            <Calculator className="text-[#648ecc]" size={32} />
            <div>
              <p className="text-xs text-gray-400">Request For</p>
              <p className="font-medium">Free Estimation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 px-6 lg:px-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#0b1c2f] mb-16">Why Choose Eagle Mountain</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {[
            { icon: <Settings size={40} className="text-[#254b80]" />, title: "Modern Equipment Fleet", desc: "Reliable and professionally maintained equipment." },
            { icon: <Shield size={40} className="text-[#254b80]" />, title: "Safety First Operations", desc: "Strict safety standards across all operations." },
            { icon: <Wrench size={40} className="text-[#254b80]" />, title: "Industrial Expertise", desc: "Supporting complex construction and energy projects." },
            { icon: <Truck size={40} className="text-[#254b80]" />, title: "Fast Mobilization", desc: "Rapid equipment deployment and support." },
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="bg-gray-50 p-4 rounded-lg inline-block mb-6 border">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-[#0b1c2f] mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#254b80] overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/process-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <span className="px-4 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full mb-6 uppercase tracking-wider">
            Services Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">How It Works</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
            {[
              { step: "Step 1", title: "Consultation" },
              { step: "Step 2", title: "Planning" },
              { step: "Step 3", title: "Execution" },
              { step: "Step 4", title: "Completion" },
            ].map((process, idx) => (
              <div key={idx} className="bg-[#648ecc]/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <span className="text-white/70 text-sm font-medium mb-2 block">{process.step}</span>
                <h4 className="text-white text-xl font-bold mb-3">{process.title}</h4>
                <p className="text-white/80 text-sm">Reliable and professionally maintained equipment.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}