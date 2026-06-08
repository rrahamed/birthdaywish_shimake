export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="font-serif font-bold text-2xl text-white">+</span>
              </div>
              <span className="font-serif font-bold text-xl tracking-wider text-white">POINTOFDEV</span>
            </a>
            <p className="text-zinc-400 max-w-sm mb-8 font-light leading-relaxed">
              A premium Next.js 15 healthcare website template crafted by PointOfDev. Designed for performance, animations, and conversions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.2em] text-xs">Clinic</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors font-light">Our Specialists</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors font-light">Technology</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors font-light">Concierge Services</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors font-light">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.2em] text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors font-light">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors font-light">Patient Rights</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm font-light tracking-wide">© 2026 PointOfDev UI Templates. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors">in</a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors">x</a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors">ig</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
