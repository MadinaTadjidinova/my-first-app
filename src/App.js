import { useState } from "react";

import React from "react";
import Switch from "./01.03.2021/Switch";
import Counter from "./01.03.2021/Counter";
import Name from "./01.03.2021/Name";
import Text from "./01.03.2021/Text";

import Form from "./home_work/Form";
import List from "./01.03.2021/List";

import InputLength from "./03.03.2021/InputLength";
import Color from "./03.03.2021/Color";
import InputRange from "./03.03.2021/InputRange";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Switch />
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
      </div>


      <List/>
      <hr />
      <hr />
      <hr />
      <h3>Example 1</h3>
      <InputLength value="test" />

      <h3>Example 2</h3>
      <Color />
      
      <h3>Example 3</h3>
      <InputRange min={0} max={10} value={3}/>
    </div>
  );
}

export default App;
