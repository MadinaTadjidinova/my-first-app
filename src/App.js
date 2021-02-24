import React from "react";
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld"
import Chunga from "./components/Chunga"
import Hochu from "./components/Hochu";
import Book from "./components/Book";
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
      <Book auther="Chingiz Aitmatov" nam="Jamilia"/>
    </div>
  );
}

export default App;
