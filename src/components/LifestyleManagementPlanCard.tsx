import { Check, ArrowRight } from 'lucide-react';
import { openPlanWhatsApp } from '../lib/whatsapp';

export interface LifestyleManagementPlanData {
  id?: string;
  title: string;
  description: string;
  originalPrice: string;
  savings: string;
  price: string;
  billing: string;
  monthlyPrice: string;
  sectionLabel?: string;
  features: string[];
  cta: string;
  variant?: 'lifestyle-management' | 'gut-health' | 'heart-health' | 'womens-health' | 'fatty-liver' | 'diabetes-management' | 'weight-management' | 'standard' | 'premium';
}

export const LIFESTYLE_MANAGEMENT_PLAN_DATA: LifestyleManagementPlanData = {
  id: 'lifestyle-management',
  title: 'Lifestyle Management',
  description: 'General wellness, stress management, and preventive health coaching',
  originalPrice: '₹15,999',
  savings: 'SAVE 20%',
  price: '₹ 12,999',
  billing: 'Annual',
  monthlyPrice: '₹1,067 / month',
  sectionLabel: "WHAT'S INCLUDED:",
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
};

// Modular Sub-Components
export function PlanTitle({ title }: { title: string }) {
  return (
    <h3 
      id="lifestyle-management-plan-title"
      className="text-[17px] sm:text-[18.5px] font-bold text-[#217F76] leading-snug tracking-tight mb-1.5"
    >
      {title}
    </h3>
  );
}

export function PlanDescription({ description }: { description: string }) {
  return (
    <p 
      id="lifestyle-management-plan-description"
      className="text-[11.5px] sm:text-[12px] text-[#61708A] leading-[1.4] mb-4 font-normal"
    >
      {description}
    </p>
  );
}

export function Pricing({ 
  originalPrice, 
  savings, 
  price, 
  billing, 
  monthlyPrice 
}: { 
  originalPrice: string; 
  savings: string; 
  price: string; 
  billing: string; 
  monthlyPrice: string; 
}) {
  return (
    <div id="lifestyle-management-plan-pricing-section" className="mb-4 pb-1">
      {/* Original price + Savings badge */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11px] sm:text-[12px] text-[#8A99AD] line-through font-normal">
          {originalPrice}
        </span>
        <span className="bg-[#DCFCE7] text-[#166534] text-[9.5px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
          {savings}
        </span>
      </div>

      {/* Offer Price + Annual */}
      <div className="flex items-baseline gap-2 mb-0.5">
        <span className="text-[25px] sm:text-[27px] font-bold text-[#122033] tracking-tight leading-none">
          {price}
        </span>
        <span className="text-[11px] sm:text-[12px] text-[#61708A] font-normal">
          {billing}
        </span>
      </div>

      {/* Monthly equivalent */}
      <div className="text-[10.5px] sm:text-[11px] text-[#61708A] font-normal">
        {monthlyPrice}
      </div>
    </div>
  );
}

export function IncludedHeading({ label = "WHAT'S INCLUDED:" }: { label?: string }) {
  return (
    <div id="lifestyle-management-plan-included-heading" className="mb-3 pt-2 border-t border-neutral-200">
      <span className="text-[10.5px] sm:text-[11px] font-bold tracking-wider text-[#61708A] uppercase">
        {label}
      </span>
    </div>
  );
}

export function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-[#122033]">
      <div 
        className="w-[16px] h-[16px] rounded-full bg-[#217F76] flex items-center justify-center shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <Check className="w-2.5 h-2.5 text-white stroke-[2.5]" />
      </div>
      <span className="text-[11px] sm:text-[11.5px] font-normal leading-[1.38] text-[#122033]">
        {text}
      </span>
    </li>
  );
}

export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul id="lifestyle-management-plan-features" className="space-y-2 sm:space-y-2.5 mb-6 flex-grow">
      {features.map((feature, idx) => (
        <FeatureItem key={idx} text={feature} />
      ))}
    </ul>
  );
}

export function SelectPlanButton({ 
  label = 'Select This Plan', 
  onClick 
}: { 
  label?: string; 
  onClick: () => void; 
}) {
  return (
    <button
      id="lifestyle-management-plan-select-btn"
      type="button"
      onClick={onClick}
      className="w-full min-h-[44px] py-2.5 px-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#E8F8F5] active:bg-[#D5F2ED] text-[#122033] border border-neutral-200 hover:border-[#217F76] text-[12.5px] sm:text-[13px] font-semibold transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#217F76] focus:ring-offset-2 mt-auto"
    >
      <span>{label}</span>
      <ArrowRight className="w-3.5 h-3.5 text-[#217F76]" />
    </button>
  );
}

export function LifestyleManagementPlanCard({
  plan = LIFESTYLE_MANAGEMENT_PLAN_DATA,
  className = '',
  onSelect
}: {
  plan?: LifestyleManagementPlanData;
  className?: string;
  onSelect?: (planId: string) => void;
}) {
  const handleSelectClick = () => {
    if (onSelect) {
      onSelect(plan.id || 'lifestyle-management');
    }
    openPlanWhatsApp(plan.title, plan.price, plan.billing);
  };

  return (
    <article
      id="lifestyle-management-plan-card"
      aria-label={plan.title}
      className={`relative flex flex-col w-full max-w-[360px] sm:max-w-[380px] mx-auto bg-white border border-neutral-200 hover:border-[#217F76] rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all text-left ${className}`}
    >
      {/* PlanTitle */}
      <PlanTitle title={plan.title} />

      {/* PlanDescription */}
      <PlanDescription description={plan.description} />

      {/* Pricing Section */}
      <Pricing 
        originalPrice={plan.originalPrice}
        savings={plan.savings}
        price={plan.price}
        billing={plan.billing}
        monthlyPrice={plan.monthlyPrice}
      />

      {/* IncludedHeading */}
      <IncludedHeading label={plan.sectionLabel || "WHAT'S INCLUDED:"} />

      {/* FeatureList */}
      <FeatureList features={plan.features} />

      {/* SelectPlanButton */}
      <SelectPlanButton label={plan.cta} onClick={handleSelectClick} />
    </article>
  );
}
