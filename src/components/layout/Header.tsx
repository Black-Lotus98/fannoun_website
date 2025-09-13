'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Truck, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const tHeader = useTranslations('header');
  const tCommon = useTranslations('common');
  const pathname = usePathname();

  const navigation = [
    { name: tHeader('nav.home'), href: '/', key: 'home' },
    { name: tHeader('nav.about'), href: '/about', key: 'about' },
    { name: tHeader('nav.gallery'), href: '/gallery', key: 'gallery' },
    { name: tHeader('nav.contact'), href: '/contact', key: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-[#F07B09] text-white py-2 px-4"
      >
        <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#f6a201]" />
                <span>+962 6 416 9422</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#f6a201]" />
                <span>info@fannoun.com</span>
              </div>
            </div>
          <div className="text-[#f6a201]">
            {tHeader('tagline')}
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="bg-[#F07B09] p-3 rounded-lg">
                <Truck className="text-white w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {tHeader('logo')}
                </h1>
                <p className="text-sm text-gray-600">
                  {tHeader('subtitle')}
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === `/${pathname.split('/')[1]}${item.href}`;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#F07B09]' 
                        : 'text-gray-700 hover:text-[#F07B09]'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F07B09]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item, index) => {
                  const isActive = pathname === `/${pathname.split('/')[1]}${item.href}`;
                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200 ${
                          isActive 
                            ? 'text-[#F07B09] bg-orange-50' 
                            : 'text-gray-700 hover:text-[#F07B09] hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
