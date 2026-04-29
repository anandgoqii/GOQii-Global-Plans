import { UserCheck, Stethoscope, Activity, FileText, Smartphone, ClipboardList, CheckCircle2, Settings2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ChronicFeatures() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const features = [
    {
      title: t('chronic_features.feature1_title'),
      desc: t('chronic_features.feature1_desc'),
      list: t('chronic_features.feature1_list'),
      icon: UserCheck,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: t('chronic_features.feature2_title'),
      desc: t('chronic_features.feature2_desc'),
      list: t('chronic_features.feature2_list'),
      icon: Stethoscope,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: t('chronic_features.feature3_title'),
      desc: t('chronic_features.feature3_desc'),
      list: t('chronic_features.feature3_list'),
      icon: Activity,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: t('chronic_features.feature4_title'),
      desc: t('chronic_features.feature4_desc'),
      list: t('chronic_features.feature4_list'),
      icon: FileText,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: t('chronic_features.feature5_title'),
      desc: t('chronic_features.feature5_desc'),
      list: t('chronic_features.feature5_list'),
      icon: Smartphone,
      color: 'bg-orange-50 text-orange-600'
    },
    {
      title: t('chronic_features.feature6_title'),
      desc: t('chronic_features.feature6_desc'),
      list: t('chronic_features.feature6_list'),
      icon: ClipboardList,
      color: 'bg-rose-50 text-rose-600'
    }
  ];

  return (
    <section className="py-24 bg-white px-4 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 max-w-2xl mx-auto ${isRtl ? 'text-right' : 'text-left lg:text-center'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 leading-tight">{t('chronic_features.title')}</h2>
          <p className="text-xl text-neutral-900 font-bold mb-4">{t('chronic_features.subtitle')}</p>
          <p className="text-lg text-neutral-500 font-medium">{t('chronic_features.desc')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feat, i) => (
            <div key={i} className={`p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className={`w-14 h-14 ${feat.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                <feat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{feat.title}</h3>
              <p className="text-neutral-600 mb-6 font-medium leading-relaxed">{feat.desc}</p>
              <div className="space-y-3 mt-auto">
                {feat.list.split('\n').map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-3 text-sm text-neutral-600 font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item.replace('• ', '')}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 w-full">
            {[
              { icon: UserCheck, key: 'line1' },
              { icon: Settings2, key: 'line2' },
              { icon: Sparkles, key: 'line3' }
            ].map((item) => (
              <div key={item.key} className="bg-neutral-50 p-8 rounded-[2rem] border border-neutral-100 text-center flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm border border-neutral-100">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-neutral-900 font-bold leading-tight">
                  {t(`chronic_features.summary_${item.key}` as any)}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 text-white p-10 sm:p-14 rounded-[3rem] text-center w-full shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-white/15 transition-colors duration-700"></div>
            <h4 className="text-2xl sm:text-3xl font-bold leading-relaxed relative z-10 max-w-2xl mx-auto">
              {t('chronic_features.final_tagline')}
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
}
