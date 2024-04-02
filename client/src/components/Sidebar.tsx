import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import utilStyles from "../styles/Utils.module.css";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className={utilStyles.displayBox}>
      <div className={styles.sidebarDisplay}>
        <ul>
          <li
            className={
              pathname === "/series/snescapades" ? styles.selected : undefined
            }
          >
            <Link to="/series/snescapades">SNEScapades</Link>
          </li>
          <li className={pathname === "/series" ? styles.selected : undefined}>
            <Link to="/series">Series Index</Link>
          </li>
          <li className={pathname === "/ranks" ? styles.selected : undefined}>
            <Link to="/ranks">SNES Game Rankings</Link>
          </li>
          <li className={pathname === "/faqs" ? styles.selected : undefined}>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li className={pathname === "/friends" ? styles.selected : undefined}>
            <Link to="/friends">Friends of the Show</Link>
          </li>
          <li className={pathname === "/scratch" ? styles.selected : undefined}>
            <Link to="/scratch">Nintendo Scratch Cards</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
