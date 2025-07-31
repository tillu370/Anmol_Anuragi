import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Clock, Tag } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Cinematic Edits', 'Commercials', 'Reels', 'YT Videos'];
  
  const projects = [
    {
      id: 1,
      title: 'Nike Brand Campaign',
      client: 'Nike',
      duration: '2:30',
      category: 'Commercials',
      tags: ['ColorGrade', 'MotionGFX'],
      thumbnail: 'commercial-1'
    },
    {
      id: 2,
      title: 'Cinematic Wedding Film',
      client: 'Private Client',
      duration: '8:45',
      category: 'Cinematic Edits',
      tags: ['ColorGrade', 'SoundDesign'],
      thumbnail: 'wedding-1'
    },
    {
      id: 3,
      title: 'Instagram Reel Series',
      client: 'Influencer',
      duration: '0:30',
      category: 'Reels',
      tags: ['FastCuts', 'Trending'],
      thumbnail: 'reel-1'
    },
    {
      id: 4,
      title: 'Tech Product Launch',
      client: 'Apple',
      duration: '1:45',
      category: 'Commercials',
      tags: ['MotionGFX', 'Product'],
      thumbnail: 'tech-1'
    },
    {
      id: 5,
      title: 'Music Video',
      client: 'Independent Artist',
      duration: '3:20',
      category: 'Cinematic Edits',
      tags: ['Creative', 'ColorGrade'],
      thumbnail: 'music-1'
    },
    {
      id: 6,
      title: 'YouTube Documentary',
      client: 'Creator',
      duration: '12:15',
      category: 'YT Videos',
      tags: ['Storytelling', 'Interview'],
      thumbnail: 'youtube-1'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const myBestWorks = [
    '/mybest1.mp4',
    '/mybest2.mp4',
    '/mybest3.mp4',
    '/mybest4.mp4',
    '/mybest5.mp4',
    '/mybest6.mp4',
  ];
  const recreations = [
    '/recreation1.mp4',
    '/recreation2.mp4',
    '/recreation3.mp4',
    '/recreation4.mp4',
    '/recreation5.mp4',
    '/recreation6.mp4',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-custom-beige">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 cinzel">Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my best works and creative recreations
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Best Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 cinzel">My Best Works</h2>
            <p className="text-lg text-gray-600">A selection of my top original edits</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {myBestWorks.map((video, idx) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
              >
                <video
                  src={video}
                  className="w-full h-full object-cover"
                  controls
                  style={{ aspectRatio: '9/16' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recreations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 cinzel">Recreations</h2>
            <p className="text-lg text-gray-600">Creative recreations and inspired edits</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recreations.map((video, idx) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
              >
                <video
                  src={video}
                  className="w-full h-full object-cover"
                  controls
                  style={{ aspectRatio: '9/16' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and bring your vision to life
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gray-800 text-custom-beige px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors hover-lift"
            >
              Start a Project
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;