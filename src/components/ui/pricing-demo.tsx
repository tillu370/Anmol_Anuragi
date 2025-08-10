"use client";

import { Pricing } from "./pricing";

const demoPlans = [
  {
    name: "Basic",
    price: "1499",
    yearlyPrice: "1199",
    period: "month",
    features: [
      "15 Videos Package/Month",
      "World - class editor",
      "Personalized video branding",
      "Pause or cancel anytime",
      "24/7 Chat support",
      "Unlimited Revisions",
      "Monthly Growth Reports"
    ],
    description: "Best for coaches/online trainers",
    buttonText: "Book A Call",
    href: "#contact",
    isPopular: false,
  },
  {
    name: "Growth",
    price: "1799",
    yearlyPrice: "1439",
    period: "month",
    features: [
      "Everything you get in Basic Plus",
      "Expert animator",
      "15 inspirational and personal designed posts",
      "Automation setup"
    ],
    description: "Best for creators/brands serious about organic growth",
    buttonText: "Book A Call",
    href: "#contact",
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
    href: "#contact",
    isPopular: false,
  },
];

function PricingBasic() {
  return (
    <div className="rounded-lg">
      <Pricing 
        plans={demoPlans}
        title="Subscribe today, and begin your growth journey tomorrow"
        description={`Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.`}
      />
    </div>
  );
}

export { PricingBasic }; 