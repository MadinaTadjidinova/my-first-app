
import React from "react";
import List from "./react2/List";
import Ol from "./react2/Ol";
import Square from "./react2/Square";
import Wealth from "./react2/Wealth";
import Table from "./react2/Table";
import Root from "./react2/Root";
import UpperCaseList from "./react2/UpperCaseList";


function App() {
  let richPeople = ["Elon Musk", "Jeff Besos"]
  let peopleWealth = [
    {name: "Elon Musk", wealth: 54784989},
    {name: "Jeff Besos ", wealth: 7679867678},
    {name: "Bill Gates", wealth: 76978979},
  ]
  let numbers = [4, 6, 1, 9, 2]

  return (
    <div className="App">
      <List items={richPeople} />
      <Ol items={richPeople} />
      <Square items={richPeople} />

      <ul>
      <Wealth items={peopleWealth} />
      </ul>

     
      <Table items={peopleWealth} />
   
      <Root items={numbers} />

      <UpperCaseList items={richPeople} />
    </div>
  );
}

export default App;