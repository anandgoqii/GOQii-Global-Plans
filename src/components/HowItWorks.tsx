import { Activity, BrainCircuit, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePreferences } from '../context/PreferencesContext';
import { motion } from 'motion/react';

export function HowItWorks() {
  const { t, i18n } = useTranslation();
  const { preferences } = usePreferences();
  const isRtl = i18n.dir() === 'rtl';
  const isMiddleEast = ['AE', 'SA', 'QA'].includes(preferences.country);

  const STEPS = [
    {
      icon: Activity,
      title: t('how_it_works.step1_title'),
      image: isMiddleEast
        ? 'https://appcdn.goqii.com/storeimg/69638_1777444139.png'
        : 'https://appcdn.goqii.com/storeimg/1844_1777285584.png',
      description: t('how_it_works.step1_desc'),
      color: 'bg-blue-600',
      lightColor: 'bg-blue-50'
    },
    {
      icon: BrainCircuit,
      title: t('how_it_works.step2_title'),
      image: isMiddleEast
        ? 'https://appcdn.goqii.com/storeimg/7605_1777444246.png'
        : 'https://appcdn.goqii.com/storeimg/20849_1777286294.png',
      description: t('how_it_works.step2_desc'),
      color: 'bg-indigo-600',
      lightColor: 'bg-indigo-50'
    },
    {
      icon: Users,
      title: t('how_it_works.step3_title'),
      image: isMiddleEast
        ? 'https://appcdn.goqii.com/storeimg/30054_1777444299.png'
        : 'https://appcdn.goqii.com/storeimg/79212_1777286557.png',
      description: t('how_it_works.step3_desc'),
      color: 'bg-orange-600',
      lightColor: 'bg-orange-50'
    },
    {
      icon: TrendingUp,
      title: t('how_it_works.step4_title'),
      image: isMiddleEast
        ? 'https://appcdn.goqii.com/storeimg/72615_1777444430.png'
        : 'https://appcdn.goqii.com/storeimg/6070_1777286873.png',
      description: t('how_it_works.step4_desc'),
      color: 'bg-emerald-600',
      lightColor: 'bg-emerald-50'
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <div className={`max-w-xl ${isRtl ? 'text-right' : 'text-left'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6 leading-[1.1]">
              {t('how_it_works.section_title')}
            </h2>
            <p className="text-lg text-neutral-500 font-medium leading-relaxed">
              Experience a health journey designed around your data, guided by experts, and powered by AI.
            </p>
          </div>
          <div className="hidden md:block">
            <div className={`flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span>Follow the path</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[180px] left-[10%] right-[10%] h-px bg-neutral-100 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative group ${isRtl ? 'text-right' : 'text-left'}`}
                >
                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 ${isRtl ? 'right-4' : 'left-4'} z-20 bg-white px-3 py-1 rounded-full text-[10px] font-black font-mono border border-neutral-100 shadow-sm text-neutral-400 group-hover:text-neutral-900 transition-colors uppercase tracking-tighter`}>
                    Phase 0{index + 1}
                  </div>

                  {/* Image Section */}
                  <div className="aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden mb-10 border border-neutral-100 shadow-xl shadow-neutral-100/50 group-hover:shadow-2xl group-hover:shadow-neutral-200 transition-all duration-500 relative bg-neutral-50">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.98]" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="relative z-10 px-2">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl ${step.color} text-white ${isRtl ? 'mr-0' : 'ml-0'}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 whitespace-pre-line group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
