// import { useState } from "react";

import React from "react";
// import Switch from "./01.03.2021/Switch";
// import Counter from "./01.03.2021/Counter";
// import Name from "./01.03.2021/Name";
// import Text from "./01.03.2021/Text";

// import Form from "./home_work/Form";
// import List from "./01.03.2021/List";

// import InputLength from "./03.03.2021/InputLength";
// import Color from "./03.03.2021/Color";
// import InputRange from "./03.03.2021/InputRange";
// import Dollar from "./03.03.2021/Dollar";
// import Temp from "./03.03.2021/Temp";
// import FontSize from "./03.03.2021/FontSize";
// import InputColor from "./03.03.2021/InputColor";
// import ColorSliders from "./03.03.2021/ColorSliders";

import Rotate from "./home_work/Rotate";
import Reverse from "./home_work/Reverse";

import Massive from "./03.03.2021/Massive";
import List1 from "./05.03.2021/List1";
import List2 from "./05.03.2021/List2";
import AllClassWork from "./05.03.2021/AllClassWork";

import Example from "./home_work/09.03.2021/Example";
function App() {
  // const [todos, setTodos] = useState([]);


  let list = ["banana", "orange", "lemon"];



  return (
    <div className="App">
      {/* <Switch />
      <Counter />
      <Name />
      <hr />
      <Text />
      <hr />

      <Form
        onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text }) => (
          <ul>
            <li>{text}</li>
          </ul>
        ))}
      </div> */}
      {/* <Text /> */}

      {/* <List/>
      <hr />
      <hr />
      <hr /> */}
      {/* <h3 >Example 1</h3>
      <InputLength value="test" />

      <h3>Example 2</h3>
      <Color />

      <h3>Example 3</h3>
      <InputRange min={0} max={10} value={3}/>

      <h3>Example 4</h3>
      <Dollar />

      <h3>Example 5</h3>
      <Temp />

      <h3>Example 6</h3>
      <FontSize />

      <h3>Example 7</h3>
      <InputColor />

      <h3>Example 8</h3>
      <ColorSliders min={0} max={255}/> */}

      <h3>home_work</h3>
      <Rotate value={0} />

      <h3>home_work2</h3>
      <Reverse />

      <Massive />

     <List1 items={list}/>
     
     <List2 item={list} />

     <AllClassWork />

     <Example />
    </div>
  );
}

export default App;
