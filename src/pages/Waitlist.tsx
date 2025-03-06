
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import Button from "@/components/Button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";

// Define a type for our waitlist entries
interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  timestamp: string;
}

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
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);

    // Create a unique ID for this entry
    const entryId = Date.now().toString();
    
    // Create the entry object
    const newEntry: WaitlistEntry = {
      id: entryId,
      name: name.trim(),
      email: email.trim(),
      timestamp: new Date().toISOString()
    };

    // Get existing entries or initialize empty array
    const existingEntries: WaitlistEntry[] = JSON.parse(
      localStorage.getItem('waitlistEntries') || '[]'
    );
    
    // Add new entry and save back to localStorage
    existingEntries.push(newEntry);
    localStorage.setItem('waitlistEntries', JSON.stringify(existingEntries));

    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "Thanks for joining our waitlist. We'll notify you when LoSpace launches."
      });
    }, 1500);
  };

  return <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="h-[40rem] w-full bg-background relative flex flex-col items-center justify-center antialiased pt-16">
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
            Join the LoSpace waitlist
          </h1>
          
          <p className="max-w-lg mx-auto my-8 text-sm md:text-lg text-center relative z-10 text-zinc-300">
            Be the first to experience LoSpace - the revolutionary platform designed for students, 
            professionals, and freelancers providing both physical and digital collaborative workspaces.
          </p>
          
          {!submitted ? <div className="max-w-md mx-auto mt-8 space-y-4 relative z-10">
              <Input type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} className="w-full mt-4 bg-background/60 backdrop-blur border-white/10" />
              
              <Input type="email" placeholder="your.email@example.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full mt-4 bg-background/60 backdrop-blur border-white/10" />
              
              <Button onClick={handleSubmit} type="submit" variant="primary" size="md" className="w-full mt-6" disabled={loading}>
                {loading ? "Processing..." : "Join Waitlist"}
              </Button>
            </div> : <div className="max-w-md mx-auto mt-8 p-8 rounded-xl border border-white/10 bg-background/30 backdrop-blur text-center relative z-10">
              <div className="text-primary text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-semibold mb-4 text-white">You're on the list!</h2>
              <p className="text-white mb-6">
                Thank you for joining our waitlist. We'll notify you when LoSpace launches!
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                Join with another email
              </Button>
            </div>}
        </div>
        
        {/* Background Beams */}
        <BackgroundBeams />
      </div>
      
      {/* Benefits Section */}
      <section className="py-16 relative z-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Early Access Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
              title: "Early Access",
              description: "Be the first to test LoSpace and get exclusive founding member benefits."
            }, {
              title: "Special Pricing",
              description: "Waitlist members receive special discounts and offers upon launch."
            }, {
              title: "Influence Development",
              description: "Your feedback will help shape LoSpace's future features and direction."
            }].map((benefit, index) => <motion.div key={benefit.title} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2 * (index + 1)
            }} className="p-6 rounded-2xl bg-background/30 backdrop-blur shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-white">{benefit.description}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Waitlist;
