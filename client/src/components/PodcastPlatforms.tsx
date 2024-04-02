import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { TbBrandApplePodcast, TbBrandGooglePodcasts } from "react-icons/tb";
import { SiOvercast, SiPocketcasts, SiRadiopublic } from "react-icons/si";
import styles from "../styles/Sidebar.module.css";
import utilStyles from "../styles/Utils.module.css";

const PodcastPlatforms = () => {
  const [label, setLabel] = useState("");
  const handleLabel = (e: any) => {
    setLabel(e.target.title);
  };
  const clearLabel = () => {
    setLabel("");
  };
  return (
    <div className={utilStyles.displayBox}>
      <div className={styles.sidebarDisplay}>
        <h2>Podcast Platforms</h2>
        <p className={styles.sidebarLabel}>{label}</p>
        <div className={styles.sidebarSocialGroups}>
          <ul className={styles.sidebarSocialBox}>
            <li>
              <a
                href="https://open.spotify.com/show/1bHkdjz80A6T8uQ0s0RPoo"
                target="_blank"
                aria-label="Spotify"
                title="Spotify"
                onMouseOver={handleLabel}
                onMouseLeave={clearLabel}
              >
                <FaSpotify />
              </a>
            </li>
            <li>
              <a
                href="https://podcasters.spotify.com/pod/show/honest-piranha"
                target="_blank"
                aria-label="Apple Podcasts"
                title="Apple Podcasts"
                onMouseOver={handleLabel}
                onMouseLeave={clearLabel}
              >
                <TbBrandApplePodcast />
              </a>
            </li>
          </ul>
          <ul className={styles.sidebarSocialBox}>
            <li>
              <a
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9iNmFlM2M0L3BvZGNhc3QvcnNz"
                target="_blank"
                aria-label="Google Podcasts"
                title="Google Podcasts"
                onMouseOver={handleLabel}
                onMouseLeave={clearLabel}
              >
                <TbBrandGooglePodcasts />
              </a>
            </li>
            <li>
              <a
                href="https://overcast.fm/itunes1464387511/snescapades"
                target="_blank"
                aria-label="Overcast"
                title="Overcast"
                onMouseOver={handleLabel}
                onMouseLeave={clearLabel}
              >
                <SiOvercast />
              </a>
            </li>
          </ul>
          <ul className={styles.sidebarSocialBox}>
            <li>
              <a
                href="https://pca.st/eSj8"
                target="_blank"
                aria-label="PocketCasts"
                title="PocketCasts"
                onMouseOver={handleLabel}
                onMouseLeave={clearLabel}
              >
                <SiPocketcasts />
              </a>
            </li>
            <li>
              <a
                href="https://radiopublic.com/snescapades-Wlapv0"
                target="_blank"
                aria-label="Radio Public"
                title="Radio Public"
                onMouseOver={handleLabel}
                onMouseLeave={clearLabel}
              >
                <SiRadiopublic />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlatforms;
