import { usePreferences } from '../context/PreferencesContext';
import { ChronicHero } from './ChronicHero';
import { ChronicFeatures } from './ChronicFeatures';
import { ChronicConnected } from './ChronicConnected';
import { ChronicSteps } from './ChronicSteps';
import { ChronicResults } from './ChronicResults';
import { ChronicFAQAndCTA } from './ChronicFAQ';
import { useEffect, useState } from 'react';
import { fetchPlans } from '../lib/api';
import { Loader2 } from 'lucide-react';

export function ChronicCarePage() {
  const { preferences, setIsModalOpen } = usePreferences();
  const [hasPlans, setHasPlans] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    setHasPlans(null);
    fetchPlans(preferences.country).then((plans) => {
      if (mounted) {
        setHasPlans(plans.length > 0);
      }
    });
    return () => { mounted = false; };
  }, [preferences.country]);

  if (hasPlans === null) {
     return <div className="py-32 flex justify-center"><Loader2 className="w-10 h-10 animate-spin text-neutral-400" /></div>;
  }

  if (hasPlans === false) {
     return (
       <div className="py-40 flex flex-col items-center justify-center px-4 text-center">
         <h2 className="text-4xl font-bold mb-4 text-neutral-900 tracking-tight">Plans not available in your region yet</h2>
         <p className="text-xl text-neutral-500 mb-10 max-w-sm font-medium">We’re expanding globally. Try another location.</p>
         <button onClick={() => setIsModalOpen(true)} className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-bold transition-colors">
           Change Country
         </button>
       </div>
     );
  }

  return (
    <>
      <ChronicHero />
      <ChronicFeatures />
      <ChronicConnected />
      <ChronicSteps />
      <ChronicResults />
      <ChronicFAQAndCTA />
    </>
  );
}
