import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

const SmoothScroll = () => {
  const location = useLocation();
  const lenisRef = useRef(null);
  const prevPathnameRef = useRef(location.pathname);

  // 1. Lenis Initialize කිරීම
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Fix: One-Shot Section Landing Logic
  useEffect(() => {
    if (!lenisRef.current) return;

    const performScroll = (isImmediate = false) => {
      lenisRef.current.resize(); 

      if (location.hash) {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          lenisRef.current.scrollTo(targetElement, {
            offset: 0, // 👈 උඹ සෙට් කරපු පරිදීම 0 දුන්නා
            duration: isImmediate ? 0 : 1.2,
            immediate: isImmediate, // True වුනොත් ඇනිමේෂන් නැතුව කෙලින්ම එතනට යනවා
            force: true
          });
        }
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
      }
    };

    // 💡 කේස් 1: දැනටමත් හෝම් පේජ් එකේ ඉඳන් සෙක්ෂන් එකක් ක්ලික් කරොත් (Smooth scroll වෙනවා)
    if (location.pathname === '/' && prevPathnameRef.current === '/') {
      const instantTimeout = setTimeout(() => {
        performScroll(false);
      }, 50);
      return () => clearTimeout(instantTimeout);
    } 
    // 💡 කේස් 2: වෙන පේජ් එකක (Demo/Features) ඉඳන් හෝම් පේජ් එකේ සෙක්ෂන් එකකට එද්දී
    else if (location.pathname === '/' && prevPathnameRef.current !== '/') {
      
      // ලෝඩින් ස්ක්‍රීන් එක අස්සේ සෙක්ෂන් එක DOM එකට එනකන් පොඩි මිලිසෙකන්ඩ් 100ක delay එකකින් 
      // ඇනිමේෂන් එකක් නැතුව කෙලින්ම (One-shot) එතනට සෙට් කරනවා.
      const quickTimeout = setTimeout(() => {
        performScroll(true);
      }, 100);

      // ලෝඩින් එක ඉවර වුණාම ආයේ පාරක් සේෆ්ටි එකට රීසයිස් පාරක් දානවා
      const finalTimeout = setTimeout(() => {
        lenisRef.current.resize();
      }, 1450);

      return () => {
        clearTimeout(quickTimeout);
        clearTimeout(finalTimeout);
      };
    }
    // 💡 කේස් 3: සාමාන්‍ය වෙනත් පේජ් එකකට යද්දී
    else {
      performScroll(true);
    }

  }, [location.pathname, location.hash]);

  useEffect(() => {
    prevPathnameRef.current = location.pathname;
  }, [location.pathname]);

  return null;
};

export default SmoothScroll;