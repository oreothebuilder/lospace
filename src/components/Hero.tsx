
import { useEffect, useRef } from "react";
import Button from "./Button";
import { Building, ArrowRight } from "lucide-react";
import FloatingBubbles from "./FloatingBubbles";
import { motion } from "framer-motion";
import BackgroundGradient from "./BackgroundGradient";

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

  const mainText = "changing the way";
  const subText = "you grind";
  const mainWords = mainText.split(" ");
  const subWords = subText.split(" ");

  return (
    <BackgroundGradient
      imageUrl="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80"
    >
      <div className="flex items-center justify-center min-h-screen">
        <FloatingBubbles />
        <div
          ref={heroRef}
          className="container mx-auto px-4 pt-20 reveal z-30 text-center"
        >
          <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            Redefining Productivity Spaces
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
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
    </BackgroundGradient>
  );
};

export default Hero;
