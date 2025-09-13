'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import CompanyShowcase from '@/components/sections/CompanyShowcase';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  // Force re-render when locale changes
  useEffect(() => {
    // This ensures the component updates when the locale changes
  }, [locale, pathname]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Company Showcase */}
      <CompanyShowcase />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}