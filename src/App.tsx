/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PreferencesProvider } from './context/PreferencesContext';
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { PreferencesModal } from './components/PreferencesModal';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { HealthSystem } from './components/HealthSystem';
import { ConnectedAndDevices } from './components/ConnectedDevices';
import { ComparePlans, TrustedSecure } from './components/CompareAndSecure';
import { RealTimeAndResults, FooterCTA } from './components/RealTimeAndCTA';

function AppContent() {
  return (
    <div className="font-sans antialiased text-neutral-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col min-h-screen">
      <TopBar />
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <HealthSystem />
        <ConnectedAndDevices />
        <ComparePlans />
        <TrustedSecure />
        <RealTimeAndResults />
      </main>
      <FooterCTA />
      <PreferencesModal />
    </div>
  );
}

export default function App() {
  return (
    <PreferencesProvider>
      <AppContent />
    </PreferencesProvider>
  );
}
