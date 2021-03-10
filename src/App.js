
import React from "react";
import './App.css' 

import Person from "./10.03.2021/Person/Person";

function App() {

  return (
    <div className="App">
      <Person name="Elon Musk" age={47}>
        JKfkdjlsffjdfjdsfjdklfj
      </Person>
      <Person name="Bill Baike" age={50}>
        JKfkdjlsffj
      </Person>
      <span className="highlight">Hello</span>
    </div>
  );
}

export default App;
