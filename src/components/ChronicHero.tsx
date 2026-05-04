import { ArrowRight } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { usePlan } from '../hooks/usePlan';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function ChronicHero() {
  const { preferences } = usePreferences();
  const plan = usePlan('Chronic Care');
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const isMiddleEast = ['AE', 'SA', 'QA'].includes(preferences.country);
  const isEurope = ['UK', 'DE', 'FR', 'IT', 'ES'].includes(preferences.country);
  const isUS = preferences.country === 'US';
  const isAsia = ['IN', 'HK', 'CN', 'SG', 'VN', 'MY'].includes(preferences.country);

  const getHeroImage = () => {
    if (preferences.country === 'IN') return 'https://appcdn.goqii.com/storeimg/1413_1777457145.png';
    if (isUS) return 'https://appcdn.goqii.com/storeimg/1631_1777456888.png';
    if (isEurope) return 'https://appcdn.goqii.com/storeimg/50644_1777456899.png';
    if (isMiddleEast) return 'https://appcdn.goqii.com/storeimg/22909_1777456956.png';
    if (isAsia) return 'https://appcdn.goqii.com/storeimg/79104_1777457011.png';
    return 'https://appcdn.goqii.com/storeimg/86164_1777445047.png';
  };

  const getMobileHeroImage = () => {
    if (preferences.country === 'IN') return 'https://appcdn.goqii.com/storeimg/5671_1777468131.png';
    if (isMiddleEast) return 'https://appcdn.goqii.com/storeimg/55342_1777468253.png';
    if (isEurope) return 'https://appcdn.goqii.com/storeimg/19620_1777468346.png';
    if (isUS) return 'https://appcdn.goqii.com/storeimg/30908_1777468313.png';
    if (isAsia) return 'https://appcdn.goqii.com/storeimg/53051_1777468302.png';
    return 'https://appcdn.goqii.com/storeimg/5671_1777468131.png';
  };

  return (
    <section className="relative pt-20 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-neutral-100 min-h-[750px] flex items-start md:items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getMobileHeroImage()} 
          className="block md:hidden w-full h-full object-cover"
          alt=""
          referrerPolicy="no-referrer"
        />
        <img 
          src={getHeroImage()} 
          className="hidden md:block w-full h-full object-cover"
          alt=""
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-[650px] md:h-auto flex flex-col justify-between md:block">
        <div className="max-w-3xl h-full flex flex-col justify-between md:block">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`h-full flex flex-col justify-between md:block ${isRtl ? 'text-right' : 'text-left'}`}
          >
            <div>
              <div className={`inline-block px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold mb-6 tracking-widest uppercase shadow-sm backdrop-blur-sm ${isRtl ? 'ml-0 mr-0' : ''}`}>
                {t('chronic_hero.badge')}
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.05] whitespace-pre-line drop-shadow-md">
                {t('chronic_hero.title')}
              </h1>
              
              <p className={`text-lg sm:text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-medium drop-shadow-sm ${isRtl ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                {t('chronic_hero.desc')}
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-5 pb-8 md:pb-0 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
              <Link 
                to="/#plans"
                id="chronic-cta"
                className="px-10 py-5 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group shadow-2xl"
              >
                {t('chronic_hero.btn')} – {preferences.currency}{plan ? plan.monthlyPrice : '...'}/{t('plans.monthly')}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
