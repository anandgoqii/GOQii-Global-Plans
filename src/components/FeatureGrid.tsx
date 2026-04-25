import { Activity, Apple, Dumbbell, UserCheck, Stethoscope, Award, Users } from 'lucide-react';

const FEATURES = [
  {
    icon: Activity,
    title: 'Activity Tracking',
    copy: 'Steps, sleep, and daily movement—all tracked automatically.',
    micro: 'Your activity shapes your daily plan.'
  },
  {
    icon: Apple,
    title: 'Personalized Nutrition',
    copy: 'Meal plans and guidance tailored to you.',
    micro: 'Your meals adapt to your activity.'
  },
  {
    icon: Dumbbell,
    title: 'Workouts & Fitness',
    copy: 'Guided workouts designed for your goals.',
    micro: 'Your workouts adjust as you improve.'
  },
  {
    icon: UserCheck,
    title: 'Expert Coaching',
    copy: 'Real humans guiding and motivating you.',
    micro: 'Your coach tracks your progress.'
  },
  {
    icon: Stethoscope,
    title: 'Chronic Care Support',
    copy: 'Structured support for long-term conditions.',
    micro: 'Your plan adapts to your health needs.'
  },
  {
    icon: Award,
    title: 'Wellness Rewards',
    copy: 'Earn rewards for staying consistent.',
    micro: 'Your effort gets rewarded.'
  },
  {
    icon: Users,
    title: 'Community & Motivation',
    copy: 'Stay engaged with challenges and support.',
    micro: 'You’re never doing this alone.'
  }
];

export function FeatureGrid() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6">
            Everything you need.<br/>Working together.
          </h2>
          <p className="text-xl text-neutral-500 font-medium">
            Not separate tools—one connected experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {FEATURES.map((feat, i) => (
             <div key={i} className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-100/50 transition-colors group">
               <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-neutral-200 flex items-center justify-center text-neutral-900 mb-6 group-hover:scale-110 transition-transform">
                 <feat.icon className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-neutral-900 mb-3">{feat.title}</h3>
               <p className="text-neutral-600 mb-6">{feat.copy}</p>
               
               <div className="mt-auto inline-block bg-white px-4 py-2 rounded-lg text-xs font-semibold text-neutral-500 border border-neutral-200 shadow-sm">
                 {feat.micro}
               </div>
             </div>
           ))}
           
           {/* Summary Card to fill the grid nicely */}
           <div className="lg:col-span-2 bg-neutral-900 p-8 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <h3 className="text-2xl sm:text-3xl font-semibold mb-4 relative z-10">It all works together</h3>
             <p className="text-neutral-300 text-lg mb-6 max-w-lg relative z-10">
               Your activity, meals, sleep, and coaching are all connected. So every step you take moves you forward.
             </p>
             <div className="flex items-center gap-2 text-emerald-400 font-medium relative z-10">
               <span className="w-2 h-2 rounded-full bg-current"></span>
               No gaps. No guesswork. Just steady progress.
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
