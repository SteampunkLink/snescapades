import { useState } from "react";
import { useGetCardListQuery } from "../slices/cardsApiSlice";
import Meta from "../components/Meta";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import ScratchCard from "../components/ScratchCard";
import styles from "../styles/ScratchCard.module.css";

interface screenProps {
  value: string;
  display: string;
}

const ScratchCardScreen = () => {
  const { data: cardIdData, isLoading, error } = useGetCardListQuery("");
  const [gameId, setGameId] = useState(0);
  const [screenId, setScreenId] = useState("0000");

  const updateGame = (e: any) => setGameId(e.target.value);
  const updateScreen = (e: any) => {
    console.log(e.target.value);
    setScreenId(e.target.value);
  };
  return (
    <>
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loading />}
      <Meta />
      <div className={styles.nintendoScratchCards}>
        <nav>
          {cardIdData?.gamesArr?.length && (
            <div className={styles.nintendoScratchCardsFormGroup}>
              <label htmlFor="game">Select Game</label>
              <select
                name="game"
                id="gameSelect"
                value={gameId}
                onChange={updateGame}
              >
                {cardIdData.gamesArr.map((g: string, idx: number) => (
                  <option key={idx} value={idx}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          )}
          {cardIdData?.screensArr[gameId]?.length && (
            <div className={styles.nintendoScratchCardsFormGroup}>
              <label htmlFor="screen">Select Screen</label>
              <select
                name="screen"
                id="screenSelect"
                value={screenId}
                onChange={updateScreen}
              >
                <option disabled value="0000">
                  - Pick a Screen -
                </option>
                {cardIdData.screensArr[gameId].map((s: screenProps) => (
                  <option key={s.value} value={s.value}>
                    {s.display}
                  </option>
                ))}
              </select>
            </div>
          )}
        </nav>
        <ScratchCard id={screenId} />
      </div>
    </>
  );
};

export default ScratchCardScreen;
