import { UserCheck, Stethoscope, Activity, FileText } from 'lucide-react';

export function ChronicFeatures() {
  const features = [
    {
      title: "Personal Health Coach",
      copy: "A dedicated expert guides your daily habits, nutrition, and lifestyle.",
      micro: "Your coach tracks your progress and keeps you accountable.",
      icon: UserCheck
    },
    {
      title: "Doctor Support",
      copy: "Regular consultations to review your health data and adjust your plan.",
      micro: "Your care evolves as your health improves.",
      icon: Stethoscope
    },
    {
      title: "Health Tracking",
      copy: "Track activity, sleep, and key health metrics in one place.",
      micro: "Your data stays connected and easy to understand.",
      icon: Activity
    },
    {
      title: "Diagnostic Insights",
      copy: "Periodic health checks to monitor progress and detect risks early.",
      micro: "Your results guide your next steps.",
      icon: FileText
    }
  ];

  return (
    <section className="py-24 bg-white px-4 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 leading-tight">Everything you need.<br/>Working together.</h2>
          <p className="text-lg text-neutral-500 font-medium">Not separate tools—one connected experience designed for your health.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feat, i) => (
            <div key={i} className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-neutral-200">
                <feat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{feat.title}</h3>
              <p className="text-neutral-600 mb-8 flex-grow font-medium">{feat.copy}</p>
              <div className="mt-auto bg-white px-4 py-3 rounded-xl text-xs font-semibold text-neutral-500 border border-neutral-200 shadow-sm leading-relaxed">
                {feat.micro}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed relative z-10">
            Your activity, nutrition, sleep, and medical guidance all work together—<br className="hidden sm:block"/>
            so every step you take leads to real progress.
          </p>
        </div>

      </div>
    </section>
  );
}
