'use client';

import { motion } from 'framer-motion';
import { Truck, Wrench, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

// Operations team members data
const operationsMembers = [
  {
    id: 'mohammed-driver',
    name: 'Mohammed Al-Sayed',
    position: 'Senior Driver',
    description: 'Experienced driver with 15+ years of safe driving record and excellent customer service.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'primary' as const
  },
  {
    id: 'hassan-mechanic',
    name: 'Hassan Al-Mahmoud',
    position: 'Lead Mechanic',
    description: 'Expert mechanic ensuring our fleet maintains peak performance and safety standards.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'secondary' as const
  },
  {
    id: 'ali-dispatcher',
    name: 'Ali Al-Rashid',
    position: 'Dispatch Coordinator',
    description: 'Coordinating daily operations and optimizing routes for maximum efficiency.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'accent' as const
  },
  {
    id: 'ibrahim-warehouse',
    name: 'Ibrahim Al-Zahra',
    position: 'Warehouse Supervisor',
    description: 'Managing warehouse operations and ensuring proper handling of all cargo.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'success' as const
  },
  {
    id: 'yousef-safety',
    name: 'Yousef Al-Farouq',
    position: 'Safety Inspector',
    description: 'Conducting regular safety inspections and ensuring compliance with regulations.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'warning' as const
  },
  {
    id: 'majed-logistics',
    name: 'Majed Al-Hassan',
    position: 'Logistics Coordinator',
    description: 'Managing complex logistics operations and maintaining supply chain efficiency.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'primary' as const
  },
  {
    id: 'nasser-route',
    name: 'Nasser Al-Mansour',
    position: 'Route Planner',
    description: 'Optimizing delivery routes and ensuring timely completion of all shipments.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'secondary' as const
  },
  {
    id: 'tariq-maintenance',
    name: 'Tariq Al-Rashid',
    position: 'Maintenance Technician',
    description: 'Performing preventive maintenance and repairs to keep our fleet running smoothly.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format',
    colorVariant: 'accent' as const
  }
];

export default function OperationsSection() {
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
    <section className="py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&auto=format"
            alt="Operations team background"
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
              <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full animate-pulse"></div>
              <span className="px-8 py-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-300/30 text-amber-800 font-bold rounded-full text-sm tracking-wider group-hover:scale-105 transition-transform duration-300 shadow-lg">
                OPERATIONS TEAM
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              <span className="block text-gray-700">Our</span>
              <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                OPERATIONS
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Our operations team is the backbone of our company, ensuring smooth execution of all transportation activities with dedication and expertise.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-accent mb-2">8</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Operations Staff
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">100+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-accent mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Routes Covered
              </div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                Availability
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Operations Grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {operationsMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full flex flex-col">
                {/* Image */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-green-200/50 group-hover:ring-green-300/70 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r ${
                    member.colorVariant === 'primary' ? 'from-primary to-primary-light' :
                    member.colorVariant === 'secondary' ? 'from-secondary to-accent' :
                    member.colorVariant === 'accent' ? 'from-accent to-primary' :
                    member.colorVariant === 'success' ? 'from-success to-success-light' :
                    'from-warning to-warning-light'
                  } flex items-center justify-center`}>
                    <Truck className="text-white w-3 h-3" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className={`text-xs font-semibold mb-3 ${
                    member.colorVariant === 'primary' ? 'text-primary' :
                    member.colorVariant === 'secondary' ? 'text-secondary' :
                    member.colorVariant === 'accent' ? 'text-accent' :
                    member.colorVariant === 'success' ? 'text-success' :
                    'text-warning'
                  }`}>
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
