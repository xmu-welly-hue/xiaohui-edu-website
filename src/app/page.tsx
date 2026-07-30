import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Teacher } from '@/components/Teacher';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Partner } from '@/components/Partner';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <Hero />
      <Teacher />
      <Features />
      <Pricing />
      <Partner />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
