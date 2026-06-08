"use client";
import { motion } from "framer-motion";
import { Heart, Brain, Stethoscope, Microscope, Syringe, Eye } from "lucide-react";

export function Services() {
  const services = [
    { icon: <Heart size={32} strokeWidth={1.5} />, title: "Cardiology", desc: "Comprehensive heart health monitoring using 3D echocardiography." },
    { icon: <Brain size={32} strokeWidth={1.5} />, title: "Neurology", desc: "Advanced neuro-cognitive assessments and restorative therapies." },
    { icon: <Stethoscope size={32} strokeWidth={1.5} />, title: "General Practice", desc: "24/7 dedicated primary care physician access." },
    { icon: <Microscope size={32} strokeWidth={1.5} />, title: "Precision Oncology", desc: "Targeted cellular therapies and early-stage screening." },
    { icon: <Syringe size={32} strokeWidth={1.5} />, title: "Regenerative Medicine", desc: "Stem cell and PRP therapies for accelerated healing." },
    { icon: <Eye size={32} strokeWidth={1.5} />, title: "Ophthalmology", desc: "Laser precision diagnostics and vision correction." },
  ];

  return (
    <section id="services" className="py-32 bg-zinc-50 relative border-t border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase mb-6"
          >
            Clinical Excellence
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 mb-6 leading-[1.1]"
          >
            Premium Medical <span className="italic text-blue-900">Departments</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-10 rounded-[2rem] bg-white border border-zinc-100 hover:border-zinc-300 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-8 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 shadow-sm">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif text-zinc-900 mb-4 group-hover:text-blue-900 transition-colors">{service.title}</h4>
              <p className="text-zinc-500 font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
