
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import FloatingBubbles from "./FloatingBubbles";
import MouseGradient from "./MouseGradient";
import RotatingCube from "./RotatingCube";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cubePosition, setCubePosition] = useState({ x: 0, y: 0 });
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Calculate cube position based on scroll
      // As the user scrolls down, move the cube to the bottom left
      const maxScroll = 1000; // Maximum scroll distance to consider
      const progress = Math.min(position / maxScroll, 1);
      
      // Start from top right, move to bottom left
      const startX = 0;
      const startY = 0;
      const endX = -80; // Bottom left X position (percentage)
      const endY = 80;  // Bottom left Y position (percentage)
      
      const newX = startX + progress * (endX - startX);
      const newY = startY + progress * (endY - startY);
      
      setCubePosition({ x: newX, y: newY });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* 3D Rotating Cube with scroll-based positioning */}
      <div 
        className="fixed z-50 transition-all duration-700 ease-out"
        style={{ 
          right: `${20 - cubePosition.x}%`, 
          top: `${20 + cubePosition.y}%`,
          transform: `scale(${1 - scrollPosition / 3000})` // Slightly scale down as user scrolls
        }}
      >
        <RotatingCube size={150} />
      </div>

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

          {/* Right side - Illustration with 3D element */}
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
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl relative">
              <img src="/lovable-uploads/950e6975-e576-4237-a40e-1c0fa7eb80a1.png" alt="Video call illustration" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
