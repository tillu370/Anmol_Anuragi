import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Client {
  id: number;
  name: string;
  image: string;
  followers: string;
  borderColor: string;
  instagramUrl: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Client 1",
    image: "/client1.jpg",
    followers: "249",
    borderColor: "border-black",
    instagramUrl: "https://www.instagram.com/ashcarrim/"
  },
  {
    id: 2,
    name: "Client 2",
    image: "/client2.jpg",
    followers: "547K",
    borderColor: "border-black",
    instagramUrl: "https://www.instagram.com/tarini_shah/reels/"
  },
  {
    id: 3,
    name: "Client 3",
    image: "/client3.jpg",
    followers: "6,382",
    borderColor: "border-black",
    instagramUrl: "https://www.instagram.com/typee_studio/reels/"
  },
  {
    id: 4,
    name: "Client 4",
    image: "/client4.jpg",
    followers: "6,853",
    borderColor: "border-black",
    instagramUrl: "https://www.instagram.com/ambitio.club/"
  },
  {
    id: 5,
    name: "Client 5",
    image: "/client5.png",
    followers: "30.4K",
    borderColor: "border-black",
    instagramUrl: "https://www.instagram.com/coinwofficial?igsh=Z2RjYXB1c3ZvMW50"
  }
];

const ClientsScroll: React.FC = () => {
  return (
    <section className="py-20">
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
                <a
                  href={client.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
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
                </a>
                <div className="mt-3 text-center">
                  <p className="text-sm font-semibold text-gray-700">{client.followers} followers</p>
                </div>
               </motion.div>
             ))}
            
                         {/* Duplicate set for seamless loop */}
             {clients.map((client) => (
               <motion.div
                 key={`duplicate-${client.id}`}
                 className="flex-shrink-0 flex flex-col items-center"
               >
                <a
                  href={client.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
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
                </a>
                 <div className="mt-3 text-center">
                   <p className="text-sm font-semibold text-gray-700">{client.followers} followers</p>
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