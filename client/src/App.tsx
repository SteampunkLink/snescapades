import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import PodcastPlatforms from "./components/PodcastPlatforms";
import Sidebar from "./components/Sidebar";
import SocialMedia from "./components/SocialMedia";
import styles from "./styles/Base.module.css";

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.siteContainer}>
        <div className={styles.mainContainer}>
          <Outlet />
        </div>
        <div className={styles.sidebarContainer}>
          <Sidebar />
          <SocialMedia />
          <PodcastPlatforms />
        </div>
      </main>
    </>
  );
};

export default App;
