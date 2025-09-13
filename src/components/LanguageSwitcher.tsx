'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const tCommon = useTranslations('common');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'en';

  const languages = [
    { code: 'en', name: tCommon('languages.en'), symbol: 'EN' },
    { code: 'ar', name: tCommon('languages.ar'), symbol: 'ع' },
  ];

  const handleLanguageChange = (locale: string) => {
    // Get the path without the current locale
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    const newPath = `/${locale}${pathWithoutLocale}`;
    
    // Close dropdown
    setIsOpen(false);
    
    // Navigate using window.location as fallback
    try {
      router.push(newPath);
    } catch {
      window.location.href = newPath;
    }
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isOpen && !target.closest('[data-language-switcher]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Watch for pathname changes to ensure re-render
  useEffect(() => {
    // This ensures the component updates when the pathname changes
  }, [pathname]);

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-4 rounded-2xl shadow-2xl flex items-center space-x-3 backdrop-blur-sm">
          <Globe className="w-5 h-5" />
          <span className="text-lg font-bold">EN</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50" data-language-switcher>
      <div className="relative">
        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white p-3 sm:p-4 rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 overflow-hidden"
          aria-label={tCommon('switchLanguage')}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex items-center space-x-2 sm:space-x-3">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-base sm:text-lg font-bold">{currentLanguage.symbol}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute bottom-full right-0 mb-3 w-48 sm:w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
            >
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left transition-all duration-200 flex items-center space-x-3 sm:space-x-4 group ${
                    currentLocale === language.code 
                      ? 'bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary font-semibold' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary-light/5 hover:text-primary'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-200 ${
                    currentLocale === language.code 
                      ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg' 
                      : 'bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-light group-hover:text-white group-hover:shadow-lg'
                  }`}>
                    {language.symbol}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{language.name}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {language.code}
                    </div>
                  </div>
                  {currentLocale === language.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}