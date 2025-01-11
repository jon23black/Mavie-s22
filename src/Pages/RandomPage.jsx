import { useEffect, useState } from "react";
import FlipCard from "../components/FlipCard";
import styles from "./RandomPage.module.css";

function RandomPage({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [randomIndex, setRandomIndex] = useState(null);

  const pickRandomItem = () => {
    setRandomIndex(Math.floor(Math.random() * data.length));
    setSelectedItem(data[randomIndex]);
  };

  useEffect(() => {
    pickRandomItem(); // Now, you're passing a function reference to useEffect
  }, [data]); // Adding data as a dependency ensures it runs when the data changes

  return (
    <div className={styles.randomPage}>
      <button onClick={pickRandomItem}>Get a random reason</button>
      {selectedItem ? (
        <div className={styles.randomCardArea}>
          <FlipCard data item={selectedItem} number={randomIndex + 1} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default RandomPage;
