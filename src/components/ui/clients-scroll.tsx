import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Client {
  id: number;
  name: string;
  image: string;
  followers: string;
  borderColor: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    followers: "546K",
    borderColor: "border-white"
  },
  {
    id: 2,
    name: "Mike Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    followers: "18.4K",
    borderColor: "border-blue-400"
  },
  {
    id: 3,
    name: "David Wilson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    followers: "119K",
    borderColor: "border-white"
  },
  {
    id: 4,
    name: "James Brown",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    followers: "5.7K",
    borderColor: "border-white"
  },
  {
    id: 5,
    name: "Ryan Davis",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    followers: "4.5K",
    borderColor: "border-white"
  },
  {
    id: 6,
    name: "Tom Anderson",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    followers: "89.2K",
    borderColor: "border-green-400"
  },
  {
    id: 7,
    name: "Chris Lee",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    followers: "23.1K",
    borderColor: "border-white"
  },
  {
    id: 8,
    name: "Mark Taylor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    followers: "67.8K",
    borderColor: "border-purple-400"
  }
];

const ClientsScroll: React.FC = () => {
  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex gap-8 animate-scroll">
                         {/* First set of clients */}
             {clients.map((client) => (
               <motion.div
                 key={client.id}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: client.id * 0.1 }}
                 className="flex-shrink-0 flex flex-col items-center"
               >
                 <div className={cn(
                   "w-40 h-40 rounded-full overflow-hidden border-2",
                   client.borderColor,
                   "shadow-lg hover:scale-105 transition-transform duration-300"
                 )}>
                   <img
                     src={client.image}
                     alt={client.name}
                     className="w-full h-full object-cover"
                   />
                 </div>
               </motion.div>
             ))}
            
                         {/* Duplicate set for seamless loop */}
             {clients.map((client) => (
               <motion.div
                 key={`duplicate-${client.id}`}
                 className="flex-shrink-0 flex flex-col items-center"
               >
                 <div className={cn(
                   "w-40 h-40 rounded-full overflow-hidden border-2",
                   client.borderColor,
                   "shadow-lg hover:scale-105 transition-transform duration-300"
                 )}>
                   <img
                     src={client.image}
                     alt={client.name}
                     className="w-full h-full object-cover"
                   />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsScroll; 