import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Film, Video, Camera, Scissors } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 cinzel"
          >
            Editing That Speaks
            <br />
            <span className="gradient-text bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Loud in Silence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Crafting cinematic stories that captivate audiences and leave lasting impressions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/portfolio"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center hover-lift"
            >
              <Play className="w-5 h-5 mr-2" />
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Text Elements */}
        {floatingTexts.map((text, index) => (
          <motion.div
            key={text}
            className="absolute text-white/10 text-6xl md:text-8xl font-bold cinzel pointer-events-none"
            style={{
              top: `${20 + index * 20}%`,
              left: `${10 + index * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {text}
          </motion.div>
        ))}
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Film, number: '500+', label: 'Projects Completed' },
              { icon: Video, number: '5+', label: 'Years Experience' },
              { icon: Camera, number: '50+', label: 'Happy Clients' },
              { icon: Scissors, number: '10K+', label: 'Hours Edited' },
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

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cinzel">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into some of my most impactful projects
            </p>
          </motion.div>

          {/* Swiper Coverflow Carousel */}
          <div className="w-full flex justify-center">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 768 ? 1 : 3}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Navigation]}
              className="max-w-xs md:max-w-2xl lg:max-w-4xl"
              style={{ paddingBottom: '40px' }}
            >
              {featuredVideos.map((video, idx) => (
                <SwiperSlide key={idx}>
                  <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center">
                    <video
                      src={video.url}
                      className="w-full h-full object-cover"
                      controls
                      style={{ aspectRatio: '9/16' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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