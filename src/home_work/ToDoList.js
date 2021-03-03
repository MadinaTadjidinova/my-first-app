import { useState } from "react"

function TodoList() {
    let [list, setList] = useState(["Apple"]);
    let [li , setLi] = useState('')
    return (
        <div className="TodoList">
            <ul><li>{list}</li></ul>
            <input 
            type="text" 
            placeholder="Enter Text"
            />

            <button>Add</button>
        </div>
    )
}
export default TodoList;