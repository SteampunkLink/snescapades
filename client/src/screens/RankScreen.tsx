import { useState } from "react";
import { useGetRanksQuery } from "../slices/ranksApiSlice";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import SingleRank from "../components/SingleRank";
import utilStyles from "../styles/Utils.module.css";
import styles from "../styles/Ranks.module.css";

const RankScreen = () => {
  const { data: rankData, isLoading, error } = useGetRanksQuery("");
  const [display, setDisplay] = useState("all");

  return (
    <>
      <Meta />
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      <div className={utilStyles.displayBox}>
        <div>
          <h2>Current SNES Game Rankings</h2>
          <div className={styles.rankCtrlBtns}>
            <button onClick={() => setDisplay("all")} className="hp-btn">
              All
            </button>
            <button onClick={() => setDisplay("A")} className="hp-btn a-rank">
              A
            </button>
            <button onClick={() => setDisplay("B")} className="hp-btn b-rank">
              B
            </button>
            <button onClick={() => setDisplay("C")} className="hp-btn c-rank">
              C
            </button>
            <button onClick={() => setDisplay("D")} className="hp-btn d-rank">
              D
            </button>
            <button onClick={() => setDisplay("F")} className="hp-btn f-rank">
              F
            </button>
            <button onClick={() => setDisplay("U")} className="hp-btn u-rank">
              U
            </button>
          </div>
        </div>

        <div className={styles.rankContainer}>
          {rankData?.A && (display === "all" || display === "A") && (
            <SingleRank
              rank="A"
              gameListInRank={rankData.A}
              rankClass={"a-rank"}
            />
          )}
          {rankData?.B && (display === "all" || display === "B") && (
            <SingleRank
              rank="B"
              gameListInRank={rankData.B}
              rankClass={"b-rank"}
            />
          )}
          {rankData?.C && (display === "all" || display === "C") && (
            <SingleRank
              rank="C"
              gameListInRank={rankData.C}
              rankClass={"c-rank"}
            />
          )}
          {rankData?.D && (display === "all" || display === "D") && (
            <SingleRank
              rank="D"
              gameListInRank={rankData.D}
              rankClass={"d-rank"}
            />
          )}
          {rankData?.F && (display === "all" || display === "F") && (
            <SingleRank
              rank="F"
              gameListInRank={rankData.F}
              rankClass={"f-rank"}
            />
          )}
          {rankData?.U && (display === "all" || display === "U") && (
            <SingleRank
              rank="U"
              gameListInRank={rankData.U}
              rankClass={"u-rank"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RankScreen;
