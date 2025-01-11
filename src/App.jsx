import { useState } from "react";
import HomePage from "./Pages/HomePage";
import RandomPage from "./Pages/RandomPage";
function App() {
  const [nav, setNav] = useState("");
  function handleClick(value) {
    setNav(value);
  }
  const data = [
    {
      front: "1st",
      back: "Because you help me feel as happy as I can",
      image: "Smile.png",
    },
    {
      front: "2nd",
      back: "Because when I am with you or talking to you, I am happy",
      image: "pinned.png",
    },
    {
      front: "card 3",
      back: "Because you help me feel special, like helping me celebrate my birthday among many other things",
      image: "birth1.png",
    },
    {
      front: "card 4",
      back: "Because you travelled with me to Alexandria",
      image: "alex.png",
    },
    {
      front: "card 2",
      back: "Because we had dinner together at 10+ places (here is to 100+ more)",
      image: "food2.png",
    },
    {
      front: "card 3",
      back: "Because you don’t stop trying to help me even if I seem to be a hopeless case",
      image: "babelhara.png",
    },
    {
      front: "card 4",
      back: "Because you’ve invited me to Nardine’s wedding",
      image: "wed.jpg",
    },
    {
      front: "card 2",
      back: "Because you’ve told me to meet you at the university again",
      image: "Uni.png",
    },
    {
      front: "card 3",
      back: "Because you never tell me that I am a drama queen, even when I am one",
      image: "drama.png",
    },
    {
      front: "card 4",
      back: "Because you deleted that file, though I deserved it being there in the first place",
      image: "deleteFile.png",
    },
    {
      front: "card 4",
      back: "Because I visited you once in your MYF break (even if we didn’t take a picture). The picture here is when you told me you were accepted",
      image: "accepted.png",
    },
    {
      front: "card 4",
      back: "Because you invited me to attend Ibrahim Abd El-Mageed talk, and let me meet Aziza afterwards",
      image: "Ibrahim.png",
    },
    {
      front: "card 4",
      back: "Because you keep supporting me on each and every thing I try or avoid trying to achieve",
      image: "support.png",
    },
    {
      front: "card 4",
      back: "Because of each and every great gift that you’ve given me, and the many many amazing thoughts behind them",
      image: "gifts.png",
    },
    {
      front: "card 4",
      back: "Because you accompanied to me to two public libraries this year, and I have been dreaming of visiting one all my childhood",
      image: "lib2.png",
    },
    {
      front: "card 4",
      back: "Because you made me feel heard and seen and cared for",
      image: "seen.png",
    },
    {
      front: "card 4",
      back: "Because you always make sure I’m home safely",
      image: "home.png",
    },
    // {
    //   front: "card 4",
    //   back: "Because you never want me to feel bad, even if it means you never letting me know the bad things I do. I wish you would share more often though. I honestly do.",
    // },
    {
      front: "card 4",
      back: "Because you let me attend your 500th and 501st session with you",
      image: "sessions.png",
    },
    // {
    //   front: "card 4",
    //   back: "Because you find me some time here and there in your most busy days",
    // },
    {
      front: "card 4",
      back: "Because I can’t express my love and care enough to you, and hopefully this helps you know it somehow",
      image: "cat.png",
    },
    {
      front: "card 4",
      back: "Because you helped pick and wrap Salma’s gift",
      image: "salma.png",
    },
    {
      front: "card 4",
      back: "Because you will forgive me for not being able to wrap my gifts",
      image: "sorry.png",
    },
    // {
    //   front: "card 4",
    //   back: "Because I couldn’t think of putting each and every gift individually here without you being angry with me, and because I will never be able to list every good thing you did for me in here",
    // },
    {
      front: "card 4",
      back: "Because I can't help but think I am forgetting a lot of reasons, and I will make sure to let you know each and every time I feel I shuold thank you",
      image: "grateful.png",
    },
    {
      front: "card 4",
      back: "Because you've been here for a long time, and hopefully for a lot longer time. The 23rd card is because I hope I can celebrate your next birthday with you.",
      image: "23.png",
    },
  ];
  return (
    <div className="App">
      <Header onClick={() => handleClick("")} />
      <div className="layout">
        {/* <button
          onClick={() =>
            nav === "random" ? handleClick("home") : handleClick("random")
          }
        >
          {nav === "random" ? "Home" : "Random"}
        </button> */}
        <ButtonNav handleClick={handleClick} />
        {!nav && (
          <h1 className="intro">
            Mavie is a great person, an awesome human being, an incredible
            student, and a hardworking young woman. Above all these things, she
            is a thoughtful kindhearted charming radiant compassionate
            inspirational supportive trustworthy friend. I am lucky to be one of
            the people who enjoy this friendship, and one of the few people who
            enjoy it to that extent. <br />
            Below, are only some few reasons why this year was a great year for
            Mavie the friend. I have only listed the great things you did for
            me, you should know that there are many other reasons to admire you.
            <br />
            You have done many great things for other people, and have done
            things that are only for you and your career, which should also
            account for how great a person you are. I am sorry you that I am the
            reason you do not know how much I appreciate you and how much you
            mean to me. <br /> This is to Mavie, as a friend of Nour.{" "}
            <br />I can not appreciate you enough.
          </h1>
        )}
        {nav === "main" && <HomePage data={data} />}
        {nav === "random" && <RandomPage data={data} />}
      </div>
      <Footer />
    </div>
  );
}

function Header({ onClick }) {
  return (
    <header onClick={onClick}>
      <h1>The Bestest Friend</h1>
    </header>
  );
}

function Footer() {
  return <footer>The Bestest Friend ™</footer>;
}

function ButtonNav({ handleClick }) {
  return (
    <div className="buttonNav">
      <button onClick={() => handleClick("main")}>All Reasons</button>
      <button onClick={() => handleClick("random")}>Random Reason</button>
    </div>
  );
}

export default App;
