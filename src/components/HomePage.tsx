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

function FAQItem({ question, answer, defaultOpen = false }: { question: string, answer: string, defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-gray-900 focus:outline-none hover:bg-gray-50 transition"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="ml-2 text-blue-500"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
           {/* Center - Email and Privacy Links */}
           <div className="text-gray-600 text-xs md:text-sm flex flex-col md:flex-row items-center gap-1 md:gap-2 order-2 md:order-1 justify-center text-center">
             <span>Say Hi at <a href="mailto:anmoltypebusiness@gmail.com" className="underline hover:text-black">anmoltypebusiness@gmail.com</a></span>
             <span className="hidden md:inline-block mx-2">|</span>
             <a href="#" className="hover:underline">Privacy Policy</a>
             <span className="hidden md:inline-block mx-2">|</span>
             <a href="#" className="hover:underline">Terms of Use</a>
           </div>
           
           {/* Right - Logo and Social Icons */}
           <div className="flex items-center gap-2 md:gap-3 order-3">
             <span className="font-extrabold text-lg md:text-2xl tracking-tight">typestudio</span>
             <a href="https://www.instagram.com/anmol_type/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
               <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                 <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
               </svg>
             </a>
             <a href="https://www.youtube.com/@Anmol_type" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
               <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
                 <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.94A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.94 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                 <polygon points="9.75,15.02 15.5,11.75 9.75,8.48 9.75,15.02"></polygon>
               </svg>
             </a>
           </div>
         </div>
       </footer>
    </div>
  );
};

export default HomePage;