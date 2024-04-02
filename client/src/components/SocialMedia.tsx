import { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { TbBrandCohost } from "react-icons/tb";
import { PiButterflyFill } from "react-icons/pi";
import styles from "../styles/Sidebar.module.css";
import utilStyles from "../styles/Utils.module.css";

const SocialMedia = () => {
  const [label, setLabel] = useState("");
  const handleLabel = (e: any) => {
    console.log("Hi", e.target.title);
    setLabel(e.target.title);
  };
  const clearLabel = () => {
    setLabel("");
  };
  return (
    <div className={utilStyles.displayBox}>
      <div className={styles.sidebarDisplay}>
        <h2>Social Media</h2>
        <p className={styles.sidebarLabel}>{label}</p>
        <ul className={styles.sidebarSocialBox}>
          <li>
            <a
              href="https://www.youtube.com/channel/UCNSDRaHDLeuI6s04TmMVEfQ"
              target="_blank"
              aria-label="YouTube"
              title="YouTube"
              onMouseOver={handleLabel}
              onMouseLeave={clearLabel}
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/snescapades/"
              target="_blank"
              aria-label="Instagram"
              title="Instagram"
              onMouseOver={handleLabel}
              onMouseLeave={clearLabel}
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/snescapades.bsky.social"
              target="_blank"
              aria-label="BlueSky"
              title="BlueSky"
              onMouseOver={handleLabel}
              onMouseLeave={clearLabel}
            >
              <PiButterflyFill />
            </a>
          </li>
          <li>
            <a
              href="https://cohost.org/snescapades"
              target="_blank"
              aria-label="Cohost"
              title="Cohost"
              onMouseOver={handleLabel}
              onMouseLeave={clearLabel}
            >
              <TbBrandCohost />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
