import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Quote } from 'lucide-react';

const testimonials = [
  {
    video: '/videos/testimonial1.mp4',
    quote:
      "We’ve been working with ediore, and their video editing services have consistently exceeded our expectations. The team is incredibly talented, responsive, and always delivers top-notch results on time. Highly recommend them for any video editing needs!",
  },
  {
    video: '/videos/testimonial2.mp4',
    quote:
      "Ediore transformed our raw footage into a polished, engaging video that truly captured the essence of our brand. Their creativity, attention to detail, and professionalism made the entire process seamless. The final product was top quality and incredibly engaging. We’re thrilled with the result and we decided to continue working with them.",
  },
  {
    video: '/videos/testimonial3.mp4',
    quote:
      "The team at ediore craft a fresh edit style with a high quality visuals story telling and this way perfectly work on my account. They were receptive to feedback and made revisions promptly. Their dedication to delivering top quality, super engaging videos is evident in every frame. Fantastic experience!",
  },
];

function TestimonialCard({ videoSrc, quote }: { videoSrc: string; quote: string }) {
  const [muted, setMuted] = useState(true);
  return (
    <div className="bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden max-w-xs mx-auto">
      <div className="relative">
        <video
          src={videoSrc}
          className="w-full h-80 object-cover rounded-t-3xl"
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