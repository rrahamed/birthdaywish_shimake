"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.08, 
      duration: 1.2, 
      smoothWheel: true,
      orientation: "vertical",
      gestureOrientation: "vertical" 
    }}>
      {/* @ts-expect-error - React 19 type mismatch with Lenis */}
      {children}
    </ReactLenis>
  );
}
