import { Activity, BrainCircuit, Users, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function HowItWorks() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const STEPS = [
    {
      icon: Activity,
      title: t('how_it_works.step1_title'),
      image: 'https://appcdn.goqii.com/storeimg/1844_1777285584.png',
      description: t('how_it_works.step1_desc'),
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: BrainCircuit,
      title: t('how_it_works.step2_title'),
      image: 'https://appcdn.goqii.com/storeimg/20849_1777286294.png',
      description: t('how_it_works.step2_desc'),
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Users,
      title: t('how_it_works.step3_title'),
      image: 'https://appcdn.goqii.com/storeimg/79212_1777286557.png',
      description: t('how_it_works.step3_desc'),
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: TrendingUp,
      title: t('how_it_works.step4_title'),
      image: 'https://appcdn.goqii.com/storeimg/6070_1777286873.png',
      description: t('how_it_works.step4_desc'),
      color: 'bg-emerald-50 text-emerald-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white px-4 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            {t('how_it_works.section_title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className={`relative group ${isRtl ? 'text-right' : 'text-left'}`}>
                {/* Image Section */}
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 border border-neutral-100 shadow-sm">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="relative z-10 bg-white">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${step.color} ${isRtl ? 'mr-0' : 'ml-0'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-neutral-300 mb-2 font-mono">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 pr-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
