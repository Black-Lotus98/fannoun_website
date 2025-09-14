'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useSliderConfig } from '@/hooks/useSliderConfig';
import TeamCard from '@/components/sections/TeamCard';
import { Users, Star, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Leadership team members data
const leadershipMembers = [
  {
    id: 'yaser-fannoun',
    name: 'Yaser Fannoun',
    position: 'General Manager',
    description: 'Leading our transportation operations with over 20 years of experience in logistics and fleet management.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'primary' as const
  },
  {
    id: 'naser-fannoun',
    name: 'Naser Fannoun',
    position: 'General Manager',
    description: 'Overseeing strategic planning and business development to ensure continued growth and excellence.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'secondary' as const
  },
  {
    id: 'jamal-fannoun',
    name: 'Jamal Fannoun',
    position: 'General Manager',
    description: 'Managing operations and ensuring the highest standards of service delivery across all our routes.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'accent' as const
  },
  {
    id: 'kamal-fannoun',
    name: 'Kamal Fannoun',
    position: 'General Manager',
    description: 'Coordinating logistics and maintaining our commitment to safety and reliability in every delivery.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'success' as const
  },
  {
    id: 'alaa-fannoun',
    name: 'Alaa Fannoun',
    position: 'General Manager',
    description: 'Driving innovation and technology integration to enhance our transportation solutions and customer experience.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'warning' as const
  }
];

export default function LeadershipSection() {
  const [mounted, setMounted] = useState(false);
  
  const sliderConfig = useSliderConfig({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: false,
    arrows: false,
    pauseOnHover: true,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: true
  });

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center space-x-4 mb-6 group">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="px-8 py-4 bg-gradient-to-r from-primary/10 to-primary-light/10 backdrop-blur-md border border-primary/20 text-primary font-bold rounded-full text-sm tracking-wider group-hover:scale-105 transition-transform duration-300">
                LEADERSHIP TEAM
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              <span className="block opacity-90">Our</span>
              <span className="block bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                LEADERSHIP
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Our experienced leadership team brings decades of combined expertise in transportation, logistics, and business management to ensure Fannoun continues to lead the industry.
            </p>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <motion.div 
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-primary/20">
                  <Users className="text-white w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <div className="text-4xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">
                General Managers
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-light to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-primary-light/20">
                  <Star className="text-white w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <div className="text-4xl font-black text-primary-light mb-3 group-hover:scale-110 transition-transform duration-300">50</div>
              <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">
                Years Combined
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-accent/20">
                  <Award className="text-white w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">%</span>
                </div>
              </div>
              <div className="text-4xl font-black text-accent mb-3 group-hover:scale-110 transition-transform duration-300">100</div>
              <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">
                Dedication
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Team Slider */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-8xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full"></div>
          </div>
          {!mounted ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadershipMembers.map((member) => (
                <div key={member.id} className="px-3">
                  <div className="bg-gray-200 rounded-2xl p-6 shadow-2xl h-[500px] flex flex-col animate-pulse">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-6"></div>
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-6 flex-grow"></div>
                    <div className="flex justify-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Slider {...sliderConfig} className="team-slider">
              {leadershipMembers.map((member, index) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  index={index}
                />
              ))}
            </Slider>
          )}

          {/* Custom Slider Styles */}
          <style jsx global>{`
            .team-slider {
              max-width: 100%;
              overflow: hidden;
            }
            .team-slider .slick-slide {
              padding: 0 12px;
              height: auto;
            }
            .team-slider .slick-track {
              display: flex;
              align-items: stretch;
            }
            .team-slider .slick-slide > div {
              height: 100%;
              display: flex;
            }
            .team-slider .slick-list {
              overflow: visible;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
