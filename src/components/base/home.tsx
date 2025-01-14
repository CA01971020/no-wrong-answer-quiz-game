import React from "react";
import Header from "./header";
import Footer from "./footer";
import Game from "../game";
import { useQuestionUpdate } from "../useQuestionUpdate";

function Home() {
  const { start, questionData, setStartTrue, setStartFalse, updateQuestion } =
    useQuestionUpdate();

  if (start) {
    return (
      <div>
        <Header />
        <button className="absolute left-4 top-12" onClick={setStartFalse}>
          back
        </button>
        <div className="absolute flex w-full justify-center top-40">
          <Game questionData={questionData} updateQuestion={updateQuestion} />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="absolute flex w-full justify-center top-40">
          No Wrong Answer Quiz
        </h2>
        <button
          className="absolute flex w-full justify-center top-60"
          onClick={setStartTrue}
        >
          start
        </button>
        <Footer />
      </div>
    );
  }
}

export default Home;
