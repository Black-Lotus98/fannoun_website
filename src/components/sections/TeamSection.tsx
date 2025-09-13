'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useSliderConfig } from '../../hooks/useSliderConfig';
import TeamCard from './TeamCard';
import { Users, Star, Award } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Team members data
const teamMembers = [
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

export default function TeamSection() {
  // const tHome = useTranslations('home');
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="px-6 py-3 bg-gradient-to-r from-primary/20 to-primary-light/20 backdrop-blur-sm border border-primary/30 text-primary font-semibold rounded-full text-sm">
                Leadership Team
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              <span className="block">Meet Our</span>
              <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                LEADERSHIP
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings decades of combined expertise in transportation, logistics, and business management to ensure Fannoun continues to lead the industry.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">5</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                General Managers
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-light to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-primary-light mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Years Combined
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Dedication
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Slider */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto"
        >
          <Slider {...sliderConfig} className="team-slider">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </Slider>

          {/* Custom Slider Styles */}
          <style jsx global>{`
            .team-slider {
              max-width: 100%;
              overflow: hidden;
            }
            .team-slider .slick-slide {
              padding: 0 12px;
            }
            .team-slider .slick-track {
              display: flex;
              align-items: stretch;
            }
            .team-slider .slick-slide > div {
              height: 100%;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}