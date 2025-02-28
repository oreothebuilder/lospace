
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import MouseGradient from "@/components/MouseGradient";
import { useToast } from "@/components/ui/use-toast";
import Button from "@/components/Button";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.includes('@') || name.trim() === '') {
      toast({
        title: "Invalid input",
        description: "Please provide a valid email and name.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "Thanks for joining our waitlist. We'll notify you when LoSpace launches.",
      });
    }, 1500);
  };

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
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-gradient">LoSpace</span> Waitlist
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Be the first to experience the future of collaborative workspaces.
            </p>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-lg mx-auto mb-24"
          >
            {!submitted ? (
              <div className="bg-background/40 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold mb-6 text-white">Sign up for early access</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-background/70 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-background/70 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="md"
                    className="w-full mt-6"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Join Waitlist"}
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-background/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
                <div className="text-primary text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-semibold mb-4 text-white">You're on the list!</h2>
                <p className="text-white mb-6">
                  Thank you for joining our waitlist. We'll notify you when LoSpace launches!
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline" 
                  size="sm"
                >
                  Join with another email
                </Button>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Early Access",
                  description: "Be the first to test LoSpace and get exclusive founding member benefits."
                },
                {
                  title: "Special Pricing",
                  description: "Waitlist members receive special discounts and offers upon launch."
                },
                {
                  title: "Influence Development",
                  description: "Your feedback will help shape LoSpace's future features and direction."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  className="p-6 rounded-2xl bg-background/30 backdrop-blur shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-white">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Waitlist;
