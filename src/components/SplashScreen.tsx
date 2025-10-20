import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Film } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate('/home'), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden film-grain">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <motion.div
          className="absolute inset-0 w-full h-full opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #ccc 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #ccc 0%, transparent 50%)',
              'radial-gradient(circle at 40% 50%, #ccc 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 md:w-24 md:h-24 mx-auto border-2 border-gray-300 rounded-full flex items-center justify-center"
            >
              <Play className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 mx-auto border border-gray-300 rounded-full"
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 cinzel"
        >
          Anmol Anuragi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-300 text-lg mb-8"
        >
          Editing That Speaks Loud in Silence
        </motion.p>

        {/* Loading Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="w-64 md:w-80 mx-auto px-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Rebuilding the Timeline...</span>
            <span className="text-gray-300 text-sm">{progress}%</span>
          </div>
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default SplashScreen;