
import { useEffect, useRef } from "react";
import Button from "./Button";
import { Building, ArrowRight } from "lucide-react";
import FloatingBubbles from "./FloatingBubbles";
import { motion } from "framer-motion";
import MouseGradient from "./MouseGradient";

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

  const mainText = "Changing the way";
  const subText = "you grind";
  const mainWords = mainText.split(" ");
  const subWords = subText.split(" ");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/20 blur-[100px]" />
      </div>
      
      {/* Mouse follow gradient */}
      <MouseGradient />

      {/* Floating Bubbles */}
      <FloatingBubbles />

      {/* Content */}
      <div
        ref={heroRef}
        className="container mx-auto px-4 pt-20 reveal z-30 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            {mainWords.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
            <br />
            {subWords.map((word, wordIndex) => (
              <span key={`sub-${wordIndex}`} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`sub-${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: (mainWords.length * 0.1) + wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-gradient"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </motion.div>
        <p className="text-lg md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-medium">
          Find Your Focus. Build Your Community. Achieve More.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="group bg-[#1a41db] hover:bg-[#1a41db]/90 text-white px-8"
            onClick={() => window.location.href = "#signup"}
          >
            Sign up today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
