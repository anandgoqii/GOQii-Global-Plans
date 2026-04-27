import { Activity, BrainCircuit, Users, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    icon: Activity,
    title: 'Track your daily habits',
    description: 'Connect your devices or log manually.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: BrainCircuit,
    title: 'Get personalized insights',
    description: 'Understand how your habits connect.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Users,
    title: 'Follow your plan',
    description: 'Complete daily tasks curated for you.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'Improve continuously',
    description: 'See real progress over time.',
    color: 'bg-emerald-50 text-emerald-600'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white px-4 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            Simple. Connected. Effective.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connecting Line */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] bg-neutral-200" />
                )}
                
                <div className="relative z-10 bg-white">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${step.color}`}>
                    <Icon className="w-8 h-8" />
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
