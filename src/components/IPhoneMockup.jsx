import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import screen1 from '../assets/screen1.jpg';
import screen2 from '../assets/screen2.jpg';
import screen3 from '../assets/screen3.jpg';
import screen4 from '../assets/screen4.jpg';

const SCREENS = [screen1, screen2, screen3, screen4];

function IPhoneMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Preload all screens so transitions never show a temporary black frame.
    Promise.all(
      SCREENS.map(
        (src) =>
          new Promise((resolve) => {
            const image = new Image();
            image.src = src;
            image.onload = resolve;
            image.onerror = resolve;
          })
      )
    ).then(() => {
      if (isMounted) {
        setImagesReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!imagesReady) {
      return undefined;
    }

    // Screen slider logic: normal rotation pace for smooth product preview.
    const slideTimer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SCREENS.length);
    }, 2800);

    return () => window.clearInterval(slideTimer);
  }, [imagesReady]);

  return (
    <div className="mockup-wrapper">
      <div className="phone-side-promo left" aria-hidden="true">
        <article className="promo-card">
          <h4>Referral Wave</h4>
          <p>Boost adoption with reward-first onboarding campaigns.</p>
        </article>
        <article className="promo-card">
          <h4>Live Tracking</h4>
          <p>From Placed to Delivered with transparent status updates.</p>
        </article>
      </div>

      <div className="iphone-frame">
        <div className="iphone-notch" />

        <div className="iphone-screen-window">
          {SCREENS.map((screenSrc, index) => (
            <motion.img
              key={screenSrc}
              src={screenSrc}
              alt={`Saffro-Mellow app screen ${index + 1}`}
              className="screen-image"
              initial={false}
              animate={{ opacity: imagesReady && activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>

      <div className="phone-side-promo right" aria-hidden="true">
        <article className="promo-card">
          <h4>OTP Secured</h4>
          <p>Delivery confirmations locked with one-time verification.</p>
        </article>
        <article className="promo-card">
          <h4>Loyalty Engine</h4>
          <p>Coupons, points, and retention controls from one panel.</p>
        </article>
      </div>
    </div>
  );
}

export default IPhoneMockup;
