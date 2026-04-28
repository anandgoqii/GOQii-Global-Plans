import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NAV_LINKS = [
  { name: 'Plans', href: '/#plans' },
  { name: 'How it Works', href: '/#how-it-works' },
  { name: 'Success Stories', href: '/#success-stories' },
];

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.plans'), href: '/#plans' },
    { name: t('nav.how_it_works'), href: '/#how-it-works' },
    { name: t('nav.success_stories'), href: '/#success-stories' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="https://appcdn.goqii.com/storeimg/61311_1777280859.png" 
                alt="GOQii" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang.name}</span>
              </button>
              
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-white border border-neutral-200 rounded-xl shadow-xl overflow-hidden py-1"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 transition-colors flex items-center gap-2 ${i18n.language === lang.code ? 'text-blue-600 font-bold bg-blue-50' : 'text-neutral-700'}`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                {t('nav.login')}
              </a>
              <a href="/#plans" className="bg-neutral-900 text-white hover:bg-neutral-800 px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                {t('nav.get_started')}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Language Switcher (Simple icons) */}
            <div className="flex items-center gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${i18n.language === lang.code ? 'bg-neutral-100 ring-2 ring-neutral-200' : ''}`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-neutral-900 focus:outline-none p-3 -mr-3 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-neutral-100 pt-4 pb-2 space-y-3">
                 <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                >
                  {t('nav.login')}
                </a>
                <a href="/#plans" className="w-full text-center bg-neutral-900 text-white hover:bg-neutral-800 px-5 py-3 rounded-xl text-base font-medium transition-colors block">
                  {t('nav.get_started')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
