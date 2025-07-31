import React from 'react';
import { motion } from 'framer-motion';
import { NavBarDemo } from './ui/navbar-demo';
import SimpleNavbar from './ui/simple-navbar';

const TubelightNavbarDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-custom-beige pt-16">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 cinzel">Tubelight Navbar Demo</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A beautiful animated navigation bar with tubelight effect
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 cinzel">Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">✨ Animations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Smooth tubelight effect</li>
                  <li>• Framer Motion animations</li>
                  <li>• Responsive design</li>
                  <li>• Hover effects</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">🎨 Styling</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Glass morphism effect</li>
                  <li>• Custom color scheme</li>
                  <li>• Mobile-friendly icons</li>
                  <li>• Desktop text labels</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navbar Demo */}
      <div className="relative">
        <SimpleNavbar />
        <div className="mt-8">
          <NavBarDemo />
        </div>
      </div>
    </div>
  );
};

export default TubelightNavbarDemo; 