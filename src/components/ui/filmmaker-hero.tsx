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
        {/* Animated shapes */}
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
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
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
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
          className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
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
        <div className="max-w-4xl mx-auto text-center mt-16">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
                         <span className="text-sm text-white/60 tracking-wide">
               Professional Video Editor
             </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
                         <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
               <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 text-2xl sm:text-3xl md:text-4xl font-medium">
                 Grow your Personal Brand
               </span>
               <br />
               <span className={cn(
                 "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-5xl sm:text-7xl md:text-9xl font-bold"
               )}>
                 With Dynamic
               </span>
               <br />
               <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 text-2xl sm:text-3xl md:text-4xl font-medium">
                 High-Quality Video Content
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
            <Link
              to="/contact"
              className="border-2 border-white/30 text-white px-12 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-md"
            >
              Schedule 15Min Google Meet
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
};

export default FilmmakerHero; 