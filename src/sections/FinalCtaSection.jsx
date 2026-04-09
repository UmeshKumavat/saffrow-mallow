import { motion } from 'framer-motion';

function FinalCtaSection() {
  return (
    <section className="section final-cta-section">
      <motion.a
        href="https://play.google.com/store/apps"
        target="_blank"
        rel="noreferrer"
        className="final-cta-link"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        Click here to discover Saffro Mellow in action.
      </motion.a>
    </section>
  );
}

export default FinalCtaSection;
