import { ArrowRight } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function RealTimeAndResults() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.dir() === 'rtl';

  const metrics = [
    { label: t('results.metric1'), icon: '🌱', color: 'text-emerald-500' },
    { label: t('results.metric2'), icon: '📈', color: 'text-blue-500' },
    { label: t('results.metric3'), icon: '✨', color: 'text-indigo-500' },
    { label: t('results.metric4'), icon: '🏔️', color: 'text-rose-500' },
  ];

  const results = [
    t('results.result1'),
    t('results.result2'),
    t('results.result3'),
    t('results.result4')
  ];

  return (
    <section className="bg-white">
      <div id="success-stories" className="py-24 px-4 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div className={isRtl ? 'text-right' : 'text-left'}>
             <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
                {t('results.title')}
             </h2>
             <p className="text-lg text-neutral-500 mb-12">
                {t('results.subtitle')}
             </p>
             
             <div className="grid grid-cols-2 gap-4">
               {metrics.map((metric, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ scale: 1.02 }}
                   className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-center gap-4"
                 >
                   <div className="text-3xl">{metric.icon}</div>
                   <div className="font-semibold text-neutral-900">{metric.label}</div>
                 </motion.div>
               ))}
             </div>
           </div>
           
           <div className={`bg-neutral-900 rounded-3xl p-10 text-white relative overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <h2 className="text-3xl font-semibold tracking-tight mb-8 relative z-10">{t('results.people_title')}</h2>
              
              <ul className="space-y-6 mb-10 relative z-10">
                {results.map((result, i) => (
                   <li key={i} className={`flex gap-4 items-center ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <ArrowRight className={`w-4 h-4 text-emerald-400 ${isRtl ? 'rotate-180' : ''}`} />
                    </div>
                    <span className="text-lg font-light">{result}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => navigate('/success-stories')}
                className="bg-white text-neutral-900 px-6 py-3 rounded-xl font-medium transition-colors hover:bg-neutral-100 relative z-10 w-full sm:w-auto text-center"
              >
                {t('results.cta_success')}
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}

export function FooterCTA() {
  const { preferences } = usePreferences();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <>
      <section className="py-24 bg-neutral-900 text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            {t('cta.footer_title')}
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light">
            {t('cta.footer_subtitle')}
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            {t('cta.footer_btn')}
          </button>
        </div>
      </section>
      
      <footer className="bg-neutral-950 text-neutral-500 py-12 px-4 text-center text-sm">
        <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <div>© 2026 GOQii. {t('footer.rights')}</div>
          <div className={`flex gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.support')}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
