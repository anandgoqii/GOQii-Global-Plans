/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PreferencesProvider } from './context/PreferencesContext';
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { PreferencesModal } from './components/PreferencesModal';
import { HomePage } from './components/HomePage';
import { ChronicCarePage } from './components/ChronicCarePage';

function AppContent() {
  return (
    <Router>
      <div className="font-sans antialiased text-neutral-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen">
        <TopBar />
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chronic-care" element={<ChronicCarePage />} />
          </Routes>
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
