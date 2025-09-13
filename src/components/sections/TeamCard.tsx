'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  colorVariant: 'primary' | 'secondary' | 'accent' | 'success' | 'warning';
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const colorVariants = {
  primary: {
    card: 'bg-gradient-to-br from-primary to-primary-light',
    text: 'text-white',
    accent: 'bg-white/20',
    icon: 'text-white'
  },
  secondary: {
    card: 'bg-gradient-to-br from-slate-600 to-slate-800',
    text: 'text-white',
    accent: 'bg-white/20',
    icon: 'text-white'
  },
  accent: {
    card: 'bg-gradient-to-br from-blue-600 to-blue-800',
    text: 'text-white',
    accent: 'bg-white/20',
    icon: 'text-white'
  },
  success: {
    card: 'bg-gradient-to-br from-green-600 to-green-800',
    text: 'text-white',
    accent: 'bg-white/20',
    icon: 'text-white'
  },
  warning: {
    card: 'bg-gradient-to-br from-amber-600 to-amber-800',
    text: 'text-white',
    accent: 'bg-white/20',
    icon: 'text-white'
  }
};

export default function TeamCard({ member, index }: TeamCardProps) {
  const colors = colorVariants[member.colorVariant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="px-3"
    >
      <div className={`${colors.card} rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 group h-full`}>
        {/* Image Container */}
        <div className="relative mb-6">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          {/* Status Indicator */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          {/* Name */}
          <h3 className={`${colors.text} text-xl font-bold group-hover:text-white transition-colors duration-300`}>
            {member.name}
          </h3>

          {/* Position */}
          <div className={`${colors.accent} rounded-full px-4 py-2 inline-block`}>
            <p className={`${colors.text} text-sm font-semibold`}>
              {member.position}
            </p>
          </div>

          {/* Description */}
          <p className={`${colors.text} text-sm leading-relaxed opacity-90`}>
            {member.description}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.accent} p-2 rounded-full hover:bg-white/30 transition-all duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin className={`${colors.icon} w-4 h-4`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.accent} p-2 rounded-full hover:bg-white/30 transition-all duration-300`}
              aria-label="Email"
            >
              <Mail className={`${colors.icon} w-4 h-4`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.accent} p-2 rounded-full hover:bg-white/30 transition-all duration-300`}
              aria-label="Phone"
            >
              <Phone className={`${colors.icon} w-4 h-4`} />
            </motion.button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
      </div>
    </motion.div>
  );
}
