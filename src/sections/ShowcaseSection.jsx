import { motion } from 'framer-motion';
import IPhoneMockup from '../components/IPhoneMockup';

function ShowcaseSection() {
  return (
    <section className="section showcase-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <p className="eyebrow">App Preview</p>
        <h2>Experience Saffro-Mellow in a native mobile flow</h2>
      </motion.div>

      <IPhoneMockup />
    </section>
  );
}

export default ShowcaseSection;
