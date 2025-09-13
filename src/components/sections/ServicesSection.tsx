'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { 
  Package, 
  Wrench, 
  Ship, 
  Globe,
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
    <section ref={ref} className="py-20 bg-white">
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
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
          >
            {tHome('services.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {tHome('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`${service.bgColor} rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}>
                {/* Service Image */}
                <div className="mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-white text-2xl" />
                </motion.div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className={`${service.textColor} w-4 h-4`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${service.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gray-50 rounded-3xl p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {tHome('values.title')}
            </h3>
            <p className="text-lg text-gray-600">
              {tHome('values.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <value.icon className={`text-3xl ${value.color}`} />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
