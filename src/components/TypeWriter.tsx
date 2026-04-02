"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
}

export default function TypeWriter({ text, speed = 75 }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      <span
        className="text-accent font-normal"
        style={{
          animation: isComplete ? "blink 1s infinite" : "none",
          fontSize: "inherit",
          lineHeight: "inherit",
        }}
      >
        |
      </span>
    </span>
  );
}
