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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold cinzel">
                Three Ways to Energize Your Social Media Presence
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                step: '01', 
                icon: Video,
                title: 'Share the raw videos', 
                description: 'Our skilled writers will extract the finest moments, ensuring your content shines brightly.',
                avatar: '👨🏾'
              },
              { 
                step: '02', 
                icon: Sparkles,
                title: 'Create a unique edit style', 
                description: 'Let our team of animators and video artists bring your brand to life with a bespoke style that captures its essence and captivates your audience.',
                avatar: '👩🏽'
              },
              { 
                step: '03', 
                icon: TrendingUp,
                title: 'Grow Through Packaging', 
                description: 'Our skilled managers and copywriters craft captivating hooks designed to halt scrolling and leave viewers mesmerized, ensuring your content commands attention.',
                avatar: '👨🏼'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 text-gray-800 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-black"
                style={{ minHeight: '450px' }}
              >
                {/* Step Number and Icon */}
                <div className="flex items-center mb-8 relative z-10">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-md">
                    <process.icon className="w-6 h-6 text-gray-800" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6 text-gray-800 relative z-10">{process.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-8 relative z-10">{process.description}</p>

                {/* Avatar at bottom */}
                <div className="absolute bottom-4 right-4 w-20 h-20 flex items-end justify-end relative z-10">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full p-2 shadow-lg">
                    <span className="text-4xl">{process.avatar}</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full opacity-50"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-gray-300 rounded-full opacity-30"></div>
              </motion.div>
            ))}
          </div>

          {/* Update Notice */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-500 font-semibold">Services will be updated soon.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingBasic />
    </div>
  );
};

export default ServicesPage;