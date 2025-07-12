import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      thumbnail: 'testimonial-1',
      duration: '2:15',
      quote: 'The quality and professionalism exceeded all our expectations.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Creative Director',
      company: 'Design Studio',
      thumbnail: 'testimonial-2',
      duration: '1:45',
      quote: 'Transformed our entire content strategy with amazing results.'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Brand Manager',
      company: 'Fashion House',
      thumbnail: 'testimonial-3',
      duration: '2:30',
      quote: 'The attention to detail and creative vision is remarkable.'
    }
  ];

  const textTestimonials = [
    {
      name: 'David Park',
      role: 'CEO',
      company: 'Startup Inc',
      content: 'Working with this editor was a game-changer for our brand. The cinematic quality brought to our corporate videos has significantly elevated our professional image and helped us secure major clients.',
      rating: 5,
      project: 'Corporate Brand Video'
    },
    {
      name: 'Lisa Thompson',
      role: 'Influencer',
      company: '@lifestyle_lisa',
      content: 'My engagement rates have tripled since working together! The editing style perfectly captures my brand aesthetic and the quick turnaround allows me to stay relevant with trending content.',
      rating: 5,
      project: 'Instagram Reels Series'
    },
    {
      name: 'James Wilson',
      role: 'Marketing Manager',
      company: 'E-commerce Brand',
      content: 'The product videos created for our launch campaign generated 150% more conversions than previous campaigns. The professional editing and color grading made our products look premium.',
      rating: 5,
      project: 'Product Launch Campaign'
    },
    {
      name: 'Anna Martinez',
      role: 'Event Coordinator',
      company: 'Wedding Planner',
      content: 'Our clients are consistently blown away by the wedding films. The storytelling approach and emotional editing creates keepsakes that couples treasure forever. Absolutely worth every penny.',
      rating: 5,
      project: 'Wedding Cinematography'
    },
    {
      name: 'Robert Kim',
      role: 'Music Producer',
      company: 'Independent Label',
      content: 'The music video editing perfectly complemented our artist\'s vision. The creative transitions and color grading helped the video go viral on social media platforms.',
      rating: 5,
      project: 'Music Video Production'
    },
    {
      name: 'Sophia Lee',
      role: 'Creative Director',
      company: 'Advertising Agency',
      content: 'Consistently delivers broadcast-quality work on tight deadlines. The technical expertise and creative insight have made them our go-to editor for high-profile client campaigns.',
      rating: 5,
      project: 'Commercial Campaign'
    }
  ];

  const comparisonItems = [
    {
      client: 'TechCorp',
      delivered: 'Increased brand awareness by 200%',
      said: 'Professional quality that exceeds expectations'
    },
    {
      client: 'Fashion House',
      delivered: '3M+ views on social campaigns',
      said: 'Creative vision brought our brand to life'
    },
    {
      client: 'Music Label',
      delivered: 'Viral music video with 5M+ views',
      said: 'Perfect understanding of our artistic vision'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 cinzel">Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real clients about their experience and results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      {/* Removed video testimonial section as per request */}

      {/* Text Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 cinzel">Client Reviews</h2>
            <p className="text-xl text-gray-600">
              Detailed feedback from projects across different industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover-lift"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-6 h-6 text-gray-300 mb-4" />
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Project Type */}
                <div className="bg-gray-50 px-3 py-1 rounded-full text-sm text-gray-600 mb-4 inline-block">
                  {testimonial.project}
                </div>

                {/* Client Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Say vs What I Delivered */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 cinzel">Results That Speak</h2>
            <p className="text-xl text-gray-600">
              What clients say vs. what we delivered
            </p>
          </motion.div>

          <div className="space-y-8">
            {comparisonItems.map((item, index) => (
              <motion.div
                key={item.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="grid md:grid-cols-3">
                  {/* Client */}
                  <div className="bg-gray-50 p-8 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-gray-800">{item.client}</h3>
                  </div>

                  {/* What I Delivered */}
                  <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      What I Delivered
                    </h4>
                    <p className="text-lg text-gray-800">{item.delivered}</p>
                  </div>

                  {/* What Client Said */}
                  <div className="p-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      What Client Said
                    </h4>
                    <p className="text-lg text-gray-800 italic">"{item.said}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the ranks of satisfied clients who've transformed their content strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors hover-lift">
                Start Your Project
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;