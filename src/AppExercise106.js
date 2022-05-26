import { useState } from "react";
import { Statistics } from "./unicafe/Statistics";
import { Button } from "./components/Button";

const AppExercise106 = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleClick = (input) => {
    setAll(all + 1);
    if (input === "good") {
      setGood(good + 1);
    }
    if (input === "neutral") {
      setNeutral(neutral + 1);
    }
    if (input === "bad") {
      setBad(bad + 1);
    }
  };

  let average = (good * 1 + neutral * 0 + bad * -1) / all;
  let positive = (good * 1) / all;

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={"good"} onClick={() => handleClick("good")}></Button>
      <Button text={"neutral"} onClick={() => handleClick("neutral")}></Button>
      <Button text={"bad"} onClick={() => handleClick("bad")}></Button>

      <h2>statistics</h2>
      {all > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      ) : (
        <div> No feedback given </div>
      )}
    </div>
  );
};

export default AppExercise106;
