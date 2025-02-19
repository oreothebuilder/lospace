
import { useEffect, useRef } from "react";
import Button from "./Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Access to online community",
      "Basic productivity tools",
      "Public virtual workspaces",
      "Limited physical space access",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for regular users",
    features: [
      "Everything in Basic",
      "Unlimited physical space access",
      "Private virtual workspaces",
      "Advanced productivity analytics",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Custom branding",
      "Dedicated support",
      "Team analytics dashboard",
      "API access",
    ],
  },
];

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 bg-secondary/50">
      <div ref={pricingRef} className="container mx-auto px-4 reveal">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include access to our
            growing community of focused individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl hover-scale transition-all duration-300 ${
                plan.popular
                  ? "bg-primary/10 border border-primary/20"
                  : "bg-background"
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-primary/20 text-primary rounded-full px-3 py-1 text-sm font-medium mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-foreground/60">{plan.period}</span>
                )}
              </div>
              <p className="text-foreground/80 mb-6">{plan.description}</p>
              <Button
                variant={plan.popular ? "primary" : "outline"}
                className="w-full mb-6"
              >
                Get Started
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
