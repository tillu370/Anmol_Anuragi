import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Film, Video, Users, Eye } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import FilmmakerHero from './ui/filmmaker-hero';
import ClientsScroll from './ui/clients-scroll';
import ServicesPage from './ServicesPage';
import TestimonialsPage from './TestimonialsPage';
import ContactPage from './ContactPage';
import CountUp from 'react-countup';

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
  const [isCountingStarted, setIsCountingStarted] = useState(false);
  const statsSectionRef = useRef<HTMLElement>(null);

  const next = () => setCurrent((prev) => (prev + 1) % featuredVideos.length);
  const prev = () => setCurrent((prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length);

  // Scroll-based animations for videos
  const { scrollYProgress } = useScroll();
  
  const video1Y = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const video2Y = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const video3Y = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const video4Y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Intersection Observer for counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCountingStarted(true);
        } else {
          setIsCountingStarted(false);
        }
      },
      { threshold: 0.5 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div id="hero">
      <FilmmakerHero />
      </div>

      {/* Fade Transition */}
      <div className="relative h-24 bg-gradient-to-b from-black via-black/95 via-black/85 via-black/70 via-black/50 via-black/30 via-black/15 to-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 via-black/60 via-black/40 via-black/20 via-black/5 to-transparent"></div>
      </div>

      {/* Quick Stats */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
                <stat.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 text-gray-600" />
                <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Scroll Section */}
      <ClientsScroll />

             {/* Statistics Section */}
       <section ref={statsSectionRef} className="py-12 md:py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-center mb-12 md:mb-16"
           >
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 cinzel text-black px-4">
               Unveiling Our Footprint
             </h2>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="bg-white rounded-xl md:rounded-2xl border-2 border-black p-6 md:p-8 lg:p-12"
           >
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               {/* Left Statistic */}
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="text-center"
               >
                 <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
                   {isCountingStarted ? (
                     <CountUp end={24018256} duration={2.5} separator="," />
                   ) : (
                     "0"
                   )}
                 </div>
                 <div className="text-base md:text-lg text-gray-700 mb-4">
                   Organic Views
                 </div>
                 <div className="flex justify-center">
                   <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                 </div>
               </motion.div>

               {/* Divider */}
               <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-black/20"></div>

               {/* Right Statistic */}
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="text-center"
               >
                 <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
                   {isCountingStarted ? (
                     <CountUp end={100000} duration={2.5} separator="," />
                   ) : (
                     "0"
                   )}+
                 </div>
                 <div className="text-base md:text-lg text-gray-700 mb-4">
                   Followers
                 </div>
               </motion.div>
             </div>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="text-center mt-8"
             >
               <p className="text-lg md:text-xl text-black font-medium">
                 and Counting
               </p>
             </motion.div>
           </motion.div>
         </div>
       </section>

       {/* Collaborate Section */}
       <section className="py-12 md:py-20 bg-gray-50">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="mb-8 md:mb-12"
           >
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 cinzel text-black px-4">
               COLLABORATE FOR GROWTH, CONNECT NOW.
             </h2>
           </motion.div>

                                    <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               <button 
                 onClick={() => {
                   document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 className="bg-black text-white px-6 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
               >
                 Schedule A Free 15 MIN Video Call Now
               </button>
             </motion.div>
         </div>
       </section>

      {/* Featured Work Preview */}
       <section className="py-12 md:py-20 mb-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
             className="text-center mb-12 md:mb-16"
          >
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 cinzel px-4">
              Featured Work
            </h2>
             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A glimpse into some of my most impactful projects
            </p>
          </motion.div>

          {/* Video Grid Layout */}
          <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-8 max-w-4xl">
              {/* Video 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                                       className="aspect-[9/16] bg-black rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center max-w-32 md:max-w-40 lg:max-w-48 transform rotate-3 md:rotate-6 lg:rotate-12 -mt-2 md:-mt-4 lg:-mt-8 border-2 md:border-4 border-black"
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
                   whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                                       className="aspect-[9/16] bg-black rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center max-w-32 md:max-w-40 lg:max-w-48 transform -rotate-3 md:-rotate-6 lg:-rotate-12 mt-2 md:mt-4 lg:mt-8 border-2 md:border-4 border-black"
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
                   whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                                       className="aspect-[9/16] bg-black rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center max-w-32 md:max-w-40 lg:max-w-48 transform rotate-3 md:rotate-6 lg:rotate-12 mt-2 md:mt-4 lg:mt-8 border-2 md:border-4 border-black"
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
                   whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                                       className="aspect-[9/16] bg-black rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center max-w-32 md:max-w-40 lg:max-w-48 transform -rotate-3 md:-rotate-6 lg:-rotate-12 -mt-2 md:-mt-4 lg:-mt-8 border-2 md:border-4 border-black"
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

      {/* Services Section */}
      <section id="services" className="mb-16">
        <ServicesPage />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mb-16">
        <TestimonialsPage />
      </section>



      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <ContactPage />
      </section>

             {/* Footer */}
       <footer className="bg-white border-t mt-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
           {/* Logo Section */}
           <div className="flex justify-start mb-4">
             <img 
               src="/logo.png" 
               alt="Logo" 
               className="h-12 md:h-16 object-contain drop-shadow-2xl shadow-black/50 bg-black p-2 rounded-lg"
             />
           </div>
           
           {/* Thin black dividing line - full width */}
           <div className="w-full h-px bg-black mb-6"></div>
           
           {/* Email and Social Icons Section */}
           <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
             {/* Email and Privacy Links */}
             <div className="text-gray-600 text-xs md:text-sm flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center">
               <span>Say Hi at <a href="mailto:anmoltypebusiness@gmail.com" className="underline hover:text-black">anmoltypebusiness@gmail.com</a></span>
               <span className="hidden md:inline-block mx-2">|</span>
               <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
               <span className="hidden md:inline-block mx-2">|</span>
               <a href="/terms-conditions" className="hover:underline">Terms & Conditions</a>
             </div>
             
             {/* Social Icons */}
             <div className="flex items-center gap-2 md:gap-3">
               <a href="https://www.instagram.com/anmol_type/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 text-black">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </a>
               <a href="https://www.youtube.com/@Anmol_type" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 text-black">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                 </svg>
               </a>
               <a href="https://www.linkedin.com/in/anmol-anuragi-video-editor-074821368/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 text-black">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                 </svg>
               </a>
             </div>
           </div>
         </div>
       </footer>
    </div>
  );
};

export default HomePage;