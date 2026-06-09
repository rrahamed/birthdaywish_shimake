"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, Shield, Clock } from "lucide-react";
import Image from "next/image";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      icon: <Activity className="text-blue-900" size={28} />,
      title: "Advanced Diagnostics",
      description: "State-of-the-art medical equipment for precise and rapid health assessments.",
    },
    {
      icon: <Shield className="text-blue-900" size={28} />,
      title: "Personalized Care",
      description: "Bespoke treatment plans tailored to your unique genetic and lifestyle profile.",
    },
    {
      icon: <Clock className="text-blue-900" size={28} />,
      title: "Zero Wait Time",
      description: "Exclusive private access ensures you see your specialist the moment you arrive.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase mb-6">About Our Clinic</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 mb-8 leading-[1.1]">
              Redefining the <br/><span className="italic text-blue-900">Standard of Care</span>
            </h3>
            <p className="text-zinc-600 text-lg mb-12 leading-relaxed font-light">
              As a premier private clinic, PointOfDev merges cutting-edge medical technology with unparalleled patient comfort. We believe healthcare should be a proactive, seamless, and deeply personalized experience. Our world-renowned specialists are dedicated to optimizing your healthspan, not just treating illness.
            </p>
            
            <div className="flex flex-col gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-zinc-900 font-serif text-xl mb-2">{feature.title}</h4>
                    <p className="text-zinc-500 font-light leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y }} className="relative h-[650px] rounded-[2rem] overflow-hidden border border-zinc-200 bg-zinc-50 shadow-2xl shadow-zinc-200/50">
            {/* The generated premium clinic image */}
            <Image 
              src="/clinic-interior.png" 
              alt="Premium Clinic Interior" 
              fill
              className="object-cover" 
            />
            {/* Elegant dark gradient to ensure the text on the badge pops */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Elegant glassmorphism badge over the image */}
            <div className="absolute bottom-10 left-10 right-10">
               <div className="border border-white/20 rounded-2xl p-6 bg-white/10 backdrop-blur-md shadow-2xl flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30">
                     <span className="text-3xl">🧬</span>
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-2xl mb-1 tracking-wide">Advanced Diagnostics Center</h4>
                    <p className="text-white/80 font-light text-sm">Where precision technology meets ultimate comfort.</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
