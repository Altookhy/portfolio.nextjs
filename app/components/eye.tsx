"use client";

import React, { useRef, useEffect, useState } from "react";

interface EyeProps {
  size?: number;
  pupilSize?: number;
  speed?: number;
  blink?: boolean;
}

const Eye: React.FC<EyeProps> = ({
  size = 60,
  pupilSize = 20,
  speed = 0.05,
  blink = false,
}) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const movePupil = (e: MouseEvent) => {
      if (!eyeRef.current || !pupilRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const centerX = eye.left + eye.width / 2;
      const centerY = eye.top + eye.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.min(eye.width / 4, Math.sqrt(dx * dx + dy * dy));

      const angle = Math.atan2(dy, dx);
      const x = Math.cos(angle) * distance * speed * 4;
      const y = Math.sin(angle) * distance * speed * 4;

      pupilRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", movePupil);
    return () => window.removeEventListener("mousemove", movePupil);
  }, [speed]);

  useEffect(() => {
    if (!blink) return;

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // Blink duration
    }, 4000); // Blink every 4s

    return () => clearInterval(blinkInterval);
  }, [blink]);

  return (
    <div
      ref={eyeRef}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#fff",
        border: "3px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={pupilRef}
        style={{
          width: pupilSize,
          height: pupilSize,
          backgroundColor: "#000",
          borderRadius: "50%",
          transition: "transform 0.05s linear",
        }}
      />
      {isBlinking && (
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            animation: "blink 0.2s ease-in-out",
          }}
        />
      )}
    </div>
  );
};

export default Eye;
