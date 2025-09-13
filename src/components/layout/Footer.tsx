'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const tCommon = useTranslations('common');
  const tHeader = useTranslations('header');

  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const quickLinks = [
    { name: tHeader('nav.home'), href: '/' },
    { name: tHeader('nav.about'), href: '/about' },
    { name: tHeader('nav.gallery'), href: '/gallery' },
    { name: tHeader('nav.contact'), href: '/contact' }
  ];

  const services = [
    'Liquid Goods Transport',
    'Dry Goods Transport',
    'Container Services',
    'Tire Services',
    'Cross-Border Transport',
    'Logistics Solutions'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="bg-blue-600 p-3 rounded-lg">
                <Truck className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{tHeader('logo')}</h3>
                <p className="text-gray-400 text-sm">{tHeader('subtitle')}</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {tCommon('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">{tCommon('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">{tCommon('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">{tCommon('footer.contact')}</h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">+962 6 416 9422</p>
                  <p className="text-gray-400">+962 6 416 1797</p>
                  <p className="text-gray-400">+962 6 416 5540</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <p className="text-gray-400">info@fannoun.com</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <p className="text-gray-400">Amman, Jordan</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} FANNOUN. {tCommon('footer.rights')}
            </p>
            <p className="text-gray-400 text-sm">
              {tCommon('footer.developedBy')} <span className="text-blue-400">ISTANBUL_IT</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
