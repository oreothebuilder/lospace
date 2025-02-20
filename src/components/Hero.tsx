
import { useEffect, useRef } from "react";
import Button from "./Button";
import { Building, ArrowRight } from "lucide-react";
import FloatingBubbles from "./FloatingBubbles";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.3)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm z-10" />
      <FloatingBubbles />
      <div
        ref={heroRef}
        className="container mx-auto px-4 pt-20 reveal z-30 text-center"
      >
        <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          Redefining Productivity Spaces
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Work. Study. Grow.
          <br />
          <span className="text-gradient">Together.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          LoSpace is a hybrid co-working space and digital community where focus meets collaboration.
          Whether you need a quiet physical study room or a virtual workspace, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="group"
            onClick={() => window.location.href = "#pricing"}
          >
            Join the Community
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.location.href = "#locations"}
          >
            <Building className="mr-2 h-5 w-5" />
            Find a LoSpace Near You
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
