"use client";

import { Pricing } from "./pricing";

const demoPlans = [
  {
    name: "Basic",
    price: "1499",
    yearlyPrice: "1199",
    period: "per month",
    features: [
      "World - class editor",
      "Personalized video branding",
      "Pause or cancel anytime",
      "24/7 Chat support",
      "Dedicated social media manager",
      "Unlimited Revisions",
      "Monthly Growth Reports"
    ],
    description: "Best for coaches/online trainers",
    buttonText: "Book A Call",
    href: "/contact",
    isPopular: false,
  },
  {
    name: "Growth",
    price: "1799",
    yearlyPrice: "1439",
    period: "per month",
    features: [
      "Everything you get in Basic Plus",
      "Expert animator",
      "Organic lead generation",
      "Automation setup"
    ],
    description: "Best for creators/brands serious about organic growth",
    buttonText: "Book A Call",
    href: "/contact",
    isPopular: true,
  },
  {
    name: "Custom Plan",
    price: "",
    yearlyPrice: "",
    period: "",
    features: [],
    description: "Need A Custom Plan?",
    buttonText: "Book A Call",
    href: "/contact",
    isPopular: false,
  },
];

function PricingBasic() {
  return (
    <div className="h-[800px] overflow-y-auto rounded-lg">
      <Pricing 
        plans={demoPlans}
        title="Simple, Transparent Pricing"
        description={`Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.`}
      />
    </div>
  );
}

export { PricingBasic }; 