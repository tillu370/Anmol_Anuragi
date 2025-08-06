import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, MessageCircle, Star, Play, Info } from 'lucide-react';
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
    { name: 'FAQ', url: '#faq', icon: Info }
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
        className="hidden md:block fixed -top-12 md:-top-16 lg:-top-8 left-20 z-50"
      >
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-44 h-44 object-contain"
          />
        </div>
      </motion.div>

      {/* Tubelight Navigation */}
      <NavBar items={navItems} onNavigate={handleNavigate} />
    </>
  );
};

export default NewNavigation;