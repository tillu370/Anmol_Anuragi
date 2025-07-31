import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight, Film, Video, Users, Eye } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import FilmmakerHero from './ui/filmmaker-hero';
import ClientsScroll from './ui/clients-scroll';

const featuredVideos = [
  {
    title: 'My Video 1',
    url: '/myvideo1.mp4',
    description: '',
  },
  {
    title: 'My Video 2',
    url: '/myvideo2.mp4',
    description: '',
  },
  {
    title: 'My Video 3',
    url: '/myvideo3.mp4',
    description: '',
  },
  {
    title: 'My Video 4',
    url: '/myvideo4.mp4',
    description: '',
  },
];

const HomePage: React.FC = () => {
  const floatingTexts = ['Reels', 'Trailers', 'Promos', 'Stories'];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % featuredVideos.length);
  const prev = () => setCurrent((prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length);

  // Scroll-based animations for videos
  const { scrollYProgress } = useScroll();
  
  const video1Y = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const video2Y = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const video3Y = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const video4Y = useTransform(scrollYProgress, [0, 1], [0, -20]);



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <FilmmakerHero />

      {/* Quick Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Film, number: '100+', label: 'Projects Completed' },
              { icon: Video, number: '1.5+', label: 'Years Experience' },
              { icon: Users, number: '20+', label: 'Active Clients' },
              { icon: Eye, number: '3M+', label: 'Views Generated' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Scroll Section */}
      <ClientsScroll />

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cinzel">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into some of my most impactful projects
            </p>
          </motion.div>

          {/* Video Grid Layout */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
              {/* Video 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: -80 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ y: video1Y }}
                className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center"
              >
                <video
                  src={featuredVideos[0].url}
                  className="w-full h-full object-cover"
                  controls
                  style={{ aspectRatio: '9/16' }}
                />
              </motion.div>

              {/* Video 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ y: video2Y }}
                className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center"
              >
                <video
                  src={featuredVideos[1].url}
                  className="w-full h-full object-cover"
                  controls
                  style={{ aspectRatio: '9/16' }}
                />
              </motion.div>

              {/* Video 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ y: video3Y }}
                className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center"
              >
                <video
                  src={featuredVideos[2].url}
                  className="w-full h-full object-cover"
                  controls
                  style={{ aspectRatio: '9/16' }}
                />
              </motion.div>

              {/* Video 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: -80 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ y: video4Y }}
                className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center"
              >
                <video
                  src={featuredVideos[3].url}
                  className="w-full h-full object-cover"
                  controls
                  style={{ aspectRatio: '9/16' }}
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;