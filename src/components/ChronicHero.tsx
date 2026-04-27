import { ArrowRight } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { usePlan } from '../hooks/usePlan';
import { motion } from 'motion/react';

export function ChronicHero() {
  const { preferences } = usePreferences();
  const plan = usePlan('Chronic Care');

  return (
    <section className="bg-neutral-50 pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-8 tracking-widest uppercase shadow-sm">
              Chronic Care
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-neutral-900 mb-8 leading-[1.05]">
              Take control of <br />
              <span className="text-blue-600">your health</span>.
            </h1>
            
            <p className="text-xl text-neutral-600 mb-12 max-w-lg leading-relaxed font-medium">
              Managing chronic conditions shouldn't feel like a full-time job. 
              Get the tools, guidance, and support you need to stay in control 
              and live your life to the fullest.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                id="chronic-cta"
                className="px-10 py-5 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group shadow-2xl shadow-neutral-200"
              >
                Start Your Plan – {preferences.currency}{plan ? plan.monthlyPrice : '...'}/month
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm font-bold text-neutral-400 uppercase tracking-widest">
              <span className="flex items-center gap-2"><span className="text-emerald-500 text-lg">✔</span> Clinically guided</span>
              <span className="flex items-center gap-2"><span className="text-emerald-500 text-lg">✔</span> Continuous support</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-neutral-200 rounded-[2.5rem] overflow-hidden relative border border-neutral-200 flex items-center justify-center group shadow-2xl">
              <img 
                src="https://appcdn.goqii.com/storeimg/76773_1777294554.png" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt="Healthcare professional" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100 rounded-full -z-10 blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full -z-10 blur-[5rem] opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
