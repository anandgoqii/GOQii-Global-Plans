import { PlayCircle } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { usePlan } from '../hooks/usePlan';
import { motion } from 'motion/react';

export function ChronicHero() {
  const { preferences } = usePreferences();
  const plan = usePlan('Chronic Care');

  return (
    <section className="bg-neutral-50 px-4 pt-20 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6 tracking-wide uppercase">
          Chronic Care
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
          Take control of your health—<br />without juggling multiple apps.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto font-medium">
          Manage conditions like diabetes, hypertension, and heart health in one place. Track, get guidance, and improve—step by step.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg">
            Start Your Plan – {preferences.currency}{plan ? plan.monthlyPrice : '...'}/month
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 px-8 py-4 rounded-xl font-semibold transition-colors">
            <PlayCircle className="w-5 h-5 text-neutral-500" />
            Watch Overview
          </button>
        </div>
        
        <p className="text-sm font-medium text-neutral-500 mb-20 flex items-center justify-center gap-2">
          <span className="text-emerald-500">✔</span> Clinically guided
          <span className="text-neutral-300 mx-2">•</span>
          <span className="text-emerald-500">✔</span> Continuous support
        </p>

        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">See how it works</h2>
          <p className="text-neutral-500 font-medium">How GOQii helps you stay consistent and in control.</p>
        </div>

        <div className="relative aspect-video max-w-3xl mx-auto bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full opacity-60 mix-blend-overlay" alt="Video thumbnail" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors shadow-xl border border-white/30">
              <PlayCircle className="w-10 h-10 text-white" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
