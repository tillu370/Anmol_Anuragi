import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  videos: string;
  features: string[];
  targetAudience: string;
  isRecommended?: boolean;
  isCustom?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$1499",
    videos: "15 short videos",
    features: [
      "15 Videos Package Per Month",
      "World-class editor",
      "Personalized video branding",
      "Pause or cancel anytime",
      "24/7 Chat support",
      "Unlimited Revisions",
      "Monthly Growth Reports"
    ],
    targetAudience: "Best for coaches/online trainers"
  },
  {
    name: "Growth",
    price: "$1799",
    videos: "20 short videos",
    features: [
      "Everything you get in Basic Plus",
      "Expert animator",
      "15 inspirational and personal designed posts",
      "Automation setup"
    ],
    targetAudience: "Best for creators/brands serious about organic growth",
    isRecommended: true
  },
  {
    name: "Custom Plan",
    price: "",
    videos: "",
    features: [],
    targetAudience: "",
    isCustom: true
  }
];

export function PricingSimple() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan to accelerate your social media growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-gray-800 relative shadow-lg"
            >
                             {plan.isRecommended && (
                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 px-4 py-1 rounded-full flex items-center">
                   <Star className="w-4 h-4 text-white mr-1" />
                   <span className="text-sm font-semibold text-white">Recommended</span>
                 </div>
               )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {!plan.isCustom && (
                  <>
                    <div className="text-3xl font-bold mb-1">{plan.price}</div>
                                         <div className="text-sm text-gray-500 mb-6">({plan.videos})</div>
                  </>
                )}
              </div>

              {plan.isCustom ? (
                <div className="text-center">
                  <p className="text-lg mb-4">Need A Custom Plan?</p>
                                     <hr className="border-gray-300 mb-6" />
                   <button 
                     onClick={() => {
                       document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                     }}
                     className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                   >
                     Book A Call
                   </button>
                </div>
              ) : (
                <>
                                     <ul className="space-y-3 mb-8">
                     {plan.features.map((feature, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <Play className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                         <span className="text-sm text-gray-600">{feature}</span>
                       </li>
                     ))}
                   </ul>

                  <div className="text-center">
                                       <button 
                                         onClick={() => {
                                           document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                         }}
                                         className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4"
                                       >
                     Book A Call
                   </button>
                   <p className="text-xs text-amber-600">{plan.targetAudience}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 