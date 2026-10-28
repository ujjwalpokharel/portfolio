"use client";
import { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden transition duration-300 lg:block"
      style={{ background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(29,78,216,0.15), transparent 80%)` }}
    />
  );
}
