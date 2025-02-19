
import { useEffect, useRef } from "react";
import { Building, Users, Laptop, Target } from "lucide-react";

const features = [
  {
    title: "Physical LoSpace Hubs",
    description: "Find a co-working space near you equipped with high-speed WiFi, ergonomic seating, and a distraction-free environment.",
    icon: Building,
  },
  {
    title: "Virtual Workspaces",
    description: "Join live virtual workspaces with video presence, screen sharing, and community challenges.",
    icon: Users,
  },
  {
    title: "Online Communities",
    description: "Connect with people studying the same subjects or working on similar projects.",
    icon: Laptop,
  },
  {
    title: "Focus Tools",
    description: "Stay productive with our Pomodoro timer, accountability matching, and goal tracking.",
    icon: Target,
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20">
      <div ref={featuresRef} className="container mx-auto px-4 reveal">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">LoSpace</span> Works
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Discover our comprehensive suite of features designed to enhance your productivity
            and create meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background hover-scale shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
