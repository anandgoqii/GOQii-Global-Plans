import { ArrowRight } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { motion } from 'motion/react';

export function RealTimeAndResults() {
  const metrics = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', color: 'text-rose-500' },
    { label: 'Sleep Score', value: '88', unit: '/100', color: 'text-indigo-500' },
    { label: 'Stress Index', value: 'Low', unit: '', color: 'text-emerald-500' },
    { label: 'Daily Readiness', value: '92', unit: '%', color: 'text-blue-500' },
  ];

  const results = [
    'Improved health markers',
    'Better sleep quality',
    'Reduced stress levels',
    'Sustainable lifestyle changes'
  ];

  return (
    <section className="bg-white">
      <div className="py-24 px-4 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
               See Your Health in Real Time
             </h2>
             <p className="text-lg text-neutral-500 mb-12">
               Actionable insights that evolve with you.
             </p>
             
             <div className="grid grid-cols-2 gap-4">
               {metrics.map((metric, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ scale: 1.02 }}
                   className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100"
                 >
                   <div className="text-sm font-medium text-neutral-500 mb-2">{metric.label}</div>
                   <div className="text-3xl font-bold text-neutral-900 flex items-baseline gap-1">
                     <span className={metric.color}>{metric.value}</span>
                     <span className="text-base font-medium text-neutral-400">{metric.unit}</span>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
           
           <div className="bg-neutral-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <h2 className="text-3xl font-semibold tracking-tight mb-8 relative z-10">Real Results That Matter</h2>
              
              <ul className="space-y-6 mb-10 relative z-10">
                {results.map((result, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-lg font-light">{result}</span>
                  </li>
                ))}
              </ul>
              
              <button className="bg-white text-neutral-900 px-6 py-3 rounded-xl font-medium transition-colors hover:bg-neutral-100 relative z-10 w-full sm:w-auto text-center">
                View Success Stories
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}

export function FooterCTA() {
  const { preferences } = usePreferences();

  return (
    <>
      <section className="py-24 bg-neutral-900 text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Start Your Health Journey Today
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light">
            Personalized plans. Continuous support. Smarter decisions.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            Get Your Plan in {preferences.countryName}
          </button>
        </div>
      </section>
      
      <footer className="bg-neutral-950 text-neutral-500 py-12 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 GOQii. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
