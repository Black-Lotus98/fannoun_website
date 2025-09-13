'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Ship, Globe, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-32 lg:pt-40">
      {/* Sophisticated Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&auto=format"
          alt="Transportation trucks on highway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
      </div>
      
      {/* Transportation-themed Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23F07B09%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020h60v60H20z%22/%3E%3Cpath%20d%3D%22M30%2030h40v40H30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Content */}
          <div className="text-white space-y-6 lg:space-y-8">
            {/* Company Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-primary-light/20 backdrop-blur-sm border border-primary/30 text-primary-light font-semibold rounded-full text-xs sm:text-sm">
                {tHome('hero.badge')}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2 sm:space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-white">{tHome('hero.title')}</span>
                <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  TRANSPORT
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed max-w-2xl"
            >
              {tHome('hero.subtitle')}
            </motion.p>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed"
            >
              {tHome('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-2xl text-base sm:text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{tHome('hero.cta.primary')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/30 text-white font-semibold rounded-2xl text-base sm:text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                {tHome('hero.cta.secondary')}
              </motion.button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 pb-20 sm:pb-12"
            >
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-wider">{tHome('hero.stats.years')}</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-black text-primary-light mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-wider">{tHome('hero.stats.trucks')}</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-wider">{tHome('hero.stats.reliability')}</div>
              </div>
            </motion.div>
          </div>

          {/* Sophisticated Transportation Visual */}
          <motion.div 
            variants={truckVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Main Transportation Scene */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Sophisticated Truck Design */}
                  <div className="relative w-96 h-48">
                    {/* Truck Cab - More Realistic */}
                    <div className="absolute left-0 top-4 w-32 h-36 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-2xl">
                      <div className="absolute top-3 left-3 w-26 h-8 bg-white/20 rounded-lg"></div>
                      <div className="absolute top-12 left-3 w-26 h-6 bg-white/10 rounded"></div>
                      <div className="absolute bottom-3 left-3 w-26 h-4 bg-white/15 rounded"></div>
                    </div>
                    
                    {/* Container - More Detailed */}
                    <div className="absolute right-0 top-4 w-56 h-36 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl border-2 border-white/20">
                      <div className="absolute top-3 left-3 w-50 h-8 bg-white/30 rounded-lg"></div>
                      <div className="absolute top-12 left-3 w-50 h-6 bg-white/20 rounded"></div>
                      <div className="absolute bottom-3 left-3 w-50 h-4 bg-white/25 rounded"></div>
                      {/* Fannoun Logo Placeholder */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gradient-to-r from-primary to-primary-light rounded text-white text-xs font-bold flex items-center justify-center">
                        FANNOUN
                      </div>
                    </div>

                    {/* Wheels - More Realistic */}
                    <div className="absolute -bottom-6 left-12 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-lg"></div>
                    <div className="absolute -bottom-6 left-28 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-lg"></div>
                    <div className="absolute -bottom-6 right-12 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-lg"></div>
                    <div className="absolute -bottom-6 right-28 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-lg"></div>
                  </div>

                  {/* Road with More Detail */}
                  <div className="absolute -bottom-12 left-0 right-0 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full shadow-xl"></div>
                  <div className="absolute -bottom-9 left-0 right-0 h-0.5 bg-primary-light"></div>
                  <div className="absolute -bottom-8 left-0 right-0 h-0.5 bg-white/50"></div>
                </div>
              </motion.div>

              {/* Floating Service Icons with Better Design */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary-light/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-primary/30 shadow-xl"
              >
                <Ship className="text-primary-light w-10 h-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-24 left-8 w-20 h-20 bg-gradient-to-br from-primary-light/20 to-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-primary-light/30 shadow-xl"
              >
                <MapPin className="text-primary w-10 h-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 2.5, duration: 1.2, ease: "easeOut" }}
                className="absolute top-1/2 left-4 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl"
              >
                <Globe className="text-white w-10 h-10" />
              </motion.div>

              {/* Additional Transportation Elements */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute top-16 left-16 w-4 h-4 bg-primary rounded-full animate-pulse"
              />
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.2, duration: 1 }}
                className="absolute bottom-32 right-16 w-3 h-3 bg-primary-light rounded-full animate-pulse"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sophisticated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-4 bg-gradient-to-b from-primary to-primary-light rounded-full mt-2"
            />
          </div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-xs font-medium tracking-wider uppercase"
          >
            Scroll
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
