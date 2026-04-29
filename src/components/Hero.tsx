import { motion, useScroll, useTransform } from 'motion/react';
import { usePreferences } from '../context/PreferencesContext';
import { ArrowRight, Activity, Heart, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export function Hero() {
  const { preferences } = usePreferences();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const isAsianCountry = ['HK', 'CN', 'SG', 'VN', 'MY'].includes(preferences.country);
  const isEuropeanCountry = ['UK', 'DE', 'FR', 'IT', 'ES'].includes(preferences.country);
  const isMiddleEast = ['AE', 'SA', 'QA'].includes(preferences.country);
  const isUS = preferences.country === 'US';

  let mobileHero = "https://appcdn.goqii.com/storeimg/86239_1777356988.png";
  let desktopHero = "https://appcdn.goqii.com/storeimg/69811_1777355953.png";

  if (isAsianCountry) {
    mobileHero = "https://appcdn.goqii.com/storeimg/60511_1777359008.png";
    desktopHero = "https://appcdn.goqii.com/storeimg/42982_1777358995.png";
  } else if (isEuropeanCountry) {
    mobileHero = "https://appcdn.goqii.com/storeimg/5788_1777359606.png";
    desktopHero = "https://appcdn.goqii.com/storeimg/44455_1777359596.png";
  } else if (isMiddleEast) {
    mobileHero = "https://appcdn.goqii.com/storeimg/14229_1777360367.png";
    desktopHero = "https://appcdn.goqii.com/storeimg/69241_1777360354.png";
  } else if (isUS) {
    mobileHero = "https://appcdn.goqii.com/storeimg/37303_1777360075.png";
    desktopHero = "https://appcdn.goqii.com/storeimg/14262_1777360031.png";
  }

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative overflow-hidden min-h-[750px] md:min-h-[650px] flex md:items-center bg-white px-4 pt-20 pb-8 md:pt-40 md:pb-32"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Mobile Background */}
        <img 
          src={mobileHero} 
          alt="Hero Background Mobile" 
          className="block md:hidden w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Desktop Background */}
        <img 
          src={desktopHero} 
          alt="Hero Background" 
          className="hidden md:block w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 w-full h-[660px] md:h-auto flex flex-col justify-between md:block pt-[15px] md:pt-0 pb-6 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-3xl ${isRtl ? 'text-right' : 'text-left'}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 md:py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200 text-[10px] md:text-sm font-medium text-neutral-800 mb-4 md:mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t('hero.pricing_tailored')} {preferences.countryName}
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight sm:leading-[1.05] mb-4 md:mb-6">
            {t('hero.title')} <br/>
            <span className="text-[#007D69]">{t('hero.highlight')}</span>
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-700 max-w-xl leading-relaxed font-medium whitespace-pre-line">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`flex flex-col sm:flex-row gap-4 mb-4 md:mb-0 ${isRtl ? 'sm:flex-row-reverse sm:justify-end items-end sm:items-center' : ''}`}
        >
          <Link 
            to="/#plans"
            className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl"
          >
            {t('hero.cta_start')}
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
          </Link>
          <Link 
            to="/#plans"
            className="bg-white/80 backdrop-blur-md hover:bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center"
          >
            {t('hero.cta_explore')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
