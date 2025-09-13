'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { 
  Package, 
  Wrench, 
  Shield,
  Clock,
  CheckCircle,
  Fuel,
  Container,
  MapPin
} from 'lucide-react';

export default function ServicesSection() {
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

  const services = [
    {
      id: 'liquid-transport',
      title: tHome('services.liquid.title'),
      description: tHome('services.liquid.description'),
      icon: Fuel,
      color: 'from-[#F07B09] to-[#f6a201]',
      bgColor: 'bg-orange-50',
      textColor: 'text-[#F07B09]',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format',
      features: [
        tHome('services.liquid.features.1'),
        tHome('services.liquid.features.2'),
        tHome('services.liquid.features.3')
      ]
    },
    {
      id: 'dry-transport',
      title: tHome('services.dry.title'),
      description: tHome('services.dry.description'),
      icon: Package,
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
      features: [
        tHome('services.dry.features.1'),
        tHome('services.dry.features.2'),
        tHome('services.dry.features.3')
      ]
    },
    {
      id: 'container-transport',
      title: tHome('services.container.title'),
      description: tHome('services.container.description'),
      icon: Container,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format',
      features: [
        tHome('services.container.features.1'),
        tHome('services.container.features.2'),
        tHome('services.container.features.3')
      ]
    },
    {
      id: 'tire-services',
      title: tHome('services.tires.title'),
      description: tHome('services.tires.description'),
      icon: Wrench,
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
      features: [
        tHome('services.tires.features.1'),
        tHome('services.tires.features.2'),
        tHome('services.tires.features.3')
      ]
    },
    {
      id: 'cross-border',
      title: tHome('services.crossBorder.title'),
      description: tHome('services.crossBorder.description'),
      icon: MapPin,
      color: 'from-indigo-600 to-indigo-700',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format',
      features: [
        tHome('services.crossBorder.features.1'),
        tHome('services.crossBorder.features.2'),
        tHome('services.crossBorder.features.3')
      ]
    },
    {
      id: 'logistics',
      title: tHome('services.logistics.title'),
      description: tHome('services.logistics.description'),
      icon: MapPin,
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
      features: [
        tHome('services.logistics.features.1'),
        tHome('services.logistics.features.2'),
        tHome('services.logistics.features.3')
      ]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: tHome('values.safety.title'),
      description: tHome('values.safety.description'),
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: tHome('values.reliability.title'),
      description: tHome('values.reliability.description'),
      color: 'text-[#F07B09]'
    },
    {
      icon: CheckCircle,
      title: tHome('values.quality.title'),
      description: tHome('values.quality.description'),
      color: 'text-purple-600'
    }
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23F07B09%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M60%2060h60v60H60z%22/%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Sophisticated Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 mb-6">
            <div className="w-2 h-2 bg-[#F07B09] rounded-full"></div>
            <span className="px-4 py-2 bg-gradient-to-r from-[#F07B09]/10 to-[#f6a201]/10 text-[#F07B09] font-semibold rounded-full text-sm border border-[#F07B09]/20">
              OUR SERVICES
            </span>
            <div className="w-2 h-2 bg-[#f6a201] rounded-full"></div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight"
          >
            <span className="block">TRANSPORTATION</span>
            <span className="block bg-gradient-to-r from-[#F07B09] to-[#f6a201] bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {tHome('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Sophisticated Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-0 h-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 overflow-hidden">
                {/* Service Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <service.icon className="text-white text-xl" />
                  </motion.div>
                  
                  {/* Service Number */}
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className={`text-2xl font-black ${service.textColor} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>

                  {/* Features with Better Design */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + (index * 0.1) + (featureIndex * 0.1) }}
                        className="flex items-center space-x-3 group/feature"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full group-hover/feature:scale-125 transition-transform duration-300`}></div>
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Sophisticated Decorative Elements */}
                <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr ${service.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sophisticated Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23F07B09%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>
          
          <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-[#F07B09] rounded-full"></div>
              <span className="px-4 py-2 bg-gradient-to-r from-[#F07B09]/20 to-[#f6a201]/20 text-[#f6a201] font-semibold rounded-full text-sm border border-[#F07B09]/30">
                OUR VALUES
              </span>
              <div className="w-2 h-2 bg-[#f6a201] rounded-full"></div>
            </div>
            
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-6">
              <span className="block">TRANSPORTATION</span>
              <span className="block bg-gradient-to-r from-[#F07B09] to-[#f6a201] bg-clip-text text-transparent">
                EXCELLENCE
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {tHome('values.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 relative z-10"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#F07B09]/30 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-24 h-24 bg-gradient-to-br ${value.color.replace('text-', 'from-').replace('-600', '-600')} to-${value.color.replace('text-', '').replace('-600', '-700')} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-[#F07B09]/25 transition-all duration-300`}
                  >
                    <value.icon className="text-white text-3xl" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-[#f6a201] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-base">
                    {value.description}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#F07B09]/20 to-[#f6a201]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
