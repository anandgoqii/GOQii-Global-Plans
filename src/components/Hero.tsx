import { motion } from 'motion/react';
import { usePreferences } from '../context/PreferencesContext';
import { ArrowRight, Activity, Heart, Moon } from 'lucide-react';

export function Hero() {
  const { preferences } = usePreferences();

  return (
    <section className="relative overflow-hidden bg-neutral-50 px-4 py-20 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-teal-400 to-transparent blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-400 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-800 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Plans and pricing tailored for {preferences.countryName}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            One Platform. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600">Every Dimension</span><br/>
            Of Your Health.
          </h1>
          
          <p className="text-lg text-neutral-600 mb-10 max-w-lg leading-relaxed">
            Personalized health programs powered by AI, expert coaching, and your own devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group">
              Explore Plans
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center">
              See How It Works
            </button>
          </div>
        </motion.div>

        {/* Hero Visual / Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-white rounded-3xl p-2 shadow-2xl border border-neutral-100 rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-[22px] m-2 overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" 
                  alt="Healthy lifestyle" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                
                {/* Simulated UI overlay in the center */}
                <div className="absolute inset-x-8 bottom-8 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/50">
                   <div className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-1">Health Score</div>
                   <div className="text-4xl font-light text-neutral-900 flex items-baseline gap-2">
                     84 <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+2 pts</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-4"
          >
             <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
               <Heart className="w-5 h-5" />
             </div>
             <div>
               <div className="text-xs text-neutral-500 font-medium">Heart Rate</div>
               <div className="text-lg font-semibold text-neutral-900">72 bpm</div>
             </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-1/3 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-4"
          >
             <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
               <Moon className="w-5 h-5" />
             </div>
             <div>
               <div className="text-xs text-neutral-500 font-medium">Sleep Score</div>
               <div className="text-lg font-semibold text-neutral-900">8.2 hrs</div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
