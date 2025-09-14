'use client';

import { motion } from 'framer-motion';
import { Briefcase, Target, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

// Management team members data
const managementMembers = [
    {
        id: 'ahmed-manager',
        name: 'Ahmed Al-Mansour',
        position: 'Operations Manager',
        description: 'Overseeing daily operations and ensuring smooth execution of all transportation activities.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
        colorVariant: 'primary' as const
    },
    {
        id: 'sara-manager',
        name: 'Sara Al-Hassan',
        position: 'Logistics Manager',
        description: 'Coordinating complex logistics operations and optimizing supply chain efficiency.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&auto=format',
        colorVariant: 'secondary' as const
    },
    {
        id: 'omar-manager',
        name: 'Omar Al-Zahra',
        position: 'Fleet Manager',
        description: 'Managing our vehicle fleet and ensuring optimal performance and maintenance.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
        colorVariant: 'accent' as const
    },
    {
        id: 'fatima-manager',
        name: 'Fatima Al-Rashid',
        position: 'Customer Relations Manager',
        description: 'Building strong relationships with clients and ensuring exceptional customer service.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format',
        colorVariant: 'success' as const
    },
    {
        id: 'khalid-manager',
        name: 'Khalid Al-Mahmoud',
        position: 'Safety Manager',
        description: 'Implementing safety protocols and ensuring compliance with industry standards.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format',
        colorVariant: 'warning' as const
    },
    {
        id: 'layla-manager',
        name: 'Layla Al-Farouq',
        position: 'Finance Manager',
        description: 'Managing financial operations and ensuring sustainable business growth.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format',
        colorVariant: 'primary' as const
    }
];

export default function ManagementSection() {
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
    <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300/20 to-red-300/20 rounded-full blur-3xl"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format"
            alt="Management team background"
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
          className="text-center mb-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center space-x-4 mb-6 group">
              <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full animate-pulse"></div>
              <span className="px-8 py-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-md border border-red-300/30 text-red-800 font-bold rounded-full text-sm tracking-wider group-hover:scale-105 transition-transform duration-300 shadow-lg">
                MANAGEMENT TEAM
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              <span className="block text-gray-700">Our</span>
              <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                MANAGEMENT
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Our management team ensures the smooth operation of all departments, maintaining high standards and driving continuous improvement across the organization.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-secondary mb-2">6</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Department Managers
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-accent mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Years Average
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-secondary mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Efficiency
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-accent mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Team Members
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Management Grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {managementMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-orange-200/50 hover:border-orange-300/70 h-full flex flex-col group-hover:bg-white/90">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-orange-200/50 group-hover:ring-orange-300/70 transition-all duration-300">
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
                    <Briefcase className="text-white w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-4 ${
                    member.colorVariant === 'primary' ? 'text-blue-600' :
                    member.colorVariant === 'secondary' ? 'text-orange-600' :
                    member.colorVariant === 'accent' ? 'text-purple-600' :
                    member.colorVariant === 'success' ? 'text-green-600' :
                    'text-yellow-600'
                  }`}>
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {member.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center hover:from-orange-200 hover:to-red-200 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center hover:from-blue-200 hover:to-purple-200 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center hover:from-green-200 hover:to-emerald-200 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section >
  );
}
