
import React from "react";
import List from "./home_work/List";
import Ol from "./home_work/Ol";

let richPeople = ["Elon Musk", "Jeff Besos"]
function App() {
  return (
    <div className="App">
      <List items={richPeople} />
      <Ol items={richPeople} />
    </div>
  );
}

export default App;