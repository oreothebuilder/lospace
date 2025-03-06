
import { useEffect, useState } from "react";
import { MessageLoading } from "@/components/ui/message-loading";

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "Loading...") return "Loading";
        return prev + ".";
      });
    }, 500);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center space-y-4">
        <MessageLoading />
        <p className="text-foreground text-lg font-medium min-w-[100px] text-center">{loadingText}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
