import classes from "./Properties.module.css";
import Countdown from "./Math/Countdown/Countdown"
import { useState } from "react";

const Properties = () => {
    const [a, setA] = useState(randomNumber(50));
  const [b, setB] = useState(randomNumber(50));
  const [c, setC] = useState(randomNumber(50));

  const [a1, setA1] = useState(randomNumber(50));
  const [b1, setB1] = useState(randomNumber(50));


  const [answer, setAnswer] = useState("?");
  const [answer1, setAnswer1] = useState("?");
  const [countdown, setCountdown] = useState(20);
  function randomNumber(limit) {
    return Math.round(Math.random() * limit);
  }
  function checkAnswer() {
    const result = a + b - c;
    if (result == answer) {
      setA(randomNumber(50));
      setB(randomNumber(50));
      setC(randomNumber(50));

      setAnswer("?");
      setCountdown(20);
    }
         else {
      alert("Wrong");
    }
    const result1 = a1 * b1;
    if (result1 == answer1){
      setA1(randomNumber(30));
      setB1(randomNumber(30));

      setAnswer1("?");
      setCountdown(20);
    }
    else {
      alert("Wrong1");
    }

  }
  return (<div>
       {a} + {b} - {c}= {answer} <br />
      {a1} * {b1} = {answer1}
      <Countdown countdown={countdown} setCountdown={setCountdown} />
      <input type="number" value={answer} onChange={({ target }) => setAnswer(target.value)} /> <br />
      <input type="number" value={answer1} onChange={({ target }) => setAnswer1(target.value)} />
      <button onClick={() => checkAnswer()}>Ok</button>
  </div>
  )
}
 
export default Properties;