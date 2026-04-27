import { useState, useEffect } from 'react';
import { usePreferences } from '../context/PreferencesContext';
import { fetchPlans, Plan } from '../lib/api';
import { Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Link, useNavigate } from 'react-router-dom';

const TABS = ['All Plans', 'Chronic Care', 'Lifestyle', 'Mental Well-being'];

export function HealthSystem() {
  const { preferences, setIsModalOpen } = usePreferences();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All Plans');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchPlans(preferences.country).then(data => {
      if (mounted) {
        setPlans(data);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, [preferences.country]);

  const filteredPlans = plans
    .filter(p => activeTab === 'All Plans' || p.category === activeTab)
    .slice(0, 3); // Render top 3 plans as requested

  return (
    <section id="plans" className="py-24 bg-neutral-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
            Choose Your Health System
          </h2>
          <p className="text-neutral-500 text-lg">
            Programs designed for your goals and lifestyle
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-neutral-400 animate-spin" />
          </div>
        ) : plans.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Plans Coming Soon in Your Region</h3>
            <p className="text-neutral-500 mb-8 max-w-sm mx-auto">We're expanding globally. Please check back soon or switch your location.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3.5 rounded-xl font-medium transition-colors"
            >
              Change Country
            </button>
          </div>
        ) : (
          <>
            {/* Filters and Toggles */}
            <div className="flex flex-col items-center gap-8 mb-16">
              <div className="flex flex-wrap justify-center gap-2">
                {TABS.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab 
                        ? 'bg-neutral-900 text-white shadow-md' 
                        : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 bg-white p-1.5 rounded-full border border-neutral-200">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === 'monthly' ? 'bg-neutral-100 text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    billingCycle === 'annual' ? 'bg-neutral-900 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Annual <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Save 20%</span>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              <AnimatePresence mode="popLayout">
                {filteredPlans.map((plan, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    key={plan.id}
                    className={`relative flex flex-col bg-white rounded-3xl p-8 border ${
                      plan.isPopular ? 'border-neutral-900 shadow-2xl scale-105 z-10' : 'border-neutral-200 shadow-lg mt-4 mb-4'
                    }`}
                  >
                    {plan.tag && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                          plan.isPopular ? 'bg-neutral-900 text-white' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {plan.tag}
                        </span>
                      </div>
                    )}

                    <div className="mb-2">
                      <span className="text-sm font-medium text-neutral-500">{plan.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{plan.name}</h3>
                    <p className="text-neutral-600 mb-6 text-sm">{plan.shortDescription}</p>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-neutral-900 tracking-tight">
                          {preferences.currency}{billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)}
                        </span>
                        <span className="text-neutral-500 font-medium">/ mo</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="text-sm text-neutral-500 mt-1">
                          Billed {preferences.currency}{plan.annualPrice} yearly
                        </div>
                      )}
                    </div>

                    <div className="bg-neutral-50 -mx-8 px-8 py-4 mb-8 text-sm font-medium text-neutral-700 flex items-center justify-center border-y border-neutral-100">
                      Works with your device (BYOD)
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-neutral-700">
                          <div className="mt-0.5 min-w-[20px] text-emerald-500">
                            <Check className="w-5 h-5" />
                          </div>
                          <span className="text-sm leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => {
                        if (plan.category === 'Chronic Care') {
                          navigate('/chronic-care');
                        }
                      }}
                      className={`w-full py-4 rounded-xl font-semibold transition-colors mt-auto ${
                      plan.isPopular 
                        ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                        : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                    }`}>
                      View Details
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredPlans.length === 0 && (
                <div className="col-span-3 text-center py-20 text-neutral-500 bg-white rounded-3xl border border-neutral-200">
                  No plans found for this category.
                </div>
              )}
            </div>

            {/* Fallback Nav */}
            <div className="mt-16 text-center flex flex-col items-center">
               <p className="text-neutral-600 mb-6 font-medium">Not sure which plan is right for you?</p>
               <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-medium transition-colors">
                    Find My Plan
                  </button>
                  <button className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 px-8 py-3.5 rounded-xl font-medium transition-colors">
                    Explore All Plans
                  </button>
               </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
