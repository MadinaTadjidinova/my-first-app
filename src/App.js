
import React from "react";
import List from "./home_work/List";
import Ol from "./home_work/Ol";
import Square from "./home_work/Square";
import Welth from "./home_work/Welth";

function App() {
  let richPeople = ["Elon Musk", "Jeff Besos"]
  let peopleWealth = [
    {name: "Elon Musk", wealth: 54784989},
    {name: "Jeff Besos ", wealth: 7679867678},
    {name: "Bill Gates", wealth: 76978979},
  ]

  return (
    <div className="App">
      <List items={richPeople} />
      <Ol items={richPeople} />
      <Square items={richPeople} />

      <ul>
      <Welth items={peopleWealth} />
      </ul>
    </div>
  );
}

export default App;