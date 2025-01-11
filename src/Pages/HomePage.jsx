import FlipCards from "../components/FlipCards";
import styles from "./HomePage.module.css";

function HomePage({ data }) {
  return (
    <>
      <div className={styles.home}>
        <FlipCards data={data} />
      </div>
    </>
  );
}

export default HomePage;
