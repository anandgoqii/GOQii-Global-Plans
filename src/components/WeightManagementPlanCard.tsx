import { Check, ArrowRight } from 'lucide-react';
import { openPlanWhatsApp } from '../lib/whatsapp';

export interface WeightManagementPlanData {
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
  variant?: 'weight-management' | 'standard' | 'premium';
}

export const WEIGHT_MANAGEMENT_PLAN_DATA: WeightManagementPlanData = {
  id: 'weight-management',
  title: 'Weight Management Plan',
  description: 'Personalized approach for sustainable weight loss and maintenance',
  originalPrice: '₹22,999',
  savings: 'SAVE 20%',
  price: '₹ 18,399',
  billing: 'Annual',
  monthlyPrice: '₹1,533 / month',
  sectionLabel: "WHAT'S INCLUDED:",
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
};

// Modular Sub-Components
export function PlanTitle({ title }: { title: string }) {
  return (
    <h3 
      id="weight-plan-title"
      className="text-[18px] sm:text-[19px] font-bold text-[#1557D6] leading-snug tracking-tight mb-1.5"
    >
      {title}
    </h3>
  );
}

export function PlanDescription({ description }: { description: string }) {
  return (
    <p 
      id="weight-plan-description"
      className="text-[12px] sm:text-[12.5px] text-[#61708A] leading-[1.4] mb-4 font-normal"
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
    <div id="weight-plan-pricing-section" className="mb-4 pb-1">
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
    <div id="weight-plan-included-heading" className="mb-3 pt-2 border-t border-neutral-200">
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
        className="w-[16px] h-[16px] sm:w-[17px] sm:h-[17px] rounded-full bg-[#1557D6] flex items-center justify-center shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white stroke-[2.5]" />
      </div>
      <span className="text-[11.5px] sm:text-[12px] font-normal leading-[1.4] text-[#122033]">
        {text}
      </span>
    </li>
  );
}

export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul id="weight-plan-features" className="space-y-2.5 sm:space-y-3 mb-6 flex-grow">
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
      id="weight-plan-select-btn"
      type="button"
      onClick={onClick}
      className="w-full min-h-[44px] py-2.5 px-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#F4F8FF] active:bg-[#E8F0FE] text-[#122033] border border-neutral-200 hover:border-[#1557D6] text-[12.5px] sm:text-[13px] font-semibold transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#1557D6] focus:ring-offset-2 mt-auto"
    >
      <span>{label}</span>
      <ArrowRight className="w-3.5 h-3.5 text-[#1557D6]" />
    </button>
  );
}

export function WeightManagementPlanCard({
  plan = WEIGHT_MANAGEMENT_PLAN_DATA,
  className = '',
  onSelect
}: {
  plan?: WeightManagementPlanData;
  className?: string;
  onSelect?: (planId: string) => void;
}) {
  const handleSelectClick = () => {
    if (onSelect) {
      onSelect(plan.id || 'weight-management');
    }
    openPlanWhatsApp(plan.title, plan.price, plan.billing);
  };

  return (
    <article
      id="weight-management-plan-card"
      aria-label={plan.title}
      className={`relative flex flex-col w-full max-w-[360px] sm:max-w-[380px] mx-auto bg-white border border-neutral-200 hover:border-[#1557D6] rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all text-left ${className}`}
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
