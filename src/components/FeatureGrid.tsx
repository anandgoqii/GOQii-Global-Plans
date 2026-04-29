import { Activity, Apple, Dumbbell, UserCheck, Stethoscope, Award, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePreferences } from '../context/PreferencesContext';

export function FeatureGrid() {
  const { t, i18n } = useTranslation();
  const { preferences } = usePreferences();
  const isRtl = i18n.dir() === 'rtl';
  const isMiddleEast = ['AE', 'SA', 'QA'].includes(preferences.country);

  const FEATURES = [
    {
      icon: Activity,
      title: t('features.activity_title'),
      image: preferences.country === 'IN'
        ? 'https://appcdn.goqii.com/storeimg/90137_1777447283.png'
        : 'https://appcdn.goqii.com/storeimg/34165_1777294404.png',
      copy: t('features.activity_copy'),
      micro: t('features.activity_micro')
    },
    {
      icon: Apple,
      title: t('features.nutrition_title'),
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600',
      copy: t('features.nutrition_copy'),
      micro: t('features.nutrition_micro')
    },
    {
      icon: Dumbbell,
      title: t('features.fitness_title'),
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
      copy: t('features.fitness_copy'),
      micro: t('features.fitness_micro')
    },
    {
      icon: UserCheck,
      title: t('features.expert_title'),
      image: isMiddleEast 
        ? 'https://appcdn.goqii.com/storeimg/86490_1777443983.png'
        : 'https://appcdn.goqii.com/storeimg/13859_1777284656.png',
      copy: t('features.expert_copy'),
      micro: t('features.expert_micro')
    },
    {
      icon: Stethoscope,
      title: t('features.chronic_title'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
      copy: t('features.chronic_copy'),
      micro: t('features.chronic_micro')
    },
    {
      icon: Award,
      title: t('features.rewards_title'),
      image: isMiddleEast
        ? 'https://appcdn.goqii.com/storeimg/9689_1777443998.png'
        : 'https://appcdn.goqii.com/storeimg/94616_1777284776.png',
      copy: t('features.rewards_copy'),
      micro: t('features.rewards_micro')
    }
  ];

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6 whitespace-pre-line">
            {t('features.title')}
          </h2>
          <p className="text-xl text-neutral-500 font-medium">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {FEATURES.map((feat, i) => (
             <div key={i} className={`bg-neutral-50 rounded-3xl border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-100/50 transition-colors group overflow-hidden flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
               <div className="aspect-video w-full overflow-hidden border-b border-neutral-100">
                 <img src={feat.image} alt={feat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <div className={`w-12 h-12 bg-white rounded-xl shadow-sm border border-neutral-200 flex items-center justify-center text-neutral-900 mb-6 group-hover:scale-110 transition-transform -mt-14 relative z-10 ${isRtl ? 'mr-0' : 'ml-0'}`}>
                   <feat.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-neutral-900 mb-3">{feat.title}</h3>
                 <p className="text-neutral-600 mb-6 flex-grow">{feat.copy}</p>
                 
                 <div className="mt-auto inline-block bg-white px-4 py-2 rounded-lg text-xs font-semibold text-neutral-500 border border-neutral-200 shadow-sm w-fit">
                   {feat.micro}
                 </div>
               </div>
             </div>
           ))}
           
           {/* Summary Card */}
           <div className={`md:col-span-2 lg:col-span-2 bg-neutral-900 p-8 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <h3 className="text-2xl sm:text-3xl font-semibold mb-4 relative z-10">{t('features.summary_title')}</h3>
             <p className="text-neutral-300 text-lg mb-6 max-w-lg relative z-10">
               {t('features.summary_copy')}
             </p>
             <div className={`flex items-center gap-2 text-emerald-400 font-medium relative z-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
               <span className="w-2 h-2 rounded-full bg-current"></span>
               {t('features.summary_footer')}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
