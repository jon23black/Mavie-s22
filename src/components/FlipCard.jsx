import { useState } from "react";
import styles from "./FlipCard.module.css"; // Import the CSS module

function FlipCard({ item, number }) {
  const { front, back, image } = item;
  const [flipped, setFlipped] = useState(false);
  const src = "/src/assets/" + image;
  const handleClick = () => {
    setFlipped(!flipped); // Toggle the flip state when clicked
  };

  return (
    <div className={styles.flipCard} onClick={handleClick}>
      <div
        className={`${styles.flipCardInner} ${flipped ? styles.flipped : ""}`}
      >
        <div className={styles.flipCardFront}>
          {image && (
            <img
              src={src}
              alt="smile"
              style={{ width: "300px", height: "300px" }}
            />
          )}
          <h1>Reason No. {number}</h1>
        </div>
        <div className={styles.flipCardBack}>
          <h2>{back}</h2>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
