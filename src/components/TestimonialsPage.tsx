import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Quote } from 'lucide-react';

const testimonials = [
  {
    video: '/clientvideo1.mp4',
    quote:
      "From the very first video I sent, they understood my vision. They didn't just trim clips or add transitions – they elevated the entire feel of the video. The pacing, the color grading, the music choice, the way everything was synced together – it felt polished and cinematic. It looked like something that would belong on a professional platform, not just YouTube or Instagram",
  },
  {
    video: '/clientvideo2.mp4',
    quote:
      "What impressed us most was their meticulous attention to detail — from the pacing of scenes and choice of background music to the precision of cuts, on-brand graphic overlays, and subtle sound enhancements — every element felt thoughtfully curated to reflect our brand voice and marketing goals.",
  },
  {
    video: '/clientvideo3.mp4',
    quote:
      "Before I started working with them, I was doing all my edits myself. And honestly? It was draining. I was spending hours on editing when I should've been focusing on shooting, scripting, or engaging with my audience. I needed help — but not just any help. I needed someone who understood content creation. Someone who knew what hooks, jump cuts, B-roll, and pacing meant in the context of growing a YouTube channel",
  },
  {
    video: '/clientvideo4.mp4',
    quote:
      "Ediore's video editing expertise has been game-changing for our content strategy. Their ability to transform raw footage into compelling stories while maintaining our brand identity is remarkable. The quality and creativity they bring to every project is outstanding.",
  },
];

function TestimonialCard({ videoSrc, quote }: { videoSrc: string; quote: string }) {
  const [muted, setMuted] = useState(true);
  return (
    <div className="bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden max-w-xs mx-auto">
      <div className="relative">
        <video
          src={videoSrc}
          className="w-full aspect-[9/16] object-cover rounded-t-3xl"
          muted={muted}
          controls
        />
        <button
          className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/70 text-white rounded-full px-4 py-1 text-xs font-semibold"
          onClick={() => setMuted((m) => !m)}
        >
          {muted ? (
            <>
              <VolumeX className="inline w-4 h-4 mr-1" /> Unmute
            </>
          ) : (
            <>
              <Volume2 className="inline w-4 h-4 mr-1" /> Mute
            </>
          )}
        </button>
        </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <Quote className="w-6 h-6 text-gray-400 mb-2" />
        <p className="text-gray-700 text-base leading-relaxed">{quote}</p>
          </div>
        </div>
  );
}

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 cinzel text-gray-800">Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real clients about their experience and results
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} videoSrc={t.video} quote={t.quote} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;