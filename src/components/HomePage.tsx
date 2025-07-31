import React, { useState } from 'react';
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

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 border-t border-b">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 tracking-tight drop-shadow-lg">Frequently asked questions.</h2>
          <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">Navigate through our comprehensive FAQ section for swift solutions to common queries, ensuring a seamless experience and addressing your concerns with clarity and efficiency. Your satisfaction is our priority.</p>
          <div className="space-y-6 text-left">
            {/* FAQ Accordion */}
            {[{
              q: 'How does 7 days free trial works?',
              a: 'You get full access to all features for 7 days. Cancel anytime within the trial period to avoid charges.'
            }, {
              q: 'Are my Edit style unique to my account only?',
              a: 'Yes, your edit styles are personalized and exclusive to your account for your creative needs.'
            }, {
              q: 'What happen if I cancel the plan.',
              a: 'You will retain access until the end of your billing cycle. After that, premium features will be disabled.'
            }, {
              q: 'Can you guarantee results?',
              a: 'While we strive for the best, results depend on various factors. We are committed to your satisfaction and support.'
            }].map((item, idx) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {/* Logo as text */}
            <span className="font-extrabold text-2xl tracking-tight">Ediore</span>
            <span className="ml-4 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </span>
          </div>
          <div className="text-gray-600 text-sm flex flex-col md:flex-row items-center gap-2">
            <span>Say Hi at <a href="mailto:anmoltypebusiness@gmail.com" className="underline hover:text-black">anmoltypebusiness@gmail.com</a></span>
            <span className="hidden md:inline-block mx-2">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="hidden md:inline-block mx-2">|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
          <div className="text-gray-400 text-xs text-center md:text-right">Designed & Developed by - Grafixcart</div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;