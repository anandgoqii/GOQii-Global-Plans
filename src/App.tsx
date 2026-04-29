/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PreferencesProvider } from './context/PreferencesContext';
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { PreferencesModal } from './components/PreferencesModal';
import { HomePage } from './components/HomePage';
import { ChronicCarePage } from './components/ChronicCarePage';
import { SuccessStoriesPage } from './components/SuccessStoriesPage';
import { AnimatePresence, motion } from 'motion/react';

import { ScrollToTop } from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <HomePage />
            </motion.div>
          } 
        />
        <Route 
          path="/chronic-care" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChronicCarePage />
            </motion.div>
          } 
        />
        <Route 
          path="/success-stories" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <SuccessStoriesPage />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-neutral-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen">
        <TopBar />
        <NavBar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <PreferencesModal />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <PreferencesProvider>
      <AppContent />
    </PreferencesProvider>
  );
}
