'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TeamPageHero from './components/TeamPageHero';
import LeadershipSection from './components/LeadershipSection';
import ManagementSection from './components/ManagementSection';
import OperationsSection from './components/OperationsSection';
import SupportSection from './components/SupportSection';

export default function TeamPage() {
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
      
      {/* Team Page Hero */}
      <TeamPageHero />
      
      {/* Leadership Section */}
      <LeadershipSection />
      
      {/* Management Section */}
      <ManagementSection />
      
      {/* Operations Section */}
      <OperationsSection />
      
      {/* Support Section */}
      <SupportSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}



