import { useEffect, useRef } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import FloatingBubbles from "./FloatingBubbles";
import MouseGradient from "./MouseGradient";
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const mainText = "Changing the way";
  const subText = "you grind";
  const mainWords = mainText.split(" ");
  const subWords = subText.split(" ");
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div ref={heroRef} className="container mx-auto px-4 pt-20 pb-12 reveal z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 2
        }} className="text-center">
            <h1 className="text-4xl font-bold mb-6 leading-tight tracking-tight md:text-7xl text-center">
              {mainWords.map((word, wordIndex) => <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((letter, letterIndex) => <motion.span key={`${wordIndex}-${letterIndex}`} initial={{
                y: 100,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 25
              }} className="inline-block text-center">
                      {letter}
                    </motion.span>)}
                </span>)}
              <br />
              <span className="inline-block mt-2 mb-4">
                {subWords.map((word, wordIndex) => <span key={`sub-${wordIndex}`} className="inline-block mr-4 last:mr-0">
                    {word.split("").map((letter, letterIndex) => <motion.span key={`sub-${wordIndex}-${letterIndex}`} initial={{
                  y: 100,
                  opacity: 0
                }} animate={{
                  y: 0,
                  opacity: 1
                }} transition={{
                  delay: mainWords.length * 0.1 + wordIndex * 0.1 + letterIndex * 0.03,
                  type: "spring",
                  stiffness: 150,
                  damping: 25
                }} className="inline-block text-gradient">
                        {letter}
                      </motion.span>)}
                  </span>)}
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Find Your Focus. Build Your Community. Achieve More.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" onClick={() => window.location.href = "#signup"} className="group bg-[#1a41db] hover:bg-[#1a41db]/90 text-white px-8 text-left">
                Sign up today
              </Button>
            </div>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 1,
          delay: 0.5
        }} className="relative w-full max-w-[600px] mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <img src="/lovable-uploads/950e6975-e576-4237-a40e-1c0fa7eb80a1.png" alt="Video call illustration" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Hero;