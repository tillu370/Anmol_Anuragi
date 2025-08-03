import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, MessageCircle, Star, Play } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';

const NewNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Services', url: '#services', icon: FileText },
    { name: 'Testimonials', url: '#testimonials', icon: Star },
    { name: 'Contact', url: '#contact', icon: MessageCircle }
  ];

  const handleNavigate = (url: string) => {
    if (url.startsWith('#')) {
      // Scroll to section within HomePage
      const sectionId = url.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigate to different page
      navigate(url);
    }
  };

  // Don't show navigation on splash screen
  if (location.pathname === '/') return null;

  return (
    <>
      {/* Logo and Brand */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200">
          <Play className="w-6 h-6 text-gray-800" />
          <span className="text-lg font-bold cinzel text-gray-800">Anmol Anuragi</span>
        </div>
      </motion.div>

      {/* Tubelight Navigation */}
      <NavBar items={navItems} onNavigate={handleNavigate} />
    </>
  );
};

export default NewNavigation; 