// Since we cannot directly access rnr.goqii.com without known endpoints, we provide robust mock data.
// In a real scenario, this would be an actual fetch call.

export type PlanCategory = 'All Plans' | 'Chronic Care' | 'Lifestyle' | 'Mental Well-being';

export interface Plan {
  id: string;
  name: string;
  category: PlanCategory;
  shortDescription: string;
  features: string[];
  monthlyPrice: number;
  annualPrice: number;
  tag?: string;
  isPopular?: boolean;
}

const MOCK_PLANS: Plan[] = [
  {
    id: 'p1',
    name: 'Transform Core',
    category: 'Lifestyle',
    shortDescription: 'Essential tracking and coaching for everyday wellness.',
    features: ['Personalized fitness plan', 'Nutritional guidance', 'Weekly coach check-ins'],
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    isPopular: true,
    tag: 'Most Popular'
  },
  {
    id: 'p2',
    name: 'Diabetes Care',
    category: 'Chronic Care',
    shortDescription: 'Specialized management for blood sugar and metabolic health.',
    features: ['Doctor consultations', 'HbA1c tracking & analysis', 'Specialized dietitian support'],
    monthlyPrice: 49.99,
    annualPrice: 499.99,
    tag: 'Recommended'
  },
  {
    id: 'p3',
    name: 'Mind Plus',
    category: 'Mental Well-being',
    shortDescription: 'Focused on stress reduction, sleep, and mental clarity.',
    features: ['Guided meditation library', 'Stress index monitoring', 'Therapist sessions included'],
    monthlyPrice: 29.99,
    annualPrice: 299.99,
    tag: 'New'
  },
  {
    id: 'p4',
    name: 'Pro Athlete',
    category: 'Lifestyle',
    shortDescription: 'Advanced analytics and elite coaching for peak performance.',
    features: ['Daily readiness score', 'Elite performance coach', 'Detailed recovery metrics'],
    monthlyPrice: 39.99,
    annualPrice: 399.99
  }
];

export async function fetchPlans(country: string): Promise<Plan[]> {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      if (country === 'OTHER') {
        resolve([]);
        return;
      }
      // If we had an API we would do:
      // const res = await fetch(`https://rnr.goqii.com/api/plans?country=${country}`);
      // const data = await res.json();
      
      // We will adjust pricing roughly based on country for demonstration
      const adjustedPlans = MOCK_PLANS.map(plan => {
        let multiplier = 1;
        if (country === 'IN') multiplier = 80; // Rough conversion for demo
        if (country === 'UK') multiplier = 0.8;
        if (country === 'AE') multiplier = 3.67;

        return {
          ...plan,
          monthlyPrice: Math.round(plan.monthlyPrice * multiplier),
          annualPrice: Math.round(plan.annualPrice * multiplier)
        };
      });

      resolve(adjustedPlans);
    }, 800);
  });
}
