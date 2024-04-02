import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/">
          <div className={styles.headerLeft}>SNEScapades.show</div>
        </Link>
        <div className={styles.headerRight}>
          Home of the SNEScapades Podcast!
        </div>
      </div>
    </nav>
  );
};

export default Header;
