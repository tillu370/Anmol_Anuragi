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
    followers: "13K",
    borderColor: "border-black",
    instagramUrl: "https://www.instagram.com/anmol_type?igsh=NWJ4ZjNjbXR1ZW91"
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
            image: "/client5.jpg",
    followers: "30.4K",
    borderColor: "border-black",
    instagramUrl: "https://m.youtube.com/@CoinWOfficial/videos?fbclid=PAQ0xDSwL77LRleHRuA2FlbQIxMAABp3onqmuwdfNrI93Ftb9RjtA67JblyH8Y6_yyl3a1cOYF7oCQgOvt4C-5clvf_aem_xkiQnNlZhj_RQzDpNZwqzg#searching"
  }
];

const ClientsScroll: React.FC = () => {
  return (
    <section className="py-20">
      <div className="w-full">
        

        <div className="relative overflow-hidden">
          
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
                  className="cursor-pointer group"
               >
                 <div className={cn(
                   "w-40 h-40 rounded-full border-2 relative overflow-hidden",
                   client.borderColor,
                   "hover:shadow-lg transition-all duration-300"
                 )}>
                   <img
                     src={client.image}
                     alt={client.name}
                     className="w-full h-full object-cover rounded-full transition-all duration-300"
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-full"></div>
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
                  className="cursor-pointer group"
               >
                 <div className={cn(
                   "w-40 h-40 rounded-full border-2 relative overflow-hidden",
                   client.borderColor,
                   "hover:shadow-lg transition-all duration-300"
                 )}>
                   <img
                     src={client.image}
                     alt={client.name}
                     className="w-full h-full object-cover rounded-full transition-all duration-300"
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-full"></div>
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