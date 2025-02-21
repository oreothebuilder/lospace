
import React from "react";

interface BackgroundGradientProps {
  imageUrl?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  imageUrl,
  overlay = true,
  children
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Base gradient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-accent/10 blur-[100px]" />
      </div>

      {/* Optional image background with blur */}
      {imageUrl && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 z-0"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px) brightness(0.3)",
          }}
        />
      )}

      {/* Optional overlay gradient */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm z-10" />
      )}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default BackgroundGradient;
