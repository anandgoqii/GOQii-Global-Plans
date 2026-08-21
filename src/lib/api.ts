// Since we cannot directly access rnr.goqii.com without known endpoints, we provide robust mock data.
// In a real scenario, this would be an actual fetch call.

export type PlanCategory = 'All Plans' | 'Chronic Care' | 'Lifestyle' | 'Mental Well-being';

export interface Plan {
  id: string;
  name: string;
  category: PlanCategory;
  shortDescription: string;
  image?: string;
  features: string[];
  monthlyPrice?: number;
  annualPrice?: number;
  originalPrice?: string;
  savings?: string;
  price?: string;
  billing?: string;
  monthlyEquivalent?: string;
  quote?: string;
  tag?: string;
  badge?: string;
  isPopular?: boolean;
  variant?: 'standard' | 'premium' | 'weight-management' | 'diabetes-management' | 'fatty-liver' | 'womens-health' | 'heart-health' | 'gut-health' | 'lifestyle-management';
  cta?: string;
  includedHeading?: string;
}

const MOCK_PLANS: Plan[] = [
  {
    id: 'super-life',
    badge: 'PREMIUM PLAN',
    name: 'GOQii Super Life Program',
    category: 'Lifestyle',
    shortDescription: 'The science-led longevity program combining advanced diagnostics and expert coaching to help you live stronger, longer.',
    quote: 'Ask for a Quote',
    includedHeading: "WHAT'S INCLUDED:",
    features: [
      'Full Body Check-up + Gut / Genetic / NURA Diagnostics (based on plan)',
      'Personal Elite Coaching Panel (Nutrition, Fitness & Emotional Wellness)',
      'AI-Powered Quarterly Reports + Bio-Age Tracking',
      'SuperLife Welcome Kit',
      'OPD & Lab Wallet Credit',
      'All Benefits of Lifestyle Management'
    ],
    cta: 'Contact Us',
    variant: 'premium'
  },
  {
    id: 'weight-management',
    name: 'Weight Management Plan',
    category: 'Lifestyle',
    shortDescription: 'Personalized approach for sustainable weight loss and maintenance',
    originalPrice: '₹22,999',
    savings: 'SAVE 20%',
    price: '₹ 18,399',
    billing: 'Annual',
    monthlyEquivalent: '₹1,533 / month',
    includedHeading: "WHAT'S INCLUDED:",
    features: [
      'GOQii Tracker, BCA Scale & Resistance Band',
      'Holistic Health Plan by Certified Coaches, Nutritionists & Doctors',
      'Customized nutrition planning',
      'Portion control strategies',
      'Exercise routines for fat loss',
      'Weekly progress tracking',
      'Habit change coaching',
      'All Benefits of Lifestyle Management'
    ],
    cta: 'Select This Plan',
    variant: 'weight-management'
  },
  {
    id: 'diabetes-management',
    badge: 'MOST POPULAR',
    name: 'Diabetes Management',
    category: 'Chronic Care',
    shortDescription: 'Specialized coaching for Type 1 and Type 2 Diabetes',
    originalPrice: '₹24,999',
    savings: 'SAVE 20%',
    price: '₹ 19,999',
    billing: 'Annual',
    monthlyEquivalent: '₹1,667 / month',
    includedHeading: "WHAT'S INCLUDED:",
    features: [
      'GOQii Tracker & Glucometer',
      'Holistic Health Plan by Certified Coaches, Nutritionists & Doctors',
      'Lab Test for Output Markers: 2 Hba1c Test',
      'Blood glucose monitoring guidance',
      'Nutrition planning for glycemic control',
      'Exercise plans for insulin sensitivity',
      'Medication adherence support',
      'Weekly coaching sessions'
    ],
    cta: 'Select This Plan',
    variant: 'diabetes-management'
  },
  {
    id: 'fatty-liver',
    name: 'Fatty Liver Plan',
    category: 'Chronic Care',
    shortDescription: 'Comprehensive coaching for NAFLD and FLD management',
    originalPrice: '₹25,999',
    savings: 'SAVE 20%',
    price: '₹ 20,799',
    billing: 'Annual',
    monthlyEquivalent: '₹1,733 / month',
    includedHeading: "WHAT'S INCLUDED:",
    features: [
      'GOQii Tracker, BCA Scale',
      'Holistic Health Plan by Certified Coaches, Nutritionists & Doctors',
      'Lab Test for Output Markers: 2 Liver Profile Test',
      'Diet modifications for liver health',
      'Exercise for liver function',
      'Progress monitoring with biomarkers',
      'Weekly coaching sessions',
      'All Benefits of Lifestyle Management'
    ],
    cta: 'Select This Plan',
    variant: 'fatty-liver'
  },
  {
    id: 'womens-health',
    name: "Women's Health Plan",
    category: 'Chronic Care',
    shortDescription: 'Specialized support for PCOS, thyroid, and reproductive health',
    originalPrice: '₹24,999',
    savings: 'SAVE 20%',
    price: '₹ 19,999',
    billing: 'Annual',
    monthlyEquivalent: '₹1,667 / month',
    includedHeading: "WHAT'S INCLUDED:",
    features: [
      'GOQii Tracker, BCA Scale',
      'Holistic Health Plan by Certified Coaches, Nutritionists & Doctors',
      'Lab Test for Output Markers: TMT',
      'Hormone balance nutrition strategies',
      'PCOS/PCOD symptom management',
      'Thyroid health optimization',
      'Fertility and pregnancy nutrition',
      'Bi-weekly specialist consultations',
      'All Benefits of Lifestyle Management'
    ],
    cta: 'Select This Plan',
    variant: 'womens-health'
  },
  {
    id: 'heart-health',
    name: 'Heart Health Plan',
    category: 'Chronic Care',
    shortDescription: 'Coaching for cholesterol management and blood pressure control',
    originalPrice: '₹25,999',
    savings: 'SAVE 20%',
    price: '₹ 20,799',
    billing: 'Annual',
    monthlyEquivalent: '₹1,733 / month',
    includedHeading: "WHAT'S INCLUDED:",
    features: [
      'GOQii Tracker & BP Monitor',
      'Holistic Health Plan by Certified Coaches, Nutritionists & Doctors',
      'Cardiovascular risk assessment',
      'Heart-healthy diet planning',
      'Cardiac-appropriate exercise',
      'Blood pressure management strategies',
      'Cholesterol-lowering techniques',
      'All Benefits of Lifestyle Management'
    ],
    cta: 'Select This Plan',
    variant: 'heart-health'
  },
  {
    id: 'gut-health',
    name: 'Gut Health Plan',
    category: 'Chronic Care',
    shortDescription: 'Relief from digestive issues including IBS, GERD and IBD',
    originalPrice: '₹23,999',
    savings: 'SAVE 20%',
    price: '₹ 19,199',
    billing: 'Annual',
    monthlyEquivalent: '₹1,600 / month',
    includedHeading: "WHAT'S INCLUDED:",
    features: [
      'GOQii Tracker',
      'Holistic Health Plan by Certified Coaches, Nutritionists & Doctors',
      'USG Abdomen & Pelvis (Included)',
      'Food triggers identification',
      'Anti-inflammatory diet strategies',
      'GERD and acid reflux management',
      'IBS/IBD symptom relief protocols',
      'All Benefits of Lifestyle Management'
    ],
    cta: 'Select This Plan',
    variant: 'gut-health'
  },
  {
    id: 'lifestyle-management',
    name: 'Lifestyle Management',
    category: 'Lifestyle',
    shortDescription: 'General wellness, stress management, and preventive health coaching',
    originalPrice: '₹15,999',
    savings: 'SAVE 20%',
    price: '₹ 12,999',
    billing: 'Annual',
    monthlyEquivalent: '₹1,067 / month',
    includedHeading: "WHAT'S INCLUDED:",
    features: [
      'GOQii Tracker',
      'Personal Health Coach (Unlimited Chat + 2 Audio / Video Calls per month)',
      'Structured Weekly Plan for Improvement of Lifestyle',
      'Weekly Tailored Diet Plan & Exercise Plan',
      'Monthly Progress Report to track health improvements',
      '100 PRO Classes for supervised workouts',
      'Expert Call (1 per month)',
      'Upto Rs. 5 Lacs Health Insurance Cover',
      '1 Full Body Check-up covering 65 parameters',
      '₹2000 Wallet balance for Blood Tests to manage health metrics',
      '₹2000 Wallet balance for In-Clinic Doctor Consultations',
      'Unlimited App Access (Nutrigenius - Advanced Calorie Tracking with AI inputs, Learning (Videos and Blogs))'
    ],
    cta: 'Select This Plan',
    variant: 'lifestyle-management'
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
          monthlyPrice: plan.monthlyPrice ? Math.round(plan.monthlyPrice * multiplier) : undefined,
          annualPrice: plan.annualPrice ? Math.round(plan.annualPrice * multiplier) : undefined
        };
      });

      resolve(adjustedPlans);
    }, 800);
  });
}
