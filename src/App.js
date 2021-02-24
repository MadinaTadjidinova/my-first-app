import React from "react";
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld"
import Chunga from "./components/Chunga"
import Hochu from "./components/Hochu";
import Book from "./components/Book";
import Sing from "./components/Sing";

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
      <Book name="Jamilia" auther="Chingiz Aitmatov"/> 
      <Sing firstname="Selena" secondname="Gomes" />
    </div>
  );
}

export default App;
