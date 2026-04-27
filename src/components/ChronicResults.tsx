import { CheckCircle2 } from 'lucide-react';

export function ChronicResults() {
  const improvements = [
    'Better control of blood sugar',
    'Improved daily energy',
    'Reduced health risks',
    'More consistent habits'
  ];

  return (
    <section className="py-24 bg-white px-4 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
             Real improvements<br/>that matter
           </h2>
           <div className="space-y-4">
             {improvements.map((item, i) => (
               <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-50/50 hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100 cursor-default">
                 <CheckCircle2 className="w-7 h-7 text-emerald-500 shrink-0" />
                 <span className="text-xl font-semibold text-neutral-700 tracking-tight">{item}</span>
               </div>
             ))}
           </div>
        </div>

        <div>
           <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8 tracking-tight">
             Real people. Real progress.
           </h2>
           <div className="bg-neutral-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <span className="text-9xl font-serif leading-none">"</span>
             </div>
             <p className="text-lg sm:text-xl leading-relaxed mb-10 relative z-10 font-medium text-neutral-200">
               "Before GOQii, I was using three different apps to manage my diabetes. My doctor told me to track food, my watch tracked steps, and I had a manual log for blood sugar. Now my coach sees it all in one place and actually helps me make sense of it."
             </p>
             <div className="flex items-center gap-5 relative z-10 border-t border-white/10 pt-8">
               <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-white/10 flex items-center justify-center bg-blue-600">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Rajeev M." className="w-full h-full object-cover" />
               </div>
               <div>
                 <div className="font-bold text-lg tracking-wide">Rajeev M.</div>
                 <div className="text-sm text-neutral-400 font-medium tracking-wide">Reduced fasting sugar by 20%</div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
