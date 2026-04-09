import { motion } from "framer-motion";
import { Link } from "react-scroll";

const buttonAnimation = {
  whileHover: { scale: 1.03, y: -2 },
  whileTap: { scale: 0.98 },
};

function CTAButtons() {
  return (
    <div className="cta-group">
      <motion.a
        {...buttonAnimation}
        href="https://saffrow-mellow-frontend.vercel.app/login"
        target="_blank"
        rel="noreferrer"
        className="cta-btn primary"
      >
        View Website
      </motion.a>

      <motion.div {...buttonAnimation} className="cta-btn secondary">
        <motion.a
          href="https://play.google.com/store/apps/details?id=com.saffromellow.customer"
          target="_blank"
          smooth
          duration={700}
          offset={-90}
        >
          View App
        </motion.a>
      </motion.div>

      <motion.a
        {...buttonAnimation}
        href="https://saffrow-mellow-rider-app.vercel.app/login"
        target="_blank"
        rel="noreferrer"
        className="cta-btn ghost"
      >
        View Rider App
      </motion.a>
    </div>
  );
}

export default CTAButtons;
