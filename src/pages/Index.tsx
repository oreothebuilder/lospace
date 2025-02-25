
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProblemSolution from "@/components/ProblemSolution";
import AllFeatures from "@/components/AllFeatures";
import LearnMore from "@/components/LearnMore";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <ProblemSolution />
      <Features />
      <AllFeatures />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default Index;
