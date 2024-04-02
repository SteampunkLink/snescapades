import { Link } from "react-router-dom";
import {
  FaPodcast,
  FaVideo,
  FaPencilAlt,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import PodcastDisplay from "./PodcastDisplay";
import DateDisplay from "./DateDisplay";
import Entry from "../models/Entry";
import styles from "../styles/EntryListItem.module.css";

interface EntryListItemProps {
  entry: Entry;
}

const EntryListItem = ({ entry }: EntryListItemProps) => {
  return (
    <article className={styles.entryListItem}>
      <ul className={styles.entryListItemHead}>
        <li>{entry.seriesTitle.toUpperCase()}</li>
        <li>
          {entry.type === "podcast" && <FaPodcast />}
          {entry.type === "video" && <FaVideo />}
          {entry.type === "blog" && <FaPencilAlt />}
        </li>
      </ul>
      <Link to={`/episode/${entry.slug}/${entry.episodeNumber}`}>
        <h2>{entry.episodeTitle}</h2>
      </Link>
      <div className={styles.entryListItemContent}>
        <div className={styles.entryListItemImg}>
          <img src={`/images/${entry.image}`} alt={entry.altText} />
        </div>
        <div className={styles.entryListItemExcerpt}>
          <PodcastDisplay source={entry.embedURL} />
          {entry.formattedGames?.length ? (
            <>
              <h3>Games Discused</h3>
              <ul>
                {entry.formattedGames.map((g) => (
                  <li key={g.index}>{g.gameTitle}</li>
                ))}
              </ul>
            </>
          ) : null}
          {entry.youtubeURL && (
            <a href={entry.youtubeURL} target="_blank">
              <div className="hp-btn single-link-btn youtube-btn">
                Watch/Comment on YouTube
              </div>
            </a>
          )}
        </div>
      </div>
      <div className={styles.entryListItemFooter}>
        <span>
          <FaCalendar />
          <DateDisplay date={entry.published} />
        </span>
        <span>
          <FaClock />
          <p>{entry.length}</p>
        </span>
      </div>
    </article>
  );
};

export default EntryListItem;
