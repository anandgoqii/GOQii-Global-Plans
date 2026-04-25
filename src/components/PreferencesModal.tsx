import { X } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India', flag: '🇮🇳', currency: '₹' },
  { code: 'US', name: 'United States', flag: '🇺🇸', currency: '$' },
  { code: 'UK', name: 'United Kingdom', flag: '🇬🇧', currency: '£' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', currency: 'د.إ' },
  { code: 'OTHER', name: 'Other Region', flag: '🌍', currency: '$' },
];

const LANGUAGE_OPTIONS = [
  { code: 'EN', name: 'English' },
  { code: 'HI', name: 'Hindi' },
  { code: 'ES', name: 'Spanish' },
  { code: 'AR', name: 'Arabic' },
];

export function PreferencesModal() {
  const { preferences, setPreferences, isModalOpen, setIsModalOpen } = usePreferences();
  
  const [localCountry, setLocalCountry] = useState(preferences.country);
  const [localLanguage, setLocalLanguage] = useState(preferences.language);

  // Sync when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setLocalCountry(preferences.country);
      setLocalLanguage(preferences.language);
    }
  }, [isModalOpen, preferences]);

  const handleSave = () => {
    const selectedCountry = COUNTRY_OPTIONS.find(c => c.code === localCountry)!;
    setPreferences({
      country: localCountry as any,
      countryName: selectedCountry.name,
      flag: selectedCountry.flag,
      currency: selectedCountry.currency,
      language: localLanguage as any,
    });
    setIsModalOpen(false);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">Select your country and language</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 -mr-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country / Region</label>
                  <select 
                    value={localCountry}
                    onChange={(e) => setLocalCountry(e.target.value as any)}
                    className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-lg px-4 py-3 appearance-none outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all font-medium"
                  >
                    {COUNTRY_OPTIONS.map(c => (
                      <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Language</label>
                  <select 
                    value={localLanguage}
                    onChange={(e) => setLocalLanguage(e.target.value as any)}
                    className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-lg px-4 py-3 appearance-none outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all font-medium"
                  >
                    {LANGUAGE_OPTIONS.map(l => (
                      <option key={l.code} value={l.code}>{l.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-neutral-500 mb-4 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                    Note: Plans and pricing will update based on your selection.
                  </p>
                  <button 
                    onClick={handleSave}
                    className="w-full bg-neutral-900 text-white hover:bg-neutral-800 py-3.5 rounded-xl font-medium transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
