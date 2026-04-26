import { Smartphone, Watch, Compass } from 'lucide-react';

export function ChronicConnected() {
  return (
    <section className="py-24 px-4 bg-neutral-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
            Works with what you already use
          </h2>
          <p className="text-xl text-blue-400 font-semibold mb-4">
            No need for special devices.
          </p>
          <p className="text-lg text-neutral-300 mb-10 leading-relaxed font-medium">
            Connect your existing apps and wearables, or log data manually—everything stays in one place.
          </p>

          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 border-t border-white/10 pt-10">
            {[
              { icon: Smartphone, label: 'Apple Health' },
              { icon: Smartphone, label: 'Google Fit' },
              { icon: Watch, label: 'Wearables' },
              { icon: Compass, label: 'Manual tracking' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-white tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[450px] bg-neutral-800 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-500/10 mix-blend-overlay"></div>
          {/* Abstract graphic */}
          <div className="relative z-10 w-full max-w-sm px-8">
             <div className="space-y-5">
               <div className="h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center px-5 gap-4 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-500/50"></div>
                  <div className="h-2.5 w-24 bg-white/20 rounded-full"></div>
               </div>
               <div className="h-24 bg-white/10 rounded-2xl border border-white/20 flex items-center px-5 gap-5 backdrop-blur-md shadow-lg transform -translate-x-2">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                  <div className="flex-grow">
                    <div className="h-2.5 w-3/4 bg-white/80 rounded-full mb-3"></div>
                    <div className="h-2.5 w-1/2 bg-white/40 rounded-full"></div>
                  </div>
               </div>
               <div className="h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center px-5 gap-4 backdrop-blur-sm translate-x-4">
                  <div className="w-8 h-8 rounded-full bg-rose-500/50"></div>
                  <div className="h-2.5 w-20 bg-white/20 rounded-full"></div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
