
import React from "react";
import Switch from "./01.03.2021/Switch";
import Counter from "./01.03.2021/Counter";
import Name from "./01.03.2021/Name";
import Text from "./01.03.2021/Text";

import TodoList from "./home_work/TodoList";


function App() {

  return (
    <div className="App">
      <Switch />
      <Counter />
      <Name />
      <hr />
      <Text />
      <hr />
      <TodoList />

    </div>
  )
}

export default App;