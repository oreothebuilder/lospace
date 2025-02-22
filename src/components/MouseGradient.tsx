
import React, { useEffect, useRef } from 'react';

const MouseGradient = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return;

      const rect = gradientRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gradientRef.current.style.setProperty('--x', `${x}px`);
      gradientRef.current.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={gradientRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `
          radial-gradient(
            600px circle at var(--x, 100px) var(--y, 100px),
            rgba(29, 78, 216, 0.15),
            transparent 80%
          )
        `,
      }}
    />
  );
};

export default MouseGradient;
