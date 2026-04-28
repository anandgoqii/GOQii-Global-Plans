import { motion } from 'motion/react';
import { usePreferences } from '../context/PreferencesContext';
import { ArrowRight, Activity, Heart, Moon } from 'lucide-react';

export function Hero() {
  const { preferences } = usePreferences();

  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center bg-white px-4 py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <img 
          src="https://appcdn.goqii.com/storeimg/12940_1777356099.png" 
          alt="Hero Background Mobile" 
          className="block md:hidden w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Desktop Background */}
        <img 
          src="https://appcdn.goqii.com/storeimg/69811_1777355953.png" 
          alt="Hero Background" 
          className="hidden md:block w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/25 lg:bg-gradient-to-r lg:from-white/55 lg:via-white/30 lg:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200 text-sm font-medium text-neutral-800 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Plans and pricing tailored for {preferences.countryName}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            Everything your health needs. <br/>
            <span className="text-[#007D69]">One simple app.</span>
          </h1>
          
          <p className="text-lg text-neutral-700 mb-10 max-w-xl leading-relaxed font-medium">
            Track, eat, move, improve, and stay motivated—all in one place.<br/>
            No switching apps. No scattered data. Just real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl">
              Start Your Plan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/80 backdrop-blur-md hover:bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
              Explore Plans
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
