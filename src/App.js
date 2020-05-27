//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, lionsetScore] = useState(0);
  const [tigerScore, tigersetScore] = useState(0);
  const [nextQuarter, setNext] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow lionScore={lionScore} tigerScore={tigerScore} />

        <BottomRow nextQuarter={nextQuarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => lionsetScore(lionScore + 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => lionsetScore(lionScore + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => tigersetScore(tigerScore + 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => tigersetScore(tigerScore + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
        <div className="homeButtons">
          <button
            onClick={() =>
              setNext(nextQuarter < 4 ? nextQuarter + 1 : nextQuarter === 1)
            }
            className="homeButtons__touchdown"
          >
            Change Quarter
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
