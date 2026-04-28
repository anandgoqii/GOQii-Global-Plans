import React from 'react';
import { Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ComparePlans() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const PlanCheck = () => <Check className="w-5 h-5 mx-auto text-emerald-500" />;
  const PlanCross = () => <X className="w-5 h-5 mx-auto text-neutral-300" />;

  const sections = [
    {
      title: t('compare.sec1'),
      rows: [
        { feature: t('compare.f1'), values: ["✔", "✔", "✔"] },
        { feature: t('compare.f2'), values: ["✔", "✔", "✔"] },
        { feature: t('compare.f3'), values: ["✔", "✔", "✔"] },
        { feature: t('compare.f4'), values: ["✔", "✔", "✔"] },
        { feature: t('compare.f5'), values: [t('compare.v1'), t('compare.v1'), t('compare.v1')] },
      ]
    },
    {
      title: t('compare.sec2'),
      rows: [
        { feature: t('compare.f6'), values: ["✔", "✔", "✔"] },
        { feature: t('compare.f7'), values: ["✔", "✖", "✖"] },
        { feature: t('compare.f8'), values: ["✔", "✔", "✔"] },
        { feature: t('compare.f9'), values: ["✔", "✔", "✖"] },
      ]
    },
    {
      title: t('compare.sec3'),
      rows: [
        { feature: t('compare.f10'), values: ["✔", "✖", "✖"] },
        { feature: t('compare.f11'), values: ["✔", "✔", "✖"] },
        { feature: t('compare.f12'), values: ["✔", "✔", "✔"] },
      ]
    },
    {
      title: t('compare.sec4'),
      rows: [
        { feature: t('compare.f13'), values: [t('compare.v2'), t('compare.v3'), t('compare.v4')] },
        { feature: t('compare.f14'), values: [t('compare.v5'), t('compare.v6'), t('compare.v7')] },
        { feature: t('compare.f15'), values: [t('compare.v8'), t('compare.v9'), t('compare.v10')] },
      ]
    }
  ];

  const renderValue = (val: string) => {
    if (val === "✔") return <PlanCheck />;
    if (val === "✖") return <PlanCross />;
    return <span className="font-semibold text-neutral-700">{val}</span>;
  };

  return (
    <section className="py-24 bg-neutral-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 ${isRtl ? 'text-right' : 'text-left lg:text-center'}`}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            {t('compare.table_title')}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto whitespace-pre-line">
            {t('compare.table_desc')}
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white shadow-sm mb-8" dir={isRtl ? 'rtl' : 'ltr'}>
          <table className={`w-full text-sm ${isRtl ? 'text-right' : 'text-left'}`}>
            <thead className="bg-neutral-50/50 border-b border-neutral-200 text-neutral-500 uppercase text-xs tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-5 font-medium min-w-[200px]">{t('compare.feature')}</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[140px]">{t('compare.plan1')}</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[140px]">{t('compare.plan2')}</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[140px]">{t('compare.plan3')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {sections.map((section, idx) => (
                <React.Fragment key={idx}>
                  <tr className="bg-neutral-50/80">
                    <td colSpan={4} className={`px-6 py-3 font-bold text-neutral-900 text-xs uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-5 font-medium text-neutral-900">{row.feature}</td>
                      <td className="px-6 py-5 text-center">{renderValue(row.values[0])}</td>
                      <td className="px-6 py-5 text-center">{renderValue(row.values[1])}</td>
                      <td className="px-6 py-5 text-center">{renderValue(row.values[2])}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center text-neutral-600 bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <p className="font-medium text-emerald-800 whitespace-pre-line">
            {t('compare.footer_promo')}
          </p>
        </div>
      </div>
    </section>
  );
}

export function TrustedSecure() {
  const { t } = useTranslation();
  const points = [
    t('compare.iso'),
    t('compare.hipaa'),
    'GDPR Ready',
    'PDPL Compliant'
  ];

  return (
    <section className="py-20 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-8">
          {t('compare.protection_title')}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-2 text-neutral-600 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              {point}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-neutral-400">
          {t('compare.protection_footer')}
        </p>
      </div>
    </section>
  );
}
