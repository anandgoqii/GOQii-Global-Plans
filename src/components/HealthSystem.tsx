import { useState, useEffect } from 'react';
import { usePreferences } from '../context/PreferencesContext';
import { fetchPlans, Plan } from '../lib/api';
import { Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export function HealthSystem() {
  const { preferences, setIsModalOpen } = usePreferences();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const TABS = [
    { id: 'All Plans', label: t('plans.all') },
    { id: 'Chronic Care', label: t('plans.chronic') },
    { id: 'Lifestyle', label: t('plans.lifestyle') },
    { id: 'Mental Well-being', label: t('plans.mental') }
  ];

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
            {t('plans.title')}
          </h2>
          <p className="text-neutral-500 text-lg">
            {t('plans.subtitle')}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-neutral-400 animate-spin" />
          </div>
        ) : plans.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('plans.coming_soon')}</h3>
            <p className="text-neutral-500 max-w-sm mx-auto">{t('plans.coming_soon_desc')}</p>
          </div>
        ) : (
          <>
            {/* Filters and Toggles */}
            <div className="flex flex-col items-center gap-8 mb-16">
              <div className={`flex flex-wrap justify-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab.id 
                        ? 'bg-neutral-900 text-white shadow-md' 
                        : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className={`flex items-center gap-3 bg-white p-1.5 rounded-full border border-neutral-200 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === 'monthly' ? 'bg-neutral-100 text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {t('plans.monthly')}
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    billingCycle === 'annual' ? 'bg-neutral-900 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {t('plans.annual')} <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{t('plans.save')}</span>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch ${isRtl ? 'direction-rtl' : ''}`}>
              <AnimatePresence mode="popLayout">
                {filteredPlans.map((plan, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    key={plan.id}
                    className={`relative flex flex-col bg-white rounded-3xl p-8 border ${isRtl ? 'text-right' : 'text-left'} ${
                      plan.isPopular ? 'border-neutral-900 shadow-2xl md:scale-105 z-10' : 'border-neutral-200 shadow-lg md:mt-4 md:mb-4 mb-4'
                    }`}
                  >
                    {plan.tag && (
                      <div className={`absolute top-0 -translate-y-1/2 ${
                        plan.isPopular ? 'left-1/2 -translate-x-1/2' : (isRtl ? 'right-8' : 'left-8')
                      }`}>
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
                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-neutral-100 shadow-inner bg-neutral-50">
                      <img 
                        src={plan.image} 
                        alt={plan.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{plan.name}</h3>
                    <p className="text-neutral-600 mb-6 text-sm">{plan.shortDescription}</p>

                    <div className="mb-8">
                      <div className={`flex items-baseline gap-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <span className="text-4xl font-bold text-neutral-900 tracking-tight">
                          {preferences.currency}{billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)}
                        </span>
                        <span className="text-neutral-500 font-medium">{t('plans.per_mo')}</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="text-sm text-neutral-500 mt-1">
                          {t('plans.billed_yearly')} {preferences.currency}{plan.annualPrice}
                        </div>
                      )}
                    </div>

                    <div className="bg-neutral-50 -mx-8 px-8 py-4 mb-8 text-sm font-medium text-neutral-700 flex items-center justify-center border-y border-neutral-100">
                      {t('plans.byod')}
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className={`flex gap-3 text-neutral-700 ${isRtl ? 'flex-row-reverse' : ''}`}>
                          <div className={`mt-0.5 min-w-[20px] text-emerald-500 ${isRtl ? 'rotate-0' : ''}`}>
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
                      {t('plans.view_details')}
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredPlans.length === 0 && (
                <div className="md:col-span-2 lg:col-span-3 text-center py-20 text-neutral-500 bg-white rounded-3xl border border-neutral-200">
                  No plans found for this category.
                </div>
              )}
            </div>

            {/* Fallback Nav */}
            <div className="mt-16 text-center flex flex-col items-center">
               <p className="text-neutral-600 mb-6 font-medium">{t('plans.not_sure')}</p>
               <div className={`flex flex-wrap justify-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-medium transition-colors">
                    {t('plans.find_my_plan')}
                  </button>
                  <button className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 px-8 py-3.5 rounded-xl font-medium transition-colors">
                    {t('plans.explore_all')}
                  </button>
               </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
