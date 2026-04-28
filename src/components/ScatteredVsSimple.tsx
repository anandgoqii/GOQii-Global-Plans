import { Smartphone, Activity, Utensils, BarChart, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function ScatteredVsSimple() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <section className="bg-neutral-50 py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Problem Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6">
              {t('scattered.title')}
            </h2>
            <div className="space-y-4 text-xl text-neutral-600 font-medium mb-8">
              <p>{t('scattered.problem_desc1')}</p>
              <p>{t('scattered.problem_desc2')}</p>
              <p>{t('scattered.problem_desc3')}</p>
              <p>{t('scattered.problem_desc4')}</p>
            </div>
            <p className="text-xl text-rose-600 font-semibold bg-rose-50 inline-block px-4 py-2 rounded-lg">
              {t('scattered.problem_footer')}
            </p>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-neutral-200/50 rounded-full blur-3xl opacity-50"></div>
            
            <motion.div 
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 sm:top-10 sm:left-10 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-neutral-100 flex flex-col items-center gap-2 sm:gap-3 w-28 sm:w-32"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-neutral-500">{t('scattered.diet')}</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10], x: [5, -5, 5], rotate: [2, -2, 2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-0 sm:bottom-10 sm:right-10 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-neutral-100 flex flex-col items-center gap-2 sm:gap-3 w-28 sm:w-32"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <BarChart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-neutral-500">{t('scattered.reports')}</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-neutral-100 flex flex-col items-center gap-2 sm:gap-3 w-28 sm:w-32 z-10"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-neutral-500">{t('scattered.motivation')}</span>
            </motion.div>

            <motion.div 
              animate={{ y: [15, -15, 15], x: [-10, 10, -10], rotate: [3, -3, 3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-10 right-0 sm:top-20 sm:right-20 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-neutral-100 flex flex-col items-center gap-2 sm:gap-3 w-28 sm:w-32"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-neutral-500">{t('scattered.workouts')}</span>
            </motion.div>
          </div>
        </div>

        {/* Transition / Solution */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Smartphone className="w-8 h-8" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6">
            {t('scattered.solution_title')}
          </h2>
          <p className="text-2xl text-neutral-600 font-medium mb-6">
            {t('scattered.solution_desc1')}
          </p>
          <p className="text-lg text-emerald-600 bg-emerald-50 inline-block px-6 py-3 rounded-full font-medium">
            {t('scattered.solution_desc2')}
          </p>
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-neutral-200"></div>
             <h3 className={`text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{t('scattered.before_title')}</h3>
             <ul className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
               <li className={`flex items-center gap-3 text-neutral-500 font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                 <span className="w-2 h-2 rounded-full bg-rose-400"></span> {t('scattered.before_item1')}
               </li>
               <li className={`flex items-center gap-3 text-neutral-500 font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                 <span className="w-2 h-2 rounded-full bg-rose-400"></span> {t('scattered.before_item2')}
               </li>
               <li className={`flex items-center gap-3 text-neutral-500 font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                 <span className="w-2 h-2 rounded-full bg-rose-400"></span> {t('scattered.before_item3')}
               </li>
             </ul>
           </div>
           
           <div className="bg-neutral-900 p-8 rounded-3xl shadow-xl relative overflow-hidden text-white">
             <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
             <h3 className={`text-sm font-bold uppercase tracking-widest text-emerald-400 mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{t('scattered.after_title')}</h3>
             <ul className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
               <li className={`flex items-center gap-3 text-white font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                 <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span> {t('scattered.after_item1')}
               </li>
               <li className={`flex items-center gap-3 text-white font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                 <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span> {t('scattered.after_item2')}
               </li>
               <li className={`flex items-center gap-3 text-white font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                 <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span> {t('scattered.after_item3')}
               </li>
             </ul>
           </div>
        </div>

      </div>
    </section>
  );
}
