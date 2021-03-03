import { useState } from "react";

import React from "react";
import Switch from "./01.03.2021/Switch";
import Counter from "./01.03.2021/Counter";
import Name from "./01.03.2021/Name";
import Text from "./01.03.2021/Text";

import Form from "./home_work/Form";

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
    </div>
  );
}

export default App;
