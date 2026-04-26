import { useState, useEffect } from 'react';
import { usePreferences } from '../context/PreferencesContext';
import { fetchPlans, Plan } from '../lib/api';

export function usePlan(category: string) {
  const { preferences } = usePreferences();
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchPlans(preferences.country).then((plans) => {
      if (mounted) {
        const found = plans.find(p => p.category === category);
        setPlan(found || plans[0]);
      }
    });
    return () => { mounted = false; };
  }, [preferences.country, category]);

  return plan;
}
