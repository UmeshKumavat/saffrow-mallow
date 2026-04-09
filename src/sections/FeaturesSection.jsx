import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';

const FEATURE_ITEMS = [
  {
    icon: '📍',
    title: 'Live Order Tracking',
    description:
      'Track every order in real time from Placed → Confirmed → Packed → Delivered, ensuring complete transparency and a seamless customer experience.',
  },
  {
    icon: '💳',
    title: 'Flexible Checkout',
    description:
      'Gives customers the freedom to pay partially or in full, while easily applying reward points and coupons for a smooth, flexible checkout.',
  },
  {
    icon: '🎁',
    title: 'Referral & Rewards',
    description:
      'Drive growth with referral system, earn points on every signup and order, and redeem them instantly at checkout.',
  },
  {
    icon: '🛵',
    title: 'Ride Management',
    description:
      'Empower riders to create and manage deliveries efficiently by selecting orders, optimizing routes, and choosing the right vehicle type.',
  },
  {
    icon: '🔐',
    title: 'Proof of Delivery (OTP)',
    description: 'Ensure secure and verified deliveries with OTP-based confirmation.',
  },
  {
    icon: '🧩',
    title: 'OMS & Loyalty Program',
    description:
      'A powerful admin panel powered with order management and a loyalty engine to manage operations and boost customer retention from one place.',
  },
];

function FeaturesSection() {
  return (
    <section className="section features-section" id="features">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <p className="eyebrow">Core Highlights</p>
        <h2>Designed for a premium beta experience</h2>
      </motion.div>

      <div className="feature-grid">
        {FEATURE_ITEMS.map((item, index) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            delay={index * 0.08}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
