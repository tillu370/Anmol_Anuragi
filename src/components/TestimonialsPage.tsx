import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Quote } from 'lucide-react';

const testimonials = [
  {
    video: '/clientvideo1.mp4',
    quote:
      "From the very first video I sent, they understood my vision. They didn't just trim clips or add transitions – they elevated the entire feel of the video. The pacing, the color grading, the music choice, the way everything was synced together – it felt polished and cinematic. It looked like something that would belong on a professional platform, not just YouTube or Instagram",
    clientName: "ashcarrim",
    clientImage: "/client1.jpg"
  },
  {
    video: '/clientvideo2.mp4',
    quote:
      "What impressed us most was their meticulous attention to detail — from the pacing of scenes and choice of background music to the precision of cuts, on-brand graphic overlays, and subtle sound enhancements — every element felt thoughtfully curated to reflect our brand voice and marketing goals.",
    clientName: "tarini_shah",
    clientImage: "/client2.jpg"
  },
  {
    video: '/clientvideo4.mp4',
    quote:
      "Typestudio's video editing expertise has been game-changing for our content strategy. Their ability to transform raw footage into compelling stories while maintaining our brand identity is remarkable. The quality and creativity they bring to every project is outstanding.",
    clientName: "coinwofficial",
    clientImage: "/client5.png"
  },
  {
    video: '/clientvideo3.mp4',
    quote:
      "Before I started working with them, I was doing all my edits myself. And honestly? It was draining. I was spending hours on editing when I should've been focusing on shooting, scripting, or engaging with my audience. I needed help — but not just any help. I needed someone who understood content creation. Someone who knew what hooks, jump cuts, B-roll, and pacing meant in the context of growing a YouTube channel",
    clientName: "ambitio.club",
    clientImage: "/client4.jpg"
  },
];

function TestimonialCard({ videoSrc, quote, clientName, clientImage }: { videoSrc: string; quote: string; clientName: string; clientImage: string }) {
  const [muted, setMuted] = useState(true);
  return (
    <div className="bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden max-w-sm mx-auto">
      <div className="relative">
        <video
          src={videoSrc}
          className="w-full aspect-[9/16] object-cover rounded-t-3xl"
          muted={muted}
          controls
        />
        <button
          className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/70 text-white rounded-full px-5 py-2 text-sm font-semibold"
          onClick={() => setMuted((m) => !m)}
        >
          {muted ? (
            <>
              <VolumeX className="inline w-5 h-5 mr-1" /> Unmute
            </>
          ) : (
            <>
              <Volume2 className="inline w-5 h-5 mr-1" /> Mute
            </>
          )}
        </button>
        </div>
      <div className="p-8 flex-1 flex flex-col justify-between">
        <Quote className="w-8 h-8 text-gray-400 mb-3" />
        <p className="text-gray-700 text-lg leading-relaxed">{quote}</p>
        <div className="flex items-center mt-6">
          <img src={clientImage} alt={clientName} className="w-12 h-12 rounded-full object-cover mr-4" />
          <div>
            <p className="font-semibold text-gray-900">{clientName}</p>
          </div>
        </div>
          </div>
        </div>
  );
}

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 cinzel text-gray-800">Testimonials</h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Trusted By Clients, Proven By Stories
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} videoSrc={t.video} quote={t.quote} clientName={t.clientName} clientImage={t.clientImage} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;