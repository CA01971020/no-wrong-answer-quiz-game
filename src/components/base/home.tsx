import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

function Home() {
  const [start, setStart] = useState<boolean>(false);
  useEffect(() => {}, [start]);
  const clickStartButton = () => {
    setStart(true);
  };
  if (start === true) {
    return (
      <div>
        <Header />
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
          onClick={clickStartButton}
        >
          start
        </button>
      </div>
    );
}

export default Home;
