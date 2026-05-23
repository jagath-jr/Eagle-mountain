import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full font-sans shadow-sm">
      {/* Top Bar - Contact and Hours */}
      <div className="bg-[#254b80] text-gray-100 text-sm py-2.5 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+929 333 9296</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@eaglemountain.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <Clock size={16} />
          <span>Mon - Fri 08.00 - 18.00</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white py-4 px-6 lg:px-12 flex justify-between items-center border-b">
        
        {/* Left Side: Logo Placeholder */}
        <div className="flex-shrink-0">
           {/* Replace this text with your client's actual logo image */}
           <Link href="/" className="text-2xl font-bold text-[#254b80] tracking-wider">
             LOGO
           </Link>
        </div>

        {/* Right Side: Links and Action Button */}
        <div className="hidden lg:flex items-center gap-8">
          <Link 
            href="/about" 
            className="text-[#648ecc] font-medium hover:text-[#254b80] transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="/expertise" 
            className="text-[#648ecc] font-medium hover:text-[#254b80] transition-colors"
          >
            Expertise
          </Link>
          <Link 
            href="/equipment" 
            className="text-[#648ecc] font-medium hover:text-[#254b80] transition-colors"
          >
            Equipment
          </Link>
          <Link 
            href="/projects" 
            className="text-[#648ecc] font-medium hover:text-[#254b80] transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/sectors" 
            className="text-[#648ecc] font-medium hover:text-[#254b80] transition-colors"
          >
            Sectors
          </Link>
          <Link 
            href="/contact" 
            className="text-[#648ecc] font-medium hover:text-[#254b80] transition-colors"
          >
            Contact
          </Link>
          
          {/* Schedule Now Button */}
          <Link 
            href="/schedule" 
            className="bg-[#254b80] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#1a3861] transition-colors ml-2"
          >
            Schedule Now
          </Link>
        </div>
      </nav>
    </header>
  );
}