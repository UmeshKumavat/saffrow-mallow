import { motion } from 'framer-motion';
import companyLogo from '../assets/company-logo.svg';
import SaffroMellowLogo from '../assets/saffro-mellow-logo.png';

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-inner">
        <img
          src={companyLogo}
          alt="LinearLoop logo"
          className="header-logo company-logo"
        />
        <img
          src={SaffroMellowLogo}
          alt="Saffro-Mellow logo"
          className="header-logo project-logo"
        />
      </div>
    </motion.header>
  );
}

export default Header;
