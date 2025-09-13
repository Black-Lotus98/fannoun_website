'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Truck, Package, Wrench, ArrowRight, CheckCircle } from 'lucide-react';

export default function CompanyShowcase() {
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

  const cardVariants = {
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

  const companies = [
    {
      id: 'ramz',
      name: 'RAMZ TRANSPORTING CO.',
      subtitle: tHome('companies.ramz.subtitle'),
      description: tHome('companies.ramz.description'),
      icon: Truck,
      color: 'from-[#F07B09] to-[#f6a201]',
      bgColor: 'bg-orange-50',
      textColor: 'text-[#F07B09]',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop&auto=format',
      features: [
        tHome('companies.ramz.features.1'),
        tHome('companies.ramz.features.2'),
        tHome('companies.ramz.features.3')
      ]
    },
    {
      id: 'fannoun',
      name: 'FANNOUN TRANSPORTING CO.',
      subtitle: tHome('companies.fannoun.subtitle'),
      description: tHome('companies.fannoun.description'),
      icon: Package,
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&auto=format',
      features: [
        tHome('companies.fannoun.features.1'),
        tHome('companies.fannoun.features.2'),
        tHome('companies.fannoun.features.3')
      ]
    },
    {
      id: 'tires',
      name: 'FANNOUN TIRES CO.',
      subtitle: tHome('companies.tires.subtitle'),
      description: tHome('companies.tires.description'),
      icon: Wrench,
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&auto=format',
      features: [
        tHome('companies.tires.features.1'),
        tHome('companies.tires.features.2'),
        tHome('companies.tires.features.3')
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
          >
            {tHome('companies.title')}
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {tHome('companies.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`${company.bgColor} rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}>
                {/* Company Image */}
                <div className="mb-6">
                  <Image
                    src={company.image}
                    alt={company.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${company.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <company.icon className="text-white text-2xl" />
                </motion.div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold ${company.textColor} mb-3`}>
                    {company.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-4">
                    {company.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {company.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {company.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + (index * 0.2) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className={`${company.textColor} w-4 h-4`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 bg-gradient-to-r ${company.color} text-white font-semibold rounded-lg flex items-center justify-center space-x-2 group-hover:shadow-lg transition-all duration-300`}
                >
                  <span>{tHome('companies.cta')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${company.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {tHome('companies.promise.title')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              {tHome('companies.promise.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#F07B09] to-[#f6a201] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              {tHome('companies.promise.cta')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
