import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import ProgressBar from "../ui/progress";
import Game from "../game";

function Home() {
  const [start, setStart] = useState<boolean>(false);
  useEffect(() => {}, [start]);
  const setStartTrue = () => {
    setStart(true);
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
        <div className="absolute flex w-full justify-center top-20">
          <ProgressBar />
        </div>
        <div className="absolute flex w-full justify-center top-60">
          <Game />
        </div>
        <Footer />
      </div>
    );
  } else
    return (
      <div className="relative">
        <h2 className="absolute flex w-full justify-center top-40">
          No Wrong Answer Quiz
        </h2>
        <button
          className=" absolute flex w-full justify-center top-60"
          onClick={setStartTrue}
        >
          start
        </button>
      </div>
    );
}

export default Home;
