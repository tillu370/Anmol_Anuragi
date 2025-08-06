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
    { name: 'Contact', url: '#contact', icon: MessageCircle },
    { name: 'FAQ', url: '#faq', icon: User }
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

  // Show navigation on all pages now
  // if (location.pathname === '/') return null;

  return (
    <>
      {/* Logo and Brand */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed bottom-2 md:bottom-4 lg:bottom-6 left-2 z-50"
      >
        <div className="flex items-center space-x-1 md:space-x-2 bg-white/90 backdrop-blur-md px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-full shadow-lg border border-gray-200">
          <Play className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-800" />
          <span className="text-xs md:text-sm lg:text-lg font-bold cinzel text-gray-800">Anmol Anuragi</span>
        </div>
      </motion.div>

      {/* Tubelight Navigation */}
      <NavBar items={navItems} onNavigate={handleNavigate} />
    </>
  );
};

export default NewNavigation;