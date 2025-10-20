import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, Smartphone, Palette, Volume2, Zap, Users, ArrowRight, Video, Sparkles, TrendingUp } from 'lucide-react';
import { PricingBasic } from './ui/pricing-demo';


const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Film,
      title: 'Cinematic Wedding Films',
      description: 'Transform your special day into a cinematic masterpiece with professional editing, color grading, and storytelling.',
      features: ['Professional Color Grading', 'Cinematic Transitions', 'Audio Enhancement', 'Multiple Delivery Formats'],
      price: 'From $2,500'
    },
    {
      icon: Smartphone,
      title: 'IG Reels & Shorts',
      description: 'Create viral-worthy content for social media platforms with fast-paced editing and trending techniques.',
      features: ['Trend Analysis', 'Quick Turnaround', 'Platform Optimization', 'Engagement Focused'],
      price: 'From $150/reel'
    },
    {
      icon: Zap,
      title: 'Creative Direction',
      description: 'Complete creative oversight from concept to final delivery, ensuring your vision comes to life perfectly.',
      features: ['Concept Development', 'Style Guide Creation', 'Team Coordination', 'Quality Assurance'],
      price: 'From $3,000'
    },
    {
      icon: Palette,
      title: 'Color Grading',
      description: 'Professional color correction and grading to enhance mood, atmosphere, and visual consistency.',
      features: ['Cinema-grade Color', 'Mood Enhancement', 'Brand Consistency', 'HDR Delivery'],
      price: 'From $500'
    },
    {
      icon: Volume2,
      title: 'Sound Design',
      description: 'Complete audio post-production including sound effects, music editing, and audio enhancement.',
      features: ['Sound Effects Library', 'Music Licensing', 'Voice Enhancement', 'Spatial Audio'],
      price: 'From $400'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work with your existing team or let me coordinate with other professionals for complex projects.',
      features: ['Project Management', 'Multi-editor Workflow', 'Asset Organization', 'Deadline Management'],
      price: 'Custom Quote'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* My Process Section Only */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold cinzel px-4">
                Streamlined Steps To Skyrocket Your Brand!
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto overflow-visible">
            {[
              { 
                step: '01', 
                icon: Video,
                title: 'Share the raw videos', 
                description: 'Our skilled writers will extract the finest moments, ensuring your content shines brightly.',
                avatar: '/avatar1.webp'
              },
              { 
                step: '02', 
                icon: Sparkles,
                title: 'Create a unique edit style', 
                description: 'Let our team of animators and video artists bring your brand to life with a bespoke style that captures its essence and captivates your audience.',
                avatar: '/avatar2.webp'
              },
              { 
                step: '03', 
                icon: TrendingUp,
                title: 'Grow Through Packaging', 
                description: 'Our skilled managers and copywriters craft captivating hooks designed to halt scrolling and leave viewers mesmerized, ensuring your content commands attention.',
                avatar: '/avatar3.webp'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 text-gray-800 relative overflow-visible shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-black"
                style={{ minHeight: '350px' }}
              >
                {/* Step Number and Icon */}
                <div className="flex items-center mb-4 md:mb-6 lg:mb-8 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center mr-3 md:mr-4 lg:mr-6 shadow-lg">
                    <span className="text-base md:text-lg lg:text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gray-100 rounded-md md:rounded-lg lg:rounded-xl flex items-center justify-center shadow-md">
                    <process.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-800" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 lg:mb-6 text-gray-800 relative z-10">{process.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 lg:mb-8 relative z-10">{process.description}</p>

                {/* Avatar at bottom */}
                <div className="absolute bottom-0 right-0">
                  <img 
                    src={process.avatar} 
                    alt="Avatar" 
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-cover" 
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full opacity-50"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-gray-300 rounded-full opacity-30"></div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Pricing Section */}
      <PricingBasic />
    </div>
  );
};

export default ServicesPage;