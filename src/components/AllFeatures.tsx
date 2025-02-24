
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";

const features = [
  {
    title: "Create your virtual study & Workspaces",
    description: "Set up custom LoSpaces for deep work, study sessions, or team collaborations. Control settings like video presence, screen sharing, and time limits to build the perfect productivity zone.",
  },
  {
    title: "Join Communities & Work Together",
    description: "Set up custom LoSpaces for deep work, study sessions, or team collaborations. Control settings like video presence, screen sharing, and time limits to build the perfect productivity zone.",
  },
  {
    title: "Track Progress & Stay Motivated",
    description: "LoSpace helps you stay on track with real-time session stats, focus streaks, and productivity insights. Challenge yourself, unlock achievements, and keep up the momentum!",
  },
  {
    title: "Focus Without Distractions",
    description: "LoSpace is designed to enhance deep work. Use features like Focus Mode, which minimizes distractions by restricting notifications and enabling timed work sessions. Stay in the zone and maximize your productivity.",
  },
  {
    title: "Host & Manage Study Groups",
    description: "Easily invite friends or teammates to your virtual LoSpace. As a host, you can manage participant access, set session durations, and enforce rules like camera-on requirements to keep everyone engaged.",
  },
  {
    title: "Share & Organize Resources",
    description: "Implements end-to-end encryption for robust security.",
  },
  {
    title: "Stay Accountable with Live Presence",
    description: "Boost motivation with video presence and screen sharing—just like studying in a real library or co-working space. Seeing others work in real time helps you stay focused and committed to your tasks.",
  },
  {
    title: "Customize Your LoSpace Experience",
    description: "Every user works differently, so LoSpace lets you personalize your workspace. Adjust session time limits, access controls, themes, and productivity tools to create the perfect virtual environment.",
  },
];

const AllFeatures = () => {
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
    <section className="py-20 bg-[#1A1F2C] text-white">
      <div ref={featuresRef} className="container mx-auto px-4 reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore all our features
          </h2>
          <p className="text-xl text-gray-300">
            Not just AI— we also come with all standard note taking features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-400 inline-flex items-center gap-2 group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;
