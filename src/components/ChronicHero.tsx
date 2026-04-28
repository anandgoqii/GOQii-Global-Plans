import { ArrowRight } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { usePlan } from '../hooks/usePlan';
import { motion } from 'motion/react';

export function ChronicHero() {
  const { preferences } = usePreferences();
  const plan = usePlan('Chronic Care');

  return (
    <section className="bg-neutral-50 pt-32 pb-24 overflow-hidden border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-8 tracking-widest uppercase shadow-sm">
              Chronic Care
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-neutral-900 mb-8 leading-[1.05]">
              Take control of <br />
              <span className="text-[#007D69]">your health</span>.
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

          <div className="hidden lg:block relative text-right">
             <div className="inline-block bg-white p-8 rounded-[2.5rem] shadow-2xl border border-neutral-100 relative z-10">
                <div className="w-64 h-64 bg-blue-50 rounded-2xl flex items-center justify-center">
                   <div className="text-center">
                      <div className="text-4xl mb-2">📈</div>
                      <p className="text-neutral-900 font-bold">Health Track</p>
                      <p className="text-neutral-400 text-xs font-medium uppercase tracking-widest mt-1">Status Active</p>
                   </div>
                </div>
             </div>
             {/* Decorative Blobs */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
             <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-emerald-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
