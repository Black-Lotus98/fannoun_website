'use client';

import { motion } from 'framer-motion';
import { Headphones, Mail, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';

// Support team members data
const supportMembers = [
  {
    id: 'nour-customer',
    name: 'Nour Al-Hassan',
    position: 'Customer Service Lead',
    description: 'Leading our customer service team and ensuring exceptional client satisfaction.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'primary' as const
  },
  {
    id: 'rana-support',
    name: 'Rana Al-Mahmoud',
    position: 'Technical Support',
    description: 'Providing technical assistance and troubleshooting for all our systems.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'secondary' as const
  },
  {
    id: 'dina-account',
    name: 'Dina Al-Rashid',
    position: 'Account Manager',
    description: 'Managing key client accounts and building long-term relationships.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'accent' as const
  },
  {
    id: 'hala-admin',
    name: 'Hala Al-Zahra',
    position: 'Administrative Assistant',
    description: 'Supporting daily operations and ensuring smooth administrative processes.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'success' as const
  }
];

export default function SupportSection() {
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
    <section className="py-24 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&auto=format"
            alt="Support team background"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center space-x-4 mb-6 group">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full animate-pulse"></div>
              <span className="px-8 py-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-md border border-yellow-300/30 text-yellow-800 font-bold rounded-full text-sm tracking-wider group-hover:scale-105 transition-transform duration-300 shadow-lg">
                SUPPORT TEAM
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              <span className="block text-gray-700">Our</span>
              <span className="block bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                SUPPORT
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Our support team is dedicated to providing exceptional customer service and ensuring all our clients receive the assistance they need.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-success-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-success mb-2">4</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Support Staff
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-success-light to-success rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-success-light mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Response Rate
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-success-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-success mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Availability
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-success-light to-success rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-success-light mb-2">100+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Daily Inquiries
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Support Grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {supportMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full flex flex-col">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-purple-200/50 group-hover:ring-purple-300/70 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${
                    member.colorVariant === 'primary' ? 'from-primary to-primary-light' :
                    member.colorVariant === 'secondary' ? 'from-secondary to-accent' :
                    member.colorVariant === 'accent' ? 'from-accent to-primary' :
                    member.colorVariant === 'success' ? 'from-success to-success-light' :
                    'from-warning to-warning-light'
                  } flex items-center justify-center`}>
                    <Headphones className="text-white w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-4 ${
                    member.colorVariant === 'primary' ? 'text-primary' :
                    member.colorVariant === 'secondary' ? 'text-secondary' :
                    member.colorVariant === 'accent' ? 'text-accent' :
                    member.colorVariant === 'success' ? 'text-success' :
                    'text-warning'
                  }`}>
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+962 6 123 4567</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>support@fannoun.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
