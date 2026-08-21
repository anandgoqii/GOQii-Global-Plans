import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, Sparkles, Phone, Mail, User, MapPin, MessageCircle } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { openWhatsApp } from '../lib/whatsapp';

export function LeadModal() {
  const { isLeadModalOpen, leadProduct, closeLeadModal, preferences } = usePreferences();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: preferences.countryName || 'India',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isLeadModalOpen) {
      setSubmitted(false);
      setIsSubmitting(false);
      setFormData(prev => ({
        ...prev,
        country: preferences.countryName || 'India'
      }));
    }
  }, [isLeadModalOpen, preferences.countryName]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLeadModalOpen) {
        closeLeadModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLeadModalOpen, closeLeadModal]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission to GOQii 2.0 CRM/Lead engine
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <AnimatePresence>
      {isLeadModalOpen && (
        <div 
          id="lead-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm"
          onClick={closeLeadModal}
        >
          <motion.div
            id="lead-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden relative"
          >
            {/* Header with Top Accent */}
            <div className="bg-gradient-to-r from-[#FFF3C9] to-[#FFEAB0] border-b border-[#E8D49E] px-6 sm:px-8 pt-6 pb-5 relative">
              <button
                id="close-lead-modal-btn"
                onClick={closeLeadModal}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B95512]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#1D4ED8] text-white text-[11px] font-bold uppercase tracking-wider">
                  GOQii 2.0 Longevity
                </span>
                <span className="flex items-center gap-1 text-[12px] font-semibold text-[#B95512]">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Consultation
                </span>
              </div>

              <h2 id="lead-modal-title" className="text-2xl font-bold text-neutral-900 tracking-tight">
                Request a Quote & Consultation
              </h2>
              <p className="text-sm text-neutral-700 mt-1">
                Selected Program: <span className="font-semibold text-neutral-900">{leadProduct}</span>
              </p>
            </div>

            {/* Body / Form */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                  <p className="text-neutral-600 max-w-sm mx-auto mb-6 text-sm">
                    Your request for the <strong className="text-neutral-900">{leadProduct}</strong> has been received. A GOQii Longevity Care Specialist will contact you within 24 hours with custom diagnostics options and tailored quotes.
                  </p>
                  <button
                    onClick={closeLeadModal}
                    className="bg-[#B95512] hover:bg-[#9C450D] text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B95512] focus:ring-offset-2"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="lead-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-[#B95512] focus:ring-1 focus:ring-[#B95512] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-[#B95512] focus:ring-1 focus:ring-[#B95512] outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lead-phone" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-[#B95512] focus:ring-1 focus:ring-[#B95512] outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-country" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Country / Region
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="lead-country"
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="Country"
                        className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-[#B95512] focus:ring-1 focus:ring-[#B95512] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Health Goals / Diagnostics Preferences (Optional)
                    </label>
                    <textarea
                      id="lead-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about specific diagnostics of interest (e.g. Gut microbiome, Genetic testing, NURA AI scan, Bio-age optimization)..."
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-[#B95512] focus:ring-1 focus:ring-[#B95512] outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 space-y-2.5">
                    <button
                      id="submit-lead-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#B95512] hover:bg-[#9C450D] disabled:opacity-70 text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B95512] focus:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="relative flex items-center justify-center my-2">
                      <div className="border-t border-neutral-200 w-full"></div>
                      <span className="bg-white px-3 text-[11px] font-medium text-neutral-400 uppercase tracking-wider">or</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        openWhatsApp(`Hi GOQii Team, I am inquiring about the ${leadProduct}. Please provide more details.`);
                      }}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Instantly on WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-500 text-center mt-2">
                    🔒 Your health data and privacy are strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
