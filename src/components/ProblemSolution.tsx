
import { useEffect, useRef } from "react";

const ProblemSolution = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-secondary/50">
      <div ref={sectionRef} className="container mx-auto px-4 reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why <span className="text-gradient">LoSpace</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 p-6 rounded-2xl bg-background/50 backdrop-blur shadow-xl">
            <div className="h-48 rounded-lg bg-red-100/10 flex items-center justify-center overflow-hidden">
              <img
                src="/lovable-uploads/fe2d78c8-af57-4832-ac1a-6c3482da6ea8.png"
                alt="Person feeling isolated"
                className="w-full h-full object-contain bg-black"
              />
            </div>
            <h3 className="text-xl font-semibold">The Problem</h3>
            <p className="text-foreground/80">
              Studying or working alone can feel isolating and unmotivating.
              Distractions are everywhere, and it's hard to stay consistent.
            </p>
          </div>

          <div className="space-y-6 p-6 rounded-2xl bg-primary/5 backdrop-blur shadow-xl">
            <div className="h-48 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="People working together"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">The Solution</h3>
            <p className="text-foreground/80">
              LoSpace gives you a physical and digital space to focus—where you can
              work alone but never feel alone. Stay motivated with our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
