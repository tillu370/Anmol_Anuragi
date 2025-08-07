import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Circle } from 'lucide-react';
import { HeroGeometric } from './shape-landing-hero';
import { cn } from '../../lib/utils';

const FilmmakerHero: React.FC = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {/* Pixel Art Image - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 2.5, delay: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[5%] md:left-[8%] top-[25%] md:top-[30%] hidden md:block"
        >
                     <motion.div
             animate={{ y: [0, 20, 0], rotate: [0, 2, 0] }}
             transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
             className="relative"
           >
             <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg shadow-2xl backdrop-blur-sm">
               <img 
                 src="/pixel-art-1.png" 
                 alt="Pixel Art 1" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   console.log('Error loading pixel-art-1.png');
                   e.currentTarget.style.display = 'none';
                 }}
               />
             </div>
           </motion.div>
        </motion.div>

        {/* Pixel Art Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 2.5, delay: 1.0, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute right-[5%] md:right-[8%] bottom-[25%] md:bottom-[30%] hidden md:block"
        >
                     <motion.div
             animate={{ y: [0, -20, 0], rotate: [0, -2, 0] }}
             transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
             className="relative"
           >
             <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg shadow-2xl backdrop-blur-sm">
               <img 
                 src="/pixel-art-2.png" 
                 alt="Pixel Art 2" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   console.log('Error loading pixel-art-2.png');
                   e.currentTarget.style.display = 'none';
                 }}
               />
             </div>
           </motion.div>
        </motion.div>

        {/* Animated shapes */}
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ width: 600, height: 140 }}
            className="relative"
          >
            <div className={cn(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-r to-transparent from-indigo-500/[0.15]",
              "backdrop-blur-[2px] border-2 border-white/[0.15]",
              "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
              "after:absolute after:inset-0 after:rounded-full",
              "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
            )} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 15 }}
          animate={{ opacity: 1, y: 0, rotate: -15 }}
          transition={{ duration: 2.4, delay: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%] hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ width: 500, height: 120 }}
            className="relative"
          >
            <div className={cn(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-r to-transparent from-rose-500/[0.15]",
              "backdrop-blur-[2px] border-2 border-white/[0.15]",
              "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
              "after:absolute after:inset-0 after:rounded-full",
              "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
            )} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 2.4, delay: 0.4, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ width: 300, height: 80 }}
            className="relative"
          >
            <div className={cn(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-r to-transparent from-violet-500/[0.15]",
              "backdrop-blur-[2px] border-2 border-white/[0.15]",
              "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
              "after:absolute after:inset-0 after:rounded-full",
              "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
            )} />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mt-0 md:mt-16">
          {/* Logo above Specialist Team badge on mobile */}
          <div className="block md:hidden flex justify-center mb-34">
            <img src="/logo.png" alt="Logo" className="h-36 w-36 object-contain" />
          </div>
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-xs md:text-sm text-white/60 tracking-wide">
              Specialist Team
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
                         <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 tracking-tight px-2 sm:px-4">
                               <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
                  Grow your
                </span>
               <br />
                                                               <span className={cn(
                   "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-[#F8F6D0] text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold"
                 )}>
                   Personal Brand
                 </span>
               <br />
                               <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
                  With Dynamic,High-Quality Video Content
                </span>
             </h1>
          </motion.div>

          

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#405060] via-[#A0B0C0] to-[#FFFACD] text-black px-6 md:px-12 py-3 md:py-4 rounded-lg font-semibold hover:from-[#506070] hover:via-[#B0C0D0] hover:to-[#FFF8DC] transition-all duration-300 flex items-center justify-center backdrop-blur-md text-sm md:text-base shadow-lg hover:shadow-xl cursor-pointer"
            >
              Schedule 15Min Google Meet
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
};

export default FilmmakerHero; 