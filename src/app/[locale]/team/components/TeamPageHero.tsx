'use client';

import { motion } from 'framer-motion';
import { Users, Star, Award, Heart } from 'lucide-react';
import Image from 'next/image';

export default function TeamPageHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    return (
    <section className="relative pt-56 sm:pt-44 lg:pt-40 pb-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Professional Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-300 to-orange-300 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full blur-3xl animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full blur-3xl animate-pulse delay-2000 opacity-40"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-red-400 to-amber-400 rounded-full blur-2xl animate-bounce opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-2xl animate-bounce delay-500 opacity-30"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format"
            alt="Team background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full animate-pulse"></div>
              <span className="px-8 py-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-md border border-red-300/30 text-red-800 font-bold rounded-full text-sm tracking-wider group-hover:scale-105 transition-transform duration-300 shadow-lg">
                OUR PROFESSIONAL TEAM
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
              <span className="block text-gray-700">Meet Our</span>
              <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                EXPERT TEAM
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
              Our diverse team of professionals brings together decades of experience in transportation, logistics, and business management. Each member plays a crucial role in our continued success and growth.
            </p>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            <motion.div 
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-red-500/25">
                  <Users className="text-white w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <div className="text-5xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">25</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Team Members
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-orange-500/25">
                  <Star className="text-white w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <div className="text-5xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">100</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Years Combined
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-amber-500/25">
                  <Award className="text-white w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <div className="text-5xl font-black text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">15</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Departments
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-red-700 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-red-500/25">
                  <Heart className="text-white w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">%</span>
                </div>
              </div>
              <div className="text-5xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">100</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Dedication
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-300/30 rounded-full text-gray-700 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Scroll down to meet our professional team members</span>
              <div className="w-6 h-6 border-2 border-red-300/50 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section >
  );
}
