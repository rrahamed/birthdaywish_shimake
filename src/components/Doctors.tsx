"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Doctors() {
  const doctors = [
    { name: "Dr. Sarah Chen", role: "Chief of Cardiology", image: "/doc1.png" },
    { name: "Dr. James Aris", role: "Lead Neurologist", image: "/doc2.png" },
    { name: "Dr. Elena Rostova", role: "Precision Oncology", image: "/doc3.png" },
  ];

  return (
    <section id="doctors" className="py-32 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase mb-6">World-Class Specialists</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 leading-[1.1]">Meet Your <span className="italic text-blue-900">Care Team</span></h3>
          </div>
          <button className="hidden md:block px-8 py-3 rounded-full border border-zinc-300 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
            View All Specialists
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {doctors.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden relative shadow-md transition-all duration-700 group-hover:shadow-2xl bg-zinc-100">
                <Image src={doc.image} alt={doc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-px bg-white mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <h4 className="text-3xl font-serif text-white mb-2">{doc.name}</h4>
                <p className="text-zinc-200 font-light tracking-wide">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
