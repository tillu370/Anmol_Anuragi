import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, Smartphone, Palette, Volume2, Zap, Users, ArrowRight } from 'lucide-react';

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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 cinzel">My Process</h2>
            <p className="text-xl text-gray-600">
              A streamlined workflow that ensures quality and meets deadlines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your vision, requirements, and project goals' },
              { step: '02', title: 'Planning', description: 'Create timeline, style guide, and project roadmap' },
              { step: '03', title: 'Production', description: 'Execute the editing with regular progress updates' },
              { step: '04', title: 'Delivery', description: 'Final review, revisions, and project delivery' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Update Notice */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-500 font-semibold">Services will be updated soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;