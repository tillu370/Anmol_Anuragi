import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Calendar, User, Clock, Tag, ExternalLink } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  
  // Mock project data - in real app this would come from API/database
  const project = {
    id: 1,
    title: 'Nike Brand Campaign',
    client: 'Nike',
    duration: '2:30',
    date: 'March 2024',
    category: 'Commercial',
    role: ['Editor', 'Colorist', 'Motion Graphics'],
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    description: 'A high-energy commercial showcasing Nike\'s latest athletic wear collection. The project required dynamic editing, color grading to match brand guidelines, and custom motion graphics to enhance the storytelling.',
    challenge: 'The main challenge was creating a cohesive narrative from multiple shooting locations while maintaining the energetic pace that Nike is known for.',
    solution: 'We used rhythmic editing synchronized with the music, applied consistent color grading across all footage, and created custom transitions that emphasized movement and energy.',
    tags: ['ColorGrade', 'MotionGFX', 'Commercial', 'Sports'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="bg-custom-beige border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-custom-beige">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 cinzel">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{project.client}</p>
            
            {/* Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {project.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {project.duration}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {project.category}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Player */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Before/After Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold mb-4">Before / After Color Grading</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-medium">Before</span>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-custom-beige font-medium">After</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-custom-beige p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Role</span>
                    <div className="flex flex-wrap gap-2">
                      {project.role.map((role) => (
                        <span key={role} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Tools Used</span>
                    <div className="space-y-2">
                      {project.tools.map((tool) => (
                        <div key={tool} className="flex items-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3" />
                          <span className="text-gray-700">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-custom-beige p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold mb-4">Interested in Similar Work?</h3>
                <p className="text-gray-600 mb-4">
                  Let's discuss how we can bring your vision to life with professional video editing.
                </p>
                <Link
                  to="/contact"
                  className="w-full bg-gray-800 text-custom-beige py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  Start a Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">More Projects</h2>
            <p className="text-gray-600">Explore other work in this category</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer hover-lift"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-custom-beige" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Related Project {item}</h3>
                <p className="text-gray-600">Client Name</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;