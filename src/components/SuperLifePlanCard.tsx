import { Check, ArrowRight } from 'lucide-react';
import { openContactUsWhatsApp } from '../lib/whatsapp';

export interface SuperLifePlanData {
  id?: string;
  badge?: string;
  title: string;
  description: string;
  quote: string;
  sectionLabel?: string;
  features: string[];
  cta: string;
  variant?: 'premium' | 'standard';
}

export const SUPER_LIFE_PLAN_DATA: SuperLifePlanData = {
  id: 'super-life',
  badge: 'PREMIUM PLAN',
  title: 'GOQii Super Life Program',
  description: 'The science-led longevity program combining advanced diagnostics and expert coaching to help you live stronger, longer.',
  quote: 'Ask for a Quote',
  sectionLabel: "WHAT'S INCLUDED:",
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
};

// Sub-components for strict modularity
export function PlanBadge({ label = 'PREMIUM PLAN' }: { label?: string }) {
  return (
    <div 
      id="plan-badge-premium"
      className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 bg-[#122033] text-white px-4 py-1 text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase rounded-full shadow-sm border border-neutral-700 select-none whitespace-nowrap"
    >
      {label}
    </div>
  );
}

export function PlanTitle({ title }: { title: string }) {
  return (
    <h3 
      id="super-life-title"
      className="text-[20px] sm:text-[22px] font-bold text-neutral-900 leading-snug tracking-tight mb-2.5"
    >
      {title}
    </h3>
  );
}

export function PlanDescription({ description }: { description: string }) {
  return (
    <p 
      id="super-life-description"
      className="text-[13px] sm:text-[13.5px] text-neutral-700 leading-relaxed mb-6 font-normal"
    >
      {description}
    </p>
  );
}

export function QuoteLabel({ quote }: { quote: string }) {
  return (
    <div id="super-life-quote-wrapper" className="mb-6 pt-1 pb-1">
      <span className="text-[18px] sm:text-[20px] font-bold text-neutral-900 tracking-tight block">
        {quote}
      </span>
    </div>
  );
}

export function IncludedHeading({ label = "WHAT'S INCLUDED:" }: { label?: string }) {
  return (
    <div id="super-life-included-heading" className="mb-4">
      <span className="text-[11px] sm:text-[12px] font-bold tracking-wider text-neutral-600 uppercase">
        {label}
      </span>
    </div>
  );
}

export function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-neutral-800">
      <div 
        className="w-[20px] h-[20px] sm:w-[21px] sm:h-[21px] rounded-full bg-[#B95512] flex items-center justify-center shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white stroke-[2.5]" />
      </div>
      <span className="text-[13px] sm:text-[13.5px] font-normal leading-snug text-neutral-800">
        {text}
      </span>
    </li>
  );
}

export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul id="super-life-features" className="space-y-3 sm:space-y-3.5 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <FeatureItem key={idx} text={feature} />
      ))}
    </ul>
  );
}

export function ContactButton({ 
  label = 'Contact Us', 
  onClick 
}: { 
  label?: string; 
  onClick: () => void;
}) {
  return (
    <button
      id="super-life-contact-btn"
      type="button"
      onClick={onClick}
      className="w-full min-h-[44px] sm:min-h-[48px] py-3 px-6 rounded-xl sm:rounded-2xl bg-[#B95512] hover:bg-[#9C450D] active:bg-[#853B0B] text-white text-[14px] sm:text-[15px] font-semibold transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#B95512] focus:ring-offset-2 mt-auto"
    >
      <span>{label}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}

export function SuperLifePlanCard({
  plan = SUPER_LIFE_PLAN_DATA,
  className = '',
  onSelect
}: {
  plan?: SuperLifePlanData;
  className?: string;
  onSelect?: (planId: string) => void;
}) {
  const handleContactClick = () => {
    if (onSelect) {
      onSelect(plan.id || 'super-life');
    }
    openContactUsWhatsApp(plan.title);
  };

  return (
    <article
      id="super-life-plan-card"
      aria-label={plan.title}
      className={`relative flex flex-col w-full max-w-[390px] mx-auto bg-[#FFF3C9] border border-[#B95512] rounded-[24px] p-6 sm:p-7 shadow-md text-left ${className}`}
    >
      {/* PlanBadge */}
      {plan.badge && <PlanBadge label={plan.badge} />}

      {/* PlanTitle */}
      <PlanTitle title={plan.title} />

      {/* PlanDescription */}
      <PlanDescription description={plan.description} />

      {/* QuoteLabel */}
      <QuoteLabel quote={plan.quote} />

      {/* IncludedHeading */}
      <IncludedHeading label={plan.sectionLabel || "WHAT'S INCLUDED:"} />

      {/* FeatureList */}
      <FeatureList features={plan.features} />

      {/* ContactButton */}
      <ContactButton label={plan.cta} onClick={handleContactClick} />
    </article>
  );
}
