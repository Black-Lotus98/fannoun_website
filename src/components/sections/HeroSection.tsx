'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Ship, Globe, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const tHome = useTranslations('home');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const truckVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="text-white">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full text-sm">
                {tHome('hero.badge')}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {tHome('hero.title')}
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed"
            >
              {tHome('hero.subtitle')}
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg mb-10 text-blue-200 max-w-2xl"
            >
              {tHome('hero.description')}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg text-lg hover:bg-yellow-300 transition-colors duration-200"
              >
                {tHome('hero.cta.primary')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                {tHome('hero.cta.secondary')}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-blue-200">{tHome('hero.stats.years')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">200+</div>
                <div className="text-sm text-blue-200">{tHome('hero.stats.trucks')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-blue-200">{tHome('hero.stats.reliability')}</div>
              </div>
            </motion.div>
          </div>

          {/* Animated Truck Graphic */}
          <motion.div 
            variants={truckVariants}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Truck */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Truck Body */}
                  <div className="w-80 h-40 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-2xl relative">
                    {/* Truck Cab */}
                    <div className="absolute left-4 top-2 w-24 h-32 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                      <div className="absolute top-2 left-2 w-20 h-6 bg-white/30 rounded"></div>
                      <div className="absolute bottom-2 left-2 w-20 h-4 bg-white/20 rounded"></div>
                    </div>
                    
                    {/* Container */}
                    <div className="absolute right-4 top-2 w-48 h-32 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg">
                      <div className="absolute top-2 left-2 w-44 h-6 bg-white/30 rounded"></div>
                      <div className="absolute bottom-2 left-2 w-44 h-4 bg-white/20 rounded"></div>
                    </div>

                    {/* Wheels */}
                    <div className="absolute -bottom-4 left-8 w-8 h-8 bg-gray-800 rounded-full"></div>
                    <div className="absolute -bottom-4 left-20 w-8 h-8 bg-gray-800 rounded-full"></div>
                    <div className="absolute -bottom-4 right-8 w-8 h-8 bg-gray-800 rounded-full"></div>
                    <div className="absolute -bottom-4 right-20 w-8 h-8 bg-gray-800 rounded-full"></div>
                  </div>

                  {/* Road */}
                  <div className="absolute -bottom-8 left-0 right-0 h-4 bg-gray-600 rounded-full"></div>
                  <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-yellow-400"></div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute top-10 right-10 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Ship className="text-white w-8 h-8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <MapPin className="text-white w-8 h-8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="absolute top-1/2 left-5 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Globe className="text-white w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
