import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Upload, Send, Clock, DollarSign } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budgetRange: '',
    deadline: '',
    meetingDate: '', // new for calendar
    timeZone: '',    // new for time zone
    message: '',
    files: null as FileList | null
  });

  const projectTypes = [
    'Commercial/Advertisement',
    'Music Video',
    'Wedding/Event',
    'Corporate Video',
    'Social Media Content',
    'Documentary',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+'
  ];

  const timeZones = [
    'UTC',
    'America/New_York',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Kolkata',
    'Asia/Tokyo',
    'Australia/Sydney',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      files: e.target.files
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-custom-beige">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 cinzel">Let's Create Together</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 cinzel">Project Inquiry</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="anmoltypebusiness@gmail.com"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Project *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget & Deadline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Deadline
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project, goals, style preferences, and any specific requirements..."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-2">
                    Reference Files (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      id="files"
                      name="files"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".jpg,.jpeg,.png,.pdf,.mp4,.mov,.avi"
                    />
                    <label htmlFor="files" className="cursor-pointer">
                      <span className="text-gray-600">Drop files here or click to upload</span>
                      <br />
                      <span className="text-sm text-gray-400">PNG, JPG, PDF, MP4 up to 10MB each</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gray-800 text-custom-beige py-4 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Project Inquiry
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Additional Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">anmoltypebusiness@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">+91 8368399098</span>
                  </div>
                </div>
              </div>

              {/* Calendly Widget */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 text-center">Book a Call Instantly</h3>
                <div className="calendly-inline-widget w-full" data-url="https://calendly.com/anmoltypebusiness/30min" style={{ minWidth: '100%', height: 700 }}></div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Quick Chat?</h3>
                <p className="text-green-700 mb-4">
                  For quick questions or urgent projects, message me directly on WhatsApp
                </p>
                <button 
                  onClick={() => {
                    const phoneNumber = '+918368399098';
                    const message = 'Hi! I would like to discuss a video project with you.';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-green-600 text-custom-beige px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Message on WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 cinzel">Frequently Asked Questions</h2>
            <p className="text-2xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                q: 'What is your typical turnaround time?',
                a: 'Turnaround time varies by project complexity. Simple edits: 3-5 days, complex projects: 2-3 weeks. Rush jobs available for additional fee.'
              },
              {
                q: 'Do you work with clients remotely?',
                a: 'Yes! I work with clients worldwide. All communication and file transfers are handled digitally through secure platforms.'
              },
              {
                q: 'What formats do you deliver in?',
                a: 'I deliver in any format you need: MP4, MOV, ProRes, and more. Multiple versions optimized for different platforms included.'
              },
              {
                q: 'How many revisions are included?',
                a: 'All packages include 3 rounds of revisions. Additional revisions available at $150/hour for minor changes.'
              },
              {
                q: 'Do you provide raw footage backup?',
                a: 'Yes, all project files and raw footage are backed up and stored for 6 months after project completion.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-custom-beige rounded-xl p-8 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{faq.q}</h3>
                <p className="text-lg text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;