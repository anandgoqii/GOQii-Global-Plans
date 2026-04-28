import { UserCheck, Stethoscope, Activity, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ChronicFeatures() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const features = [
    {
      title: t('features.expert_title'),
      copy: t('features.expert_copy'),
      micro: t('features.expert_micro'),
      icon: UserCheck,
      image: "https://appcdn.goqii.com/storeimg/13859_1777284656.png"
    },
    {
      title: t('chronic_features.item1'),
      copy: t('chronic_features.desc1'),
      micro: t('chronic_features.desc3'),
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: t('features.activity_title'),
      copy: t('features.activity_copy'),
      micro: t('features.activity_micro'),
      icon: Activity,
      image: "https://appcdn.goqii.com/storeimg/34165_1777294404.png"
    },
    {
      title: t('chronic_features.item2'),
      copy: t('chronic_features.desc2'),
      micro: t('chronic_features.desc4'),
      icon: FileText,
      image: "https://appcdn.goqii.com/storeimg/76229_1777295454.png"
    }
  ];

  return (
    <section className="py-24 bg-white px-4 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 max-w-2xl mx-auto ${isRtl ? 'text-right' : 'text-left lg:text-center'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 leading-tight whitespace-pre-line">{t('chronic_features.title')}</h2>
          <p className="text-lg text-neutral-500 font-medium">{t('chronic_features.desc')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feat, i) => (
            <div key={i} className={`bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col hover:shadow-md transition-shadow overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="aspect-video w-full overflow-hidden border-b border-neutral-100">
                <img src={feat.image} alt={feat.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-neutral-200 -mt-14 relative z-10 ${isRtl ? 'mr-0' : 'ml-0'}`}>
                  <feat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{feat.title}</h3>
                <p className="text-neutral-600 mb-8 flex-grow font-medium">{feat.copy}</p>
                <div className="mt-auto bg-white px-4 py-3 rounded-xl text-xs font-semibold text-neutral-500 border border-neutral-200 shadow-sm leading-relaxed">
                  {feat.micro}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed relative z-10 whitespace-pre-line">
            {t('features.summary_copy')}
          </p>
        </div>

      </div>
    </section>
  );
}
