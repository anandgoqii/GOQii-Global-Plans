// Since we cannot directly access rnr.goqii.com without known endpoints, we provide robust mock data.
// In a real scenario, this would be an actual fetch call.

export type PlanCategory = 'All Plans' | 'Chronic Care' | 'Lifestyle' | 'Mental Well-being';

export interface Plan {
  id: string;
  name: string;
  category: PlanCategory;
  shortDescription: string;
  image: string;
  features: string[];
  monthlyPrice: number;
  annualPrice: number;
  tag?: string;
  isPopular?: boolean;
}

const MOCK_PLANS: Plan[] = [
  {
    id: 'p2',
    name: 'Fitness & Weight',
    category: 'Lifestyle',
    shortDescription: 'Build better habits, improve fitness, and achieve sustainable weight goals.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    features: ['Personalized workouts', 'Nutrition guidance', 'Daily habit tracking'],
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    tag: 'Recommended'
  },
  {
    id: 'p1',
    name: 'Care & Control',
    category: 'Chronic Care',
    shortDescription: 'Ongoing support to manage conditions and stay in control of your health.',
    image: 'https://appcdn.goqii.com/storeimg/12462_1777289140.png',
    features: ['Dedicated health coach', 'Doctor guidance & check-ins', 'Continuous health tracking'],
    monthlyPrice: 49.99,
    annualPrice: 499.99,
    isPopular: true,
    tag: 'Most Popular'
  },
  {
    id: 'p3',
    name: 'Stress & Sleep',
    category: 'Mental Well-being',
    shortDescription: 'Improve mental clarity, reduce stress, and sleep better every day.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
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
        let image = plan.image;

        if (country === 'IN') {
          multiplier = 80;
          if (plan.id === 'p1') image = 'https://appcdn.goqii.com/storeimg/39727_1777456782.png';
        } else if (country === 'CN' || country === 'HK' || country === 'SG' || country === 'VN' || country === 'MY') {
          multiplier = 80;
          if (plan.id === 'p1') image = 'https://appcdn.goqii.com/storeimg/33014_1777456090.png';
        }
        if (country === 'UK' || country === 'DE' || country === 'FR' || country === 'IT' || country === 'ES') {
          multiplier = 0.8;
          if (plan.id === 'p1') image = 'https://appcdn.goqii.com/storeimg/96102_1777455808.png';
        }
        if (country === 'US') {
          multiplier = 1;
          if (plan.id === 'p1') image = 'https://appcdn.goqii.com/storeimg/74401_1777456050.png';
        }
        if (country === 'AE' || country === 'SA' || country === 'QA') {
          multiplier = 3.67;
          if (plan.id === 'p1') image = 'https://appcdn.goqii.com/storeimg/28715_1777455604.png';
        }

        return {
          ...plan,
          image,
          monthlyPrice: Math.round(plan.monthlyPrice * multiplier),
          annualPrice: Math.round(plan.annualPrice * multiplier)
        };
      });

      resolve(adjustedPlans);
    }, 800);
  });
}
