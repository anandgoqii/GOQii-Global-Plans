import { Plus } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { usePlan } from '../hooks/usePlan';

export function ChronicFAQAndCTA() {
  const { preferences } = usePreferences();
  const plan = usePlan('Chronic Care');

  const faqs = [
    { q: "How often can I talk to my coach?", a: "You have regular touchpoints with your coach, and you can message them anytime through the app for guidance and support." },
    { q: "Is doctor consultation included?", a: "Yes, structured doctor consultations are included to review your health data and adjust your care plan." },
    { q: "Can I cancel anytime?", a: "Our plans are billed based on the cycle you choose (monthly or annual), and you can cancel auto-renewal at any time." },
    { q: "Does this work with my existing device?", a: "Yes! You can connect Apple Health, Google Fit, or your favorite wearable. No special smart tracker is required." }
  ];

  return (
    <>
      <section className="py-24 px-4 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-16 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-2xl border border-neutral-200 cursor-pointer shadow-sm">
                <summary className="flex justify-between items-center font-bold text-lg text-neutral-900 list-none">
                  <span className="pr-8">{faq.q}</span>
                  <span className="transition-transform group-open:rotate-45 shrink-0 bg-neutral-50 p-2 rounded-full">
                    <Plus className="w-5 h-5 text-blue-600" />
                  </span>
                </summary>
                <div className="text-neutral-600 mt-4 leading-relaxed font-medium pl-2 border-l-2 border-blue-500">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to take control?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 font-medium max-w-2xl mx-auto">
            Join thousands managing their health with one simple app.
          </p>
          <button className="bg-white text-neutral-900 hover:bg-neutral-50 px-10 py-5 mx-auto rounded-xl font-bold text-lg shadow-2xl transition-transform hover:-translate-y-1 block max-w-md w-full sm:w-auto">
            Start Your Plan – {preferences.currency}{plan ? plan.monthlyPrice : '...'}/month
          </button>
          <p className="mt-8 text-blue-200 text-sm font-semibold tracking-wide uppercase">
            Note: No extra devices required
          </p>
        </div>
      </section>
      
      <footer className="bg-neutral-950 text-neutral-500 py-12 px-4 text-center text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>© 2026 GOQii. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
