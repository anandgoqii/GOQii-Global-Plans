import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      isFirstRender.current = false;
      return;
    }

    // Wait for a few frames to allow AnimatePresence to start and layout to settle
    const timer = setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      
      // For page transitions, scroll to top smoothly
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
