import { useState, useEffect } from "react";
import styles from "../styles/ScratchCard.module.css";

const dotPositions = ["-7px", "-70px", "-132px", "-194px"];

interface DotProps {
  index: number;
  locations: string[];
  token: string;
  resetScratch: boolean;
}

const Dot = ({ index, locations, token, resetScratch }: DotProps) => {
  const [scratchPattern, setScratchPattern] = useState(dotPositions[0]);
  const scratchOff = () => {
    setScratchPattern(dotPositions[1]);
    setTimeout(() => setScratchPattern(dotPositions[2]), 300);
    setTimeout(() => setScratchPattern(dotPositions[3]), 600);
  };

  useEffect(() => {
    if (resetScratch) {
      setScratchPattern(dotPositions[0]);
    }
  }, [resetScratch]);

  return (
    <>
      <div
        className={styles.dot}
        onClick={() => scratchOff()}
        style={{
          left: `${locations[0][index]}px`,
          top: `${locations[1][index]}px`,
        }}
      >
        <div
          className={styles.scratchOff}
          style={{
            background: `url(images/scratchcards/scratch_sprite.png) ${scratchPattern} ${
              dotPositions[index % 4]
            }`,
          }}
        ></div>
        <img src={`images/scratchcards/tokens/token-${token}.png`} />
      </div>
    </>
  );
};

export default Dot;
