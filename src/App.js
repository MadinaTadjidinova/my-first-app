import React from "react";
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld"
import Chunga from "./components/Chunga"
import Hochu from "./components/Hochu";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <ByeWorld />
      <Chunga />
      <Hochu v="more" />
      <Hochu v="kosmos" />
    </div>
  );
}

export default App;
