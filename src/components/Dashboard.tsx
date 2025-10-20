import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Upload, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  User,
  FileText,
  DollarSign
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'uploads', label: 'Uploads', icon: Upload },
  ];

  const projects = [
    {
      id: 1,
      title: 'Nike Campaign Video',
      client: 'Nike',
      status: 'In Progress',
      progress: 75,
      deadline: '2024-04-15',
      lastUpdate: '2 hours ago'
    },
    {
      id: 2,
      title: 'Wedding Highlights',
      client: 'Sarah & John',
      status: 'Review',
      progress: 100,
      deadline: '2024-04-10',
      lastUpdate: '1 day ago'
    },
    {
      id: 3,
      title: 'Product Launch',
      client: 'TechCorp',
      status: 'Completed',
      progress: 100,
      deadline: '2024-04-05',
      lastUpdate: '3 days ago'
    }
  ];

  const messages = [
    {
      id: 1,
      client: 'Nike',
      message: 'Could we make the logo more prominent in the final shot?',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      client: 'Sarah & John',
      message: 'We love the rough cut! Just a few minor adjustments needed.',
      time: '1 day ago',
      unread: true
    },
    {
      id: 3,
      client: 'TechCorp',
      message: 'Final payment has been processed. Thank you!',
      time: '3 days ago',
      unread: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Progress': return <Clock className="w-4 h-4" />;
      case 'Review': return <AlertCircle className="w-4 h-4" />;
      case 'Completed': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-custom-beige border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-4xl font-bold cinzel">Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage projects and client communications</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Welcome back,</div>
                <div className="font-semibold">Admin</div>
              </div>
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Active Projects', value: '8', icon: FileText, color: 'bg-blue-500' },
              { label: 'Pending Reviews', value: '3', icon: AlertCircle, color: 'bg-yellow-500' },
              { label: 'Completed This Month', value: '12', icon: CheckCircle, color: 'bg-green-500' },
              { label: 'Revenue This Month', value: '$24K', icon: DollarSign, color: 'bg-purple-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-custom-beige rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-custom-beige" />
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 bg-custom-beige rounded-lg p-1 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gray-800 text-custom-beige'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Projects */}
                <div className="lg:col-span-2">
                  <div className="bg-custom-beige rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-6">Recent Projects</h3>
                    <div className="space-y-4">
                      {projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{project.title}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(project.status)}`}>
                                {getStatusIcon(project.status)}
                                <span>{project.status}</span>
                              </span>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">{project.client}</div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Messages */}
                <div>
                  <div className="bg-custom-beige rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-6">Recent Messages</h3>
                    <div className="space-y-4">
                      {messages.slice(0, 3).map((message) => (
                        <div key={message.id} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium">{message.client}</div>
                            {message.unread && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{message.message}</p>
                          <div className="text-xs text-gray-500">{message.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="bg-custom-beige rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold">All Projects</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
                      </tr>
                    </thead>
                    <tbody className="bg-custom-beige divide-y divide-gray-200">
                      {projects.map((project) => (
                        <tr key={project.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{project.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">{project.client}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 w-fit ${getStatusColor(project.status)}`}>
                              {getStatusIcon(project.status)}
                              <span>{project.status}</span>
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 mt-1">{project.progress}%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">{project.deadline}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">{project.lastUpdate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-custom-beige rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold">Client Messages</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {messages.map((message) => (
                    <div key={message.id} className="p-6 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="font-medium">{message.client}</div>
                            {message.unread && (
                              <span className="bg-blue-600 text-custom-beige px-2 py-1 rounded-full text-xs">New</span>
                            )}
                          </div>
                          <p className="text-gray-700 mb-2">{message.message}</p>
                          <div className="text-sm text-gray-500">{message.time}</div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'uploads' && (
              <div className="bg-custom-beige rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold">File Upload Portal</h3>
                </div>
                <div className="p-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Upload Project Files</h4>
                    <p className="text-gray-600 mb-4">Drag and drop files here or click to browse</p>
                    <button className="bg-gray-800 text-custom-beige px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      Choose Files
                    </button>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-4">Recent Uploads</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'project_footage_v2.mp4', size: '2.4 GB', uploaded: '2 hours ago' },
                        { name: 'client_feedback.pdf', size: '1.2 MB', uploaded: '1 day ago' },
                        { name: 'reference_images.zip', size: '45 MB', uploaded: '2 days ago' },
                      ].map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-sm text-gray-600">{file.size} • {file.uploaded}</div>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 text-sm">
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;