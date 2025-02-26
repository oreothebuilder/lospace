
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import MouseGradient from "@/components/MouseGradient";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Fixed background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/20 blur-[100px]" />
      </div>
      
      {/* Mouse follow gradient */}
      <MouseGradient />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">LoSpace</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Building the future of collaborative workspaces, one connection at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-white text-lg">
                At LoSpace, we believe that great work happens when people feel connected, 
                inspired, and supported. Our mission is to create digital spaces that foster 
                collaboration, productivity, and community.
              </p>
              <p className="text-white text-lg">
                We're building more than just a platform - we're creating a movement 
                that transforms how people work, learn, and grow together in the 
                digital age.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community First",
                description: "We believe in the power of community to inspire, motivate, and support each other.",
              },
              {
                title: "Innovation",
                description: "We continuously push boundaries to create better ways for people to work together.",
              },
              {
                title: "Inclusivity",
                description: "We're building a platform where everyone feels welcome and can thrive.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                className="p-6 rounded-2xl bg-background/50 backdrop-blur shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
