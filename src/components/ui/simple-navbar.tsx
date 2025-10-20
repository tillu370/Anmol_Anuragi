import React from 'react';
import { Home, User, Briefcase, FileText, MessageCircle, Settings } from 'lucide-react';

const SimpleNavbar: React.FC = () => {
  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Portfolio', icon: Briefcase },
    { name: 'Services', icon: FileText },
    { name: 'Contact', icon: MessageCircle },
    { name: 'Dashboard', icon: Settings }
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6">
      <div className="flex items-center gap-3 bg-white border border-gray-200 py-2 px-2 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className="relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleNavbar; 