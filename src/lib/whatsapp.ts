/**
 * WhatsApp Helper Utilities for GOQii Health Plans
 */

// Official / standard GOQii WhatsApp support line
export const GOQII_WHATSAPP_NUMBER = '918880008888';

/**
 * Open WhatsApp with a custom message
 */
export function openWhatsApp(message: string) {
  const cleanNumber = GOQII_WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  const url = `https://wa.me/${cleanNumber}?text=${encodedText}`;
  
  // Open in a new tab/window safely
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Open WhatsApp when a user clicks "Select This Plan"
 */
export function openPlanWhatsApp(planTitle: string, price?: string, billing?: string) {
  const priceInfo = price ? ` (${price}${billing ? ` / ${billing}` : ''})` : '';
  const message = `Hi GOQii Team, I am interested in the ${planTitle}${priceInfo}. Please assist me with the plan details and enrollment.`;
  openWhatsApp(message);
}

/**
 * Open WhatsApp when a user clicks "Contact Us"
 */
export function openContactUsWhatsApp(context?: string) {
  const message = context 
    ? `Hi GOQii Team, I would like to speak with a Health Advisor regarding ${context}.`
    : `Hi GOQii Team, I would like to connect with a GOQii Health Advisor to find the right health plan for me.`;
  openWhatsApp(message);
}
