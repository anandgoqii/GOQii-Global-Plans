import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Star, Heart, Activity, Dumbbell, Apple, Brain, Quote, UserCheck, Settings2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SuccessStoriesPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.dir() === 'rtl';

  const outcomes = [
    {
      title: t('success_stories.fitness_title'),
      desc: t('success_stories.fitness_desc'),
      icon: Dumbbell,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: t('success_stories.nutrition_title'),
      desc: t('success_stories.nutrition_desc'),
      icon: Apple,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: t('success_stories.stress_title'),
      desc: t('success_stories.stress_desc'),
      icon: Brain,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: t('success_stories.consistency_title'),
      desc: t('success_stories.consistency_desc'),
      icon: Activity,
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const stories = [
    {
      name: t('success_stories.story1_name'),
      result: t('success_stories.story1_result'),
      quote: t('success_stories.story1_quote'),
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: t('success_stories.story2_name'),
      result: t('success_stories.story2_result'),
      quote: t('success_stories.story2_quote'),
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: t('success_stories.story3_name'),
      result: t('success_stories.story3_result'),
      quote: t('success_stories.story3_quote'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className={`pt-24 pb-20 ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-8 tracking-widest uppercase shadow-sm"
          >
            {t('success_stories.badge')}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-8 leading-[1.1]"
          >
            {t('success_stories.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-500 font-medium leading-relaxed"
          >
            {t('success_stories.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Outcomes Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-neutral-200 flex-grow"></div>
            <h2 className="text-2xl font-bold text-neutral-900 uppercase tracking-widest text-center px-4">
              {t('success_stories.section1_title')}
            </h2>
            <div className="h-px bg-neutral-200 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${outcome.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  <outcome.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{outcome.title}</h3>
                <p className="text-neutral-500 font-medium leading-relaxed">{outcome.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="px-6 mb-32 py-24 bg-neutral-900 rounded-[4rem] mx-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            {t('success_stories.why_title')}
          </h2>
          <p className="text-xl text-white/60 font-medium mb-16">{t('success_stories.why_subtitle')}</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
             {[
               { icon: Activity, key: 'line1' },
               { icon: UserCheck, key: 'line2' },
               { icon: Settings2, key: 'line3' }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-4"
               >
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                   <item.icon className="w-6 h-6" />
                 </div>
                 <p className="text-lg text-white font-bold">{t(`success_stories.why_${item.key}` as any)}</p>
               </motion.div>
             ))}
          </div>

          <h3 className="text-2xl font-bold text-blue-400">
            {t('success_stories.why_tagline')}
          </h3>
        </div>
      </section>

      {/* Stories Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-neutral-200 flex-grow"></div>
            <h2 className="text-2xl font-bold text-neutral-900 uppercase tracking-widest text-center px-4">
              {t('success_stories.stories_title')}
            </h2>
            <div className="h-px bg-neutral-200 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 border border-neutral-100 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-1">{story.name}</h3>
                  <p className="text-blue-600 font-bold mb-6 text-sm uppercase tracking-widest">{story.result}</p>
                  <div className="relative">
                    <Quote className={`absolute -top-4 ${isRtl ? '-right-4' : '-left-4'} w-8 h-8 text-neutral-100 -z-10`} />
                    <p className="text-neutral-600 font-medium italic leading-relaxed italic">{story.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-20 rounded-[3rem] text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-white/15 transition-colors duration-700"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">{t('success_stories.footer_title')}</h2>
          
          <div className="space-y-2 mb-12 relative z-10">
            <p className="text-xl text-white/80 font-medium">{t('success_stories.footer_desc1')}</p>
            <p className="text-xl text-white/80 font-medium">{t('success_stories.footer_desc2')}</p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-12 relative z-10 text-blue-200">
            {t('success_stories.footer_tagline')}
          </h3>

          <div className={`flex flex-col sm:flex-row justify-center gap-6 relative z-10 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
             <button 
               onClick={() => navigate('/')}
               className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
               {t('success_stories.cta_start')}
               <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
             </button>
             <button 
               onClick={() => navigate('/')}
               className="px-10 py-5 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
             >
               {t('success_stories.cta_explore')}
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
