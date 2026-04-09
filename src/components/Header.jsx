import { motion } from "framer-motion";
import companyLogo from "../assets/company-logo.svg";
import linearCommerceLogo from "../assets/Linear-Commerce-Logo.png";
import SaffroMellowLogo from "../assets/saffro-mellow-logo.png";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-inner">
        <div className="logo-cluster" style={{ gap: "20px" }}>
          <img
            src={linearCommerceLogo}
            alt="Linear Commerce logo"
            className="header-logo company-logo"
            style={{ objectFit: "contain", transform: "scale(4)" }}
          />
          <span style={{ color: "#ccc", fontSize: "24px" }}>|</span>
          <img
            src={companyLogo}
            alt="LinearLoop logo"
            className="header-logo company-logo"
          />
        </div>
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
