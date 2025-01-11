import FlipCard from "./FlipCard";
import styles from "./FlipCards.module.css";

function FlipCards({ data }) {
  return (
    <div className={styles.flipCards}>
      {data.map((item, index) => (
        <FlipCard item={item} number={index + 1} key={index} />
      ))}
    </div>
  );
}

export default FlipCards;
