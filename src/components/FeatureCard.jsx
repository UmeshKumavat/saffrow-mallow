import { motion } from 'framer-motion';

function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.article
      className="feature-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay }}
    >
      <span className="feature-icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

export default FeatureCard;
