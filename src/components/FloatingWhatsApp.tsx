import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { openContactUsWhatsApp } from '../lib/whatsapp';

export function FloatingWhatsApp() {
  return (
    <motion.button
      id="floating-whatsapp-btn"
      onClick={() => openContactUsWhatsApp()}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-colors border-2 border-white/80 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline-block text-sm font-bold tracking-wide">
        Chat on WhatsApp
      </span>
    </motion.button>
  );
}
