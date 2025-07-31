import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Clock, number: '1.5+', label: 'Years Editing' },
    { icon: Users, number: '100+', label: 'Total Projects' },
    { icon: Award, number: '10K+', label: 'Hours Cut' },
    { icon: Zap, number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-custom-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl overflow-hidden relative flex items-center justify-center">
                <img
                  src="/anmol-hero.jpg"
                  alt="Anmol Hero"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-custom-beige">
                  <div className="text-sm opacity-75">Professional Editor</div>
                  <div className="text-lg font-semibold">Behind the Scenes</div>
                </div>
              </div>
              
              {/* Timeline Animation */}
              <motion.div
                className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-2 h-32 bg-gray-300 rounded-full relative">
                  <motion.div
                    className="absolute top-0 left-0 w-2 bg-gradient-to-b from-gray-800 to-gray-600 rounded-full"
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <div className="absolute -right-2 top-0 w-6 h-6 bg-gray-800 rounded-full" />
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-600 rounded-full" />
                  <div className="absolute -right-2 bottom-0 w-6 h-6 bg-gray-400 rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 cinzel">
                  Crafting Stories,
                  <br />
                  <span className="gradient-text">Frame by Frame</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 5 years of experience in video editing, I transform raw footage into compelling narratives that resonate with audiences and drive results.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  My journey began with a passion for storytelling and an eye for detail. I specialize in creating cinematic experiences that bridge the gap between creativity and commercial success.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From high-end commercials to viral social media content, I bring a unique perspective that combines technical expertise with artistic vision.
                </p>
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="border-l-4 border-gray-300 pl-6 py-4 bg-gray-50 rounded-r-lg"
              >
                <p className="text-lg italic text-gray-700 mb-2">
                  "Every edit is an opportunity to tell a story that hasn't been told before. 
                  I don't just cut footage – I craft experiences."
                </p>
                <cite className="text-sm font-semibold text-gray-600">— My Creative Philosophy</cite>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 cinzel">By the Numbers</h2>
            <p className="text-xl text-gray-600">
              Metrics that matter in the world of video editing
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <stat.icon className="w-10 h-10 text-gray-600" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 cinzel">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">
              Tools and techniques that bring visions to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Editing Software',
                skills: ['Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'Adobe After Effects']
              },
              {
                category: 'Specializations',
                skills: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Visual Effects']
              },
              {
                category: 'Content Types',
                skills: ['Commercials', 'Music Videos', 'Social Media', 'Documentaries']
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover-lift"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800">{category.category}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;