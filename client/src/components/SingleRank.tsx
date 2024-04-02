// import utilStyles from "../styles/Utils.module.css";
import styles from "../styles/Ranks.module.css";
interface SingleRankProps {
  rank: string;
  gameListInRank: string[];
  rankClass: string;
}

const SingleRank = ({ rank, gameListInRank, rankClass }: SingleRankProps) => {
  return (
    <div className={styles.singleRank}>
      <h3 className={rankClass}>{rank}</h3>
      <ul>
        {gameListInRank.map((g: string, idx: number) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleRank;
