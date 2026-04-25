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
    name: 'Care & Control',
    category: 'Chronic Care',
    shortDescription: 'Ongoing support to manage conditions and stay in control of your health.',
    features: ['Dedicated health coach', 'Doctor guidance & check-ins', 'Continuous health tracking'],
    monthlyPrice: 49.99,
    annualPrice: 499.99,
    isPopular: true,
    tag: 'Most Popular'
  },
  {
    id: 'p2',
    name: 'Fitness & Weight',
    category: 'Lifestyle',
    shortDescription: 'Build better habits, improve fitness, and achieve sustainable weight goals.',
    features: ['Personalized workouts', 'Nutrition guidance', 'Daily habit tracking'],
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    tag: 'Recommended'
  },
  {
    id: 'p3',
    name: 'Stress & Sleep',
    category: 'Mental Well-being',
    shortDescription: 'Improve mental clarity, reduce stress, and sleep better every day.',
    features: ['Guided meditation', 'Sleep tracking & insights', 'Stress management tools'],
    monthlyPrice: 29.99,
    annualPrice: 299.99,
    tag: 'New'
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
