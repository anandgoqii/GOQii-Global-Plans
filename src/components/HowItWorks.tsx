import { Activity, BrainCircuit, Users, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    icon: Activity,
    title: 'Track your daily habits',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    description: 'Connect your devices or log manually.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: BrainCircuit,
    title: 'Get personalized insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    description: 'Understand how your habits connect.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Users,
    title: 'Follow your plan',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    description: 'Complete daily tasks curated for you.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'Improve continuously',
    image: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80&w=600',
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
                {/* Image Section */}
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 border border-neutral-100 shadow-sm">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="relative z-10 bg-white">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${step.color}`}>
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
