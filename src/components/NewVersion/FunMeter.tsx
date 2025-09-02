// FunMeter.tsx
// A tiny toy: click anywhere to watch a cyan wave travel across the screen

import React, { useState, useEffect } from "react";

export default function FunMeter() {
  const [waves, setWaves] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setWaves((prev) => [
      ...prev,
      { x: e.clientX, y: e.clientY, id: Date.now() },
    ]);
  };

  return (
    <section
      className="relative w-full h-screen bg-black cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-xs text-gray-400">
          click anywhere to release a cyan wave
        </p>
      </div>

      {waves.map(({ x, y, id }) => (
        <div
          key={id}
          className="absolute w-4 h-4 bg-cyan-400 rounded-full pointer-events-none animate-ping"
          style={{
            left: x - 8,
            top: y - 8,
            animationDuration: "1.2s",
          }}
        />
      ))}
    </section>
  );
}
