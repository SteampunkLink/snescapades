import { useEffect, useState } from "react";
import { useGetCardQuery } from "../slices/cardsApiSlice";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";
import { flatten } from "../utils";
import Dot from "./Dot";
import styles from "../styles/ScratchCard.module.css";
import Card from "../models/Card";

interface ScratchCardProps {
  id: string;
}

const ScratchCard = ({ id }: ScratchCardProps) => {
  const { data: cardData, isLoading, error } = useGetCardQuery(id);
  const [displayedCard, setDisplayedCard] = useState<Card>(cardData);
  const [tokens, setTokens] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (cardData?.groups?.length) {
      setTokens([]);
      setIsActive(true);
      const shuffled = flatten(cardData.groups);
      setTimeout(() => {
        setIsActive(false);
        setTokens(shuffled);
        setDisplayedCard(cardData);
      }, 300);
    } else {
      setTokens([]);
    }
  }, [cardData]);
  return (
    <>
      {isLoading && <Loading />}

      <div
        className={
          isActive
            ? styles.individualCardActive
            : styles.individualCardContainer
        }
      >
        <div className={styles.individualCardInner}>
          {displayedCard ? (
            <div
              className={styles.individualCardFront}
              style={{
                backgroundImage: `url(images/scratchcards/${displayedCard.directory}/screen${displayedCard.screen}.jpg)`,
                backgroundSize: "cover",
              }}
            >
              {tokens.length &&
                tokens.map((t: string, idx: number) => (
                  <Dot
                    key={idx}
                    index={idx}
                    locations={cardData.locations}
                    token={t}
                    resetScratch={isActive}
                  />
                ))}
            </div>
          ) : (
            <div
              className={styles.individualCardFront}
              style={{
                backgroundImage: `url(images/scratchcards/mario/screen0.jpg)`,
                backgroundSize: "cover",
              }}
            ></div>
          )}
          {/* // <div
            //   className={styles.individualCardFront}
            //   style={{
            //     backgroundImage: `url(images/scratchcards/${cardData.directory}/screen${cardData.screen}.jpg)`,
            //     backgroundSize: "cover",
            //   }}
            // > */}
          {/* {tokens.length &&
                tokens.map((t: string, idx: number) => (
                  <Dot
                    key={idx}
                    index={idx}
                    locations={cardData.locations}
                    // token={tokens[idx]}
                    token={t}
                    resetScratch={isActive}
                  />
                ))} */}
          <div
            className={styles.individualCardBack}
            style={{
              backgroundImage: `url(images/scratchcards/mario/screen0.jpg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
      {error && <ErrorMsg error={error} />}
      {cardData?.directions?.length && (
        <div className={styles.instructionArea}>
          <h2>{cardData.game}</h2>
          <h3>
            {cardData.title} (screen {cardData.screen} of 10)
          </h3>
          <div className={styles.innerInstructions}>
            <div>
              <h4>Instructions:</h4>
              <ul>
                {cardData.directions.map((d: string, idx: number) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              {cardData.pictures[1].map((p: string, idx: number) => (
                <div key={idx} className={styles.instructionSection}>
                  <img
                    src={`images/scratchcards/tokens/token-${cardData.pictures[0][idx]}.png`}
                    alt={cardData.pictures[0][idx]}
                  />
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScratchCard;
