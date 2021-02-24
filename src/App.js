import React from "react";
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld"
import Chunga from "./components/Chunga"
import Hochu from "./components/Hochu";
import Book from "./components/Book";
import Sing from "./components/Sing";
import Length from "./components/Length";
import Uppercase from "./components/Uppercase";
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
      <Length string="Example string"/>
      <Length string="Hello world"/>
      <Uppercase>hello world</Uppercase>
    </div>
  );
}

export default App;
