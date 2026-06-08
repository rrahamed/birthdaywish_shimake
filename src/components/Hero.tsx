"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ThreeOverlay } from "./ThreeOverlay";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Video Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-70"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay so white text is perfectly readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80"></div>
      </motion.div>

      {/* 3D Particles */}
      <ThreeOverlay />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-4xl text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-[1.1]"
          >
            The Pinnacle of <br/><span className="italic text-blue-300">Personal Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 font-light leading-relaxed"
          >
            A high-performance Next.js 15 healthcare website template crafted by PointOfDev. Featuring premium GSAP animations, 3D WebGL components, and flawless Apple-style smooth scrolling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#appointment" className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group shadow-xl">
              Request Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#services" className="px-10 py-4 rounded-full border border-white/30 bg-black/50 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-md text-center">
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-white"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
