import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Game from "../game";
import { selectQuestion } from "../game";

function Home() {
  const [start, setStart] = useState<boolean>(false);
  const [questionData, setQuestionData] = useState(selectQuestion());
  useEffect(() => {}, [start]);
  const setStartTrue = () => {
    setStart(true);
    setQuestionData(selectQuestion());
  };
  const setStartFalse = () => {
    setStart(false);
  };
  if (start === true) {
    return (
      <div>
        <Header />
        <button className="absolute left-4 top-12" onClick={setStartFalse}>
          back
        </button>
        <div className="absolute flex w-full justify-center top-60">
          <Game questionData={questionData} />
        </div>
        <Footer />
      </div>
    );
  } else
    return (
      <div>
        <h2 className="absolute flex w-full justify-center top-40">
          No Wrong Answer Quiz
        </h2>
        <button
          className=" absolute flex w-full justify-center top-60"
          onClick={setStartTrue}
        >
          start
        </button>
        <Footer />
      </div>
    );
}

export default Home;
