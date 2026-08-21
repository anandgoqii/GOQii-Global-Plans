import { createContext, useContext, useState, ReactNode } from 'react';

type CountryCode = 'US' | 'IN' | 'UK' | 'AE' | 'HK' | 'CN' | 'SG' | 'VN' | 'MY' | 'DE' | 'FR' | 'IT' | 'ES' | 'SA' | 'QA' | 'OTHER';
type LanguageCode = 'EN' | 'ES' | 'HI' | 'AR' | 'ZH';

interface Preferences {
  country: CountryCode;
  countryName: string;
  language: LanguageCode;
  currency: string;
  flag: string;
}

interface PreferencesContextType {
  preferences: Preferences;
  setPreferences: (prefs: Partial<Preferences>) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  isLeadModalOpen: boolean;
  leadProduct: string;
  openLeadModal: (productName?: string) => void;
  closeLeadModal: () => void;
}

const defaultPreferences: Preferences = {
  country: 'IN',
  countryName: 'India',
  language: 'EN',
  currency: '₹',
  flag: '🇮🇳'
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferencesState] = useState<Preferences>(defaultPreferences);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadProduct, setLeadProduct] = useState('GOQii Super Life Program');

  const setPreferences = (prefs: Partial<Preferences>) => {
    setPreferencesState((prev) => ({ ...prev, ...prefs }));
  };

  const openLeadModal = (productName = 'GOQii Super Life Program') => {
    setLeadProduct(productName);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
  };

  return (
    <PreferencesContext.Provider 
      value={{ 
        preferences, 
        setPreferences, 
        isModalOpen, 
        setIsModalOpen,
        isLeadModalOpen,
        leadProduct,
        openLeadModal,
        closeLeadModal
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
