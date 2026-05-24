import Hero from '@/components/public/Hero';
import Services from '@/components/public/Services';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. SERVICES CARDS SECTION */}
      <Services />

      {/* 3. Placeholder for the next section... */}
      <section className="bg-white py-40 px-6 lg:px-12 text-center">
        <h2>More content goes here...</h2>
      </section>

    </div>
  );
}