import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full font-sans flex flex-col">
      {/* Top CTA Banner */}
      <div className="bg-[#254b80] py-6 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-white text-2xl font-medium tracking-wide">
          Ready to Start Your Project?
        </h2>
        <Link 
          href="/schedule" 
          className="bg-[#648ecc] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#537cba] transition-colors"
        >
          Schedule Appointment
        </Link>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0b1c2f] pt-16 pb-12 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Description */}
          <div className="lg:pr-8">
            <p className="text-gray-300 text-sm leading-relaxed mt-10 lg:mt-12">
              We provide reliable heavy equipment, crane solutions, and industrial support services for construction, infrastructure, logistics, and energy projects with a strong focus on safety, efficiency, and performance.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-xl leading-none">&bull;</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-xl leading-none">&bull;</span> Expertise
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-xl leading-none">&bull;</span> Equipment
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-xl leading-none">&bull;</span> Projects
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-xl leading-none">&bull;</span> Sectors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-xl leading-none">&bull;</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-6">Our Services</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Crane Rental</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Forklift Solutions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Access Platforms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Heavy Transportation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Warehouse Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-[#648ecc] font-medium mb-4">24 Hours & Emergencies</h3>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2 border border-gray-500 rounded-full text-[#648ecc]">
                <Phone size={24} />
              </div>
              <span className="text-3xl font-bold text-white tracking-wide">+929 xxx xxxx</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <MapPin size={16} className="text-[#648ecc]" />
                  <h4>Office Location</h4>
                </div>
                <p className="text-gray-400 text-sm pl-6">100 S Main St, New York, NY</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <Mail size={16} className="text-[#648ecc]" />
                  <h4>Send a Message</h4>
                </div>
                <p className="text-gray-400 text-sm pl-6">info@eaglemountain.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="bg-[#0a1524] border-t border-gray-700/50 py-6 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>Copyright 2026 - Eagle Mountain</p>
        <div className="flex items-center gap-6">
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}