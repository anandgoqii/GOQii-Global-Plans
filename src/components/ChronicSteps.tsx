import { FileText, UserPlus, HeartPulse, TrendingUp } from 'lucide-react';

export function ChronicSteps() {
  const steps = [
    { icon: FileText, title: "Get started with a simple health assessment" },
    { icon: UserPlus, title: "Get matched with your coach" },
    { icon: HeartPulse, title: "Follow a plan tailored to your condition" },
    { icon: TrendingUp, title: "Track progress and improve over time" }
  ];

  return (
    <section className="py-24 px-4 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">How it works</h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-neutral-200/60 relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full rounded-l-3xl bg-blue-100 group-hover:bg-blue-600 transition-colors"></div>
               
               <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl sm:text-2xl sm:ml-4">
                 {i + 1}
               </div>
               <div className="flex-grow">
                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">{step.title}</h3>
               </div>
               <div className="hidden lg:flex w-14 h-14 shrink-0 bg-neutral-50 border border-neutral-100 rounded-full items-center justify-center text-neutral-400">
                 <step.icon className="w-6 h-6" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
