import React from 'react';
import { Check, X } from 'lucide-react';

export function ComparePlans() {
  const PlanCheck = () => <Check className="w-5 h-5 mx-auto text-emerald-500" />;
  const PlanCross = () => <X className="w-5 h-5 mx-auto text-neutral-300" />;

  const sections = [
    {
      title: "Included in all plans",
      rows: [
        { feature: "Activity Tracking", values: ["✔", "✔", "✔"] },
        { feature: "Sleep Tracking", values: ["✔", "✔", "✔"] },
        { feature: "Basic Insights", values: ["✔", "✔", "✔"] },
        { feature: "App Access", values: ["✔", "✔", "✔"] },
        { feature: "Device Support", values: ["BYOD", "BYOD", "BYOD"] },
      ]
    },
    {
      title: "Level of support",
      rows: [
        { feature: "Coach Guidance", values: ["✔", "✔", "✔"] },
        { feature: "Doctor Support", values: ["✔", "✖", "✖"] },
        { feature: "Personalized Plans", values: ["✔", "✔", "✔"] },
        { feature: "Priority Support", values: ["✔", "✔", "✖"] },
      ]
    },
    {
      title: "Best suited for",
      rows: [
        { feature: "Chronic Conditions", values: ["✔", "✖", "✖"] },
        { feature: "Weight & Fitness", values: ["✔", "✔", "✖"] },
        { feature: "Stress & Sleep", values: ["✔", "✔", "✔"] },
      ]
    },
    {
      title: "Experience",
      rows: [
        { feature: "Type of Support", values: ["Full Care", "Guided", "Self-paced"] },
        { feature: "Check-ins", values: ["Frequent", "Regular", "Light"] },
        { feature: "Progress Tracking", values: ["Advanced", "Standard", "Basic"] },
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Compare Plans</h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            All plans include the same app experience.<br/>
            The difference is how much support and guidance you get.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white shadow-sm mb-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-neutral-50/50 border-b border-neutral-200 text-neutral-500 uppercase text-xs tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-5 font-medium min-w-[200px]">Feature</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[140px]">Care & Control</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[140px]">Fitness & Weight</th>
                <th scope="col" className="px-6 py-5 font-bold text-center text-neutral-900 min-w-[140px]">Stress & Sleep</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {sections.map((section, idx) => (
                <React.Fragment key={idx}>
                  <tr className="bg-neutral-50/80">
                    <td colSpan={4} className="px-6 py-3 font-bold text-neutral-900 text-xs uppercase tracking-wider">
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
          <p className="font-medium text-emerald-800">
            No matter which plan you choose, everything stays connected—<br/>
            your activity, meals, sleep, and progress all work together in one app.
          </p>
        </div>
      </div>
    </section>
  );
}

export function TrustedSecure() {
  const points = [
    'ISO 27001 Certified',
    'HIPAA Aligned',
    'GDPR Ready',
    'PDPL Compliant'
  ];

  return (
    <section className="py-20 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-8">
          Your data stays protected
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
          Security and privacy based on your region.
        </p>
      </div>
    </section>
  );
}
