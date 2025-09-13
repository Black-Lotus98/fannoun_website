'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
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
    { code: 'en', name: tCommon('languages.en'), flag: '🇺🇸' },
    { code: 'ar', name: tCommon('languages.ar'), flag: '🇸🇦' },
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
        <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2">
          <Globe className="w-5 h-5" />
          <span className="text-lg font-medium">🌐</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50" data-language-switcher>
      <div className="relative">
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl flex items-center space-x-2"
          aria-label={tCommon('switchLanguage')}
        >
          <Globe className="w-5 h-5" />
          <span className="text-lg font-medium">{currentLanguage.flag}</span>
          <span className="text-xs bg-white bg-opacity-20 px-1 rounded">
            {currentLocale}
          </span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                  currentLocale === language.code 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{language.flag}</span>
                <span className="text-sm flex-1">{language.name}</span>
                {currentLocale === language.code && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}