import React from "react";
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld"
import Chunga from "./components/Chunga"
import Hochu from "./components/Hochu";
import Book from "./components/Book";
import Sing from "./components/Sing";
import Length from "./components/Length";
import Uppercase from "./components/Uppercase";
import Lowercase from "./components/Lowercase";
import Age from "./components/Age";
import Year from "./components/Year";
import Round from "./components/Round";
import Power from "./components/Power";
import Switch from "./components/Switch";
import Water from "./components/Water";

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
      <Lowercase> HELLO WORLD</Lowercase>

      <Age year={2003}/>
      <Year age={18}/>
      <Round number={7.7}/>
      <Power number={4.6}/>
      <Power number={6} to={2}/>

     <Switch on={false}/>
     <Switch on={true}/>

     <Water frozen={true}/>
     <Water frozen={false}/>
    </div>
  );
}

export default App;
