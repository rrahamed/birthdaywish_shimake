"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="appointment" className="py-32 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-serif text-zinc-900 mb-8 leading-[1.1]">Request a Private <span className="italic text-blue-900">Consultation</span></h2>
            <p className="text-zinc-600 mb-16 text-lg font-light leading-relaxed">
              Begin your journey to optimal health. Our concierge team will contact you within 2 hours to arrange your premium consultation.
            </p>
            
            <div className="space-y-10 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-800">
                  <Phone strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase mb-1">Concierge Desk</p>
                  <p className="text-zinc-900 font-serif text-2xl">+94 11 2 555 000</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-800">
                  <Mail strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase mb-1">Direct Contact</p>
                  <p className="text-zinc-900 font-serif text-2xl">concierge@pointofdev.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-800">
                  <MapPin strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase mb-1">Flagship Clinic</p>
                  <p className="text-zinc-900 font-serif text-2xl">World Trade Center, Colombo</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-zinc-200 p-10 md:p-14 rounded-[2rem] shadow-2xl shadow-zinc-200/50"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">First Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Last Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Email Address</label>
                <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Department</label>
                <div className="relative">
                  <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors appearance-none">
                    <option>General Consultation</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Precision Oncology</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-zinc-400">
                    ▼
                  </div>
                </div>
              </div>
              <button className="w-full py-5 rounded-xl bg-zinc-900 text-white font-semibold tracking-wide hover:bg-blue-900 transition-colors flex items-center justify-center gap-3 mt-10 shadow-lg shadow-zinc-900/20">
                Submit Request <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
