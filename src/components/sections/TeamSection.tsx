'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { User, Truck, Wrench, Settings, Users, Award } from 'lucide-react';

export default function TeamSection() {
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
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const teamMembers = [
    {
      id: 'mohammed',
      name: tHome('team.mohammed.name'),
      position: tHome('team.mohammed.position'),
      description: tHome('team.mohammed.description'),
      icon: User,
      color: 'from-[#F07B09] to-[#f6a201]',
      bgColor: 'bg-orange-50',
      textColor: 'text-[#F07B09]',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    },
    {
      id: 'maintenance',
      name: tHome('team.maintenance.name'),
      position: tHome('team.maintenance.position'),
      description: tHome('team.maintenance.description'),
      icon: Wrench,
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
    },
    {
      id: 'alaa',
      name: tHome('team.alaa.name'),
      position: tHome('team.alaa.position'),
      description: tHome('team.alaa.description'),
      icon: Settings,
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&auto=format',
    }
  ];

  const stats = [
    {
      number: '50+',
      label: tHome('team.stats.experience'),
      icon: Award
    },
    {
      number: '200+',
      label: tHome('team.stats.trucks'),
      icon: Truck
    },
    {
      number: '100%',
      label: tHome('team.stats.reliability'),
      icon: Award
    },
    {
      number: '24/7',
      label: tHome('team.stats.support'),
      icon: Users
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-[#F07B09] to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {tHome('team.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            {tHome('team.subtitle')}
          </motion.p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`${member.bgColor} rounded-2xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-100`}>
                {/* Team Member Image */}
                <div className="mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <member.icon className="text-white text-3xl" />
                </motion.div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold ${member.textColor} mb-2`}>
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${member.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {tHome('team.stats.title')}
            </h3>
            <p className="text-lg text-white/90">
              {tHome('team.stats.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300"
                >
                  <stat.icon className="text-white text-2xl" />
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {tHome('team.cta.title')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              {tHome('team.cta.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#F07B09] to-[#f6a201] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              {tHome('team.cta.button')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
