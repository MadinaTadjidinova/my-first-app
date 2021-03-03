import { useState } from "react"

function TodoList() {
    let [list, setList] = useState([""]);
    let [li , setLi] = useState('')
    return (
        <div className="TodoList">
            <ul><li>{li}</li></ul>
            <input 
            type="text" 
            placeholder="Enter Text"
            />

            <button onClick={() => setList}>Add</button>
        </div>
    )
}
export default TodoList;