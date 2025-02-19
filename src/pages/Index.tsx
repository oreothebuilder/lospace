
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProblemSolution from "@/components/ProblemSolution";
import Pricing from "@/components/Pricing";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
    testimonial: "LoSpace transformed how I work. The community keeps me accountable and motivated every day.",
  },
  {
    name: "James Rodriguez",
    role: "CS Student",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100&h=100",
    testimonial: "The perfect blend of physical and virtual spaces. I love the focus rooms for deep work sessions.",
  },
  {
    name: "Emily Park",
    role: "Remote Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    testimonial: "Finding my tribe of focused individuals has made all the difference in my productivity.",
  },
];

const Index = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    [testimonialsRef, ctaRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <ProblemSolution />
      <Features />
      <section id="testimonials" className="py-20">
        <div ref={testimonialsRef} className="container mx-auto px-4 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our <span className="text-gradient">Community</span> Says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <Pricing />
      <section className="py-20 bg-primary/5">
        <div ref={ctaRef} className="container mx-auto px-4 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Level Up Your Productivity?
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of focused individuals who have found their perfect work environment with LoSpace.
          </p>
          <Button size="lg" className="group">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
