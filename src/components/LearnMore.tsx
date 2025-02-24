
import { useRef, useEffect } from "react";
import Button from "./Button";

const LearnMore = () => {
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
    <section className="py-32 bg-[#1A1F2C] text-white">
      <div ref={sectionRef} className="container mx-auto px-4 text-center reveal">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          Learn more about us
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            About Us
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Sign up today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
