import { useEffect, useMemo, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import CTAButtons from "../components/CTAButtons";
import saffroMellowLogo from "../assets/saffro-mellow-logo.png";

const INITIAL_SECONDS = 20;
const BRAND_STORIES = [
  "One platform for growth, loyalty, and real-time operations.",
  "Live tracking from Placed to Delivered with complete visibility.",
  "OTP-secure proof of delivery and rider route optimization built in.",
  "Flexible checkout with coupons, rewards, and referral-led growth.",
];
const BUBBLE_ITEMS = [
  { x: "8%", size: "58px", delay: "0s", duration: "6.8s" },
  { x: "18%", size: "74px", delay: "0.6s", duration: "8.2s" },
  { x: "32%", size: "52px", delay: "1.2s", duration: "6.1s" },
  { x: "49%", size: "82px", delay: "0.4s", duration: "9.2s" },
  { x: "63%", size: "64px", delay: "1.4s", duration: "7.1s" },
  { x: "77%", size: "48px", delay: "0.8s", duration: "5.8s" },
  { x: "90%", size: "68px", delay: "1.1s", duration: "8.6s" },
];

function HeroSection({ onLaunch }) {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isStarting, setIsStarting] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);
  const [brandStoryIndex, setBrandStoryIndex] = useState(0);
  const [bubblePhase, setBubblePhase] = useState("hidden");
  const startDelayRef = useRef(null);
  const bubbleHideRef = useRef(null);

  useEffect(() => {
    return () => {
      if (startDelayRef.current) {
        window.clearTimeout(startDelayRef.current);
      }
      if (bubbleHideRef.current) {
        window.clearTimeout(bubbleHideRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCounting) {
      return undefined;
    }

    // Countdown logic: decrease timer once per second until it reaches zero.
    const intervalId = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(intervalId);
          setIsCounting(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isCounting]);

  useEffect(() => {
    if (isCounting || secondsLeft !== 0 || isLaunched) {
      return;
    }

    setIsLaunched(true);
    if (onLaunch) onLaunch();
    setBubblePhase("pop");

    bubbleHideRef.current = window.setTimeout(() => {
      setBubblePhase("hidden");
    }, 5000); // Increased pop duration to 3 seconds

    // Confetti trigger: burst multiple angles for a launch celebration effect.
    confetti({
      particleCount: 160,
      spread: 80,
      origin: { y: 0.62 },
      startVelocity: 35,
      colors: ["#DD2B1D", "#0A0A0A", "#FFFFFF", "#FFB703"],
    });
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0.05, y: 0.7 },
      colors: ["#DD2B1D", "#111111", "#FFD166"],
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 0.95, y: 0.7 },
      colors: ["#DD2B1D", "#111111", "#FFFFFF"],
    });

    window.setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 110,
        startVelocity: 40,
        origin: { y: 0.58 },
        colors: ["#DD2B1D", "#0A0A0A", "#FFFFFF", "#F4A261"],
      });
    }, 220);

    // Scroll to the iPhone mockup section after animation completes
    window.setTimeout(() => {
      const showcaseSection = document.querySelector(".showcase-section");
      if (showcaseSection) {
        showcaseSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 3500);
  }, [isCounting, secondsLeft, isLaunched]);

  useEffect(() => {
    if (isLaunched) {
      return undefined;
    }

    // Rotate branding statements while waiting for launch.
    const brandTickerId = window.setInterval(() => {
      setBrandStoryIndex((prev) => (prev + 1) % BRAND_STORIES.length);
    }, 2000);

    return () => window.clearInterval(brandTickerId);
  }, [isLaunched]);

  const handleStart = () => {
    setIsStarting(true);

    startDelayRef.current = window.setTimeout(() => {
      setIsStarting(false);
      setIsCounting(true);
      setBubblePhase("float");
    }, 1100);
  };

  const secondsLabel = useMemo(
    () => String(secondsLeft).padStart(2, "0"),
    [secondsLeft],
  );

  return (
    <section className="hero-section section">
      <div className="hero-backdrop" aria-hidden="true" />
      {bubblePhase !== "hidden" && (
        <div
          className={`bubble-overlay ${bubblePhase === "pop" ? "is-pop" : ""}`}
          aria-hidden="true"
        >
          {BUBBLE_ITEMS.map((bubble, index) => (
            <span
              key={index}
              className="countdown-bubble"
              style={{
                "--x": bubble.x,
                "--size": bubble.size,
                "--delay": bubble.delay,
                "--duration": bubble.duration,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <img
          src={saffroMellowLogo}
          alt="Saffro-Mellow logo"
          className="hero-top-logo"
        />

        {/* <h1 className="hero-title">
          <span className="hero-title-saffro">Saffro</span>
          <span className="hero-title-mellow">Mellow</span>
        </h1> */}

        {/* {!isLaunched && (
          <motion.div
            className="brand-presence"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="brand-pill-row" aria-hidden="true">
              <span>Real-Time</span>
              <span>Secure</span>
              <span>Loyalty-Ready</span>
            </div>

            <motion.p
              className="brand-story"
              key={brandStoryIndex}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.35 }}
            >
              {BRAND_STORIES[brandStoryIndex]}
            </motion.p>

            <div className="brand-wave" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="promo-ribbon" aria-label="Saffro-Mellow promotion highlights">
              <div className="promo-track">
                <span>Live Order Tracking</span>
                <span>Flexible Checkout</span>
                <span>Referral Rewards</span>
                <span>Ride Management</span>
                <span>OTP Delivery Proof</span>
                <span>OMS + Loyalty Engine</span>
                <span>Live Order Tracking</span>
                <span>Flexible Checkout</span>
                <span>Referral Rewards</span>
                <span>Ride Management</span>
                <span>OTP Delivery Proof</span>
                <span>OMS + Loyalty Engine</span>
              </div>
            </div>
          </motion.div>
        )} */}

        {!isLaunched && (
          <div className="timer" aria-live="polite">
            <span className="timer-static">00:</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={secondsLabel}
                className="timer-seconds"
                initial={{ opacity: 0, rotateX: 90, y: -20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -90, y: 20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                {secondsLabel}
              </motion.span>
            </AnimatePresence>
          </div>
        )}

        {!isCounting && !isLaunched && !isStarting && (
          <motion.button
            type="button"
            className="start-btn"
            onClick={handleStart}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Countdown
          </motion.button>
        )}

        {isStarting && (
          <p className="prep-state">Preparing launch sequence...</p>
        )}

        {isLaunched && (
          <motion.div
            className="launch-state"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Saffro-Mellow App is officially Launched 🎉</h2>
            <p>
              The Beta Version of Saffro Mellow is now live on Google Play Store
              for real users testing.
            </p>

            <CTAButtons />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default HeroSection;
