
import React from "react";
import './App.css' 

import Person from "./10.03.2021/Person/Person";
import Button from "./10.03.2021/Person/Button";
import Simple_btn from "./10.03.2021/Person/Simple_btn";
import Background from "./10.03.2021/Person/Background";
import Border from "./10.03.2021/Person/Border";
import BorderPink from "./10.03.2021/Person/BorderPink";
import Dashed from "./10.03.2021/Person/Dashed";
import Dotted from "./10.03.2021/Person/Dotted";
import Pink from "./10.03.2021/Person/Pink";
import Deshed1 from "./10.03.2021/Person/Deshed1";
function App() {
  return (
    <div className="App">
      <Person name="Elon Baike" age={47}>
        Ice skating, Eating donuts, Dancing under the moon
      </Person>
      <Person name="Bill Baike" age={50}>
        Saving the world
      </Person>
      <span className="highlight">Hello</span>

      <Button>Add</Button>
      <Simple_btn>Add</Simple_btn>
      
      <Background>Add</Background>
      <Border>Add</Border>
      
      <Dashed>Add</Dashed>
      <Dotted>Add</Dotted>
      
      <BorderPink>Add</BorderPink>
      <Pink>Add</Pink>

      <Deshed1>Add</Deshed1>
    </div>
  );
}
export default App;
