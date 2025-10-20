import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface VideoItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category: string;
  duration: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: "Career-Driven Success",
    description: "WHEN YOU'RE A DRIVEN GUY CHASING HIS CAREER",
    videoUrl: "/videos/career-video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    category: "Motivation",
    duration: "2:34"
  },
  {
    id: 2,
    title: "Business Partnership",
    description: "SOMEONE SOMEBODY",
    videoUrl: "/videos/business-video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    category: "Business",
    duration: "1:45"
  },
  {
    id: 3,
    title: "Video Editing Mastery",
    description: "FINAL",
    videoUrl: "/videos/editing-video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
    category: "Production",
    duration: "3:12"
  },
  {
    id: 4,
    title: "The Heaven",
    description: "HEAVEN HELL",
    videoUrl: "/videos/heaven-video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=600&fit=crop&crop=face",
    category: "Conceptual",
    duration: "1:58"
  }
];

const VideoShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-purple-300 mb-4">
            Shareable videos accelerate brand recognition globally
          </h2>
          <p className="text-xl text-purple-200/80">
            Join the movement and be part of the buzz!
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          ref={containerRef}
          style={{ y, opacity }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {videoItems.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setActiveVideo(video.id)}
              onHoverEnd={() => setActiveVideo(null)}
              className="relative group cursor-pointer"
            >
              {/* Video Container */}
              <div className={cn(
                "relative aspect-[9/16] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm",
                "border border-purple-500/30 shadow-2xl",
                "transform transition-all duration-500 ease-out",
                isHovering && "scale-105",
                activeVideo === video.id && "scale-110 z-10"
              )}>
                {/* Thumbnail/Video */}
                <div className="absolute inset-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.7 }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
                    >
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                    </motion.div>
                  </div>

                  {/* Top Label */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      Demos
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {video.description}
                    </h3>
                    <p className="text-purple-200/80 text-sm">
                      {video.category}
                    </p>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 pointer-events-none"
                />
              </div>

              {/* Mouse Follow Effect */}
              {isHovering && activeVideo === video.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1), transparent 40%)`
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-purple-300/60">
            <div className="w-6 h-10 border-2 border-purple-300/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-purple-300/60 rounded-full mt-2"
              />
            </div>
            <span className="text-sm">Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase; 