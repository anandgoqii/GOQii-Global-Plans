import { Hero } from './Hero';
import { ScatteredVsSimple } from './ScatteredVsSimple';
import { FeatureGrid } from './FeatureGrid';
import { HowItWorks } from './HowItWorks';
import { HealthSystem } from './HealthSystem';
import { ConnectedAndDevices } from './ConnectedDevices';
import { ComparePlans, TrustedSecure } from './CompareAndSecure';
import { RealTimeAndResults, FooterCTA } from './RealTimeAndCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <ScatteredVsSimple />
      <FeatureGrid />
      <HowItWorks />
      <HealthSystem />
      <ConnectedAndDevices />
      <ComparePlans />
      <TrustedSecure />
      <RealTimeAndResults />
      <FooterCTA />
    </>
  );
}
