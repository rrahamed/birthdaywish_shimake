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
            className="bg-white border border-zinc-200 p-10 md:p-14 rounded-[2rem] shadow-2xl shadow-zinc-200/50 flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-3xl font-serif text-zinc-900 mb-6">Ready to Book?</h3>
            <p className="text-zinc-600 mb-10 text-lg font-light leading-relaxed">
              Experience our seamless new booking system to find the right specialist and schedule your appointment instantly.
            </p>
            <a 
              href="/booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-5 rounded-xl bg-zinc-900 text-white font-semibold tracking-wide hover:bg-blue-900 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-zinc-900/20"
            >
              Open Booking System <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
