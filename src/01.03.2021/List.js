import { useState } from "react";

function List() {
    const [list, setList] = useState("");
   
    return(
        <div className="List">
            <ul>
                <li>{list}</li>
            </ul>
            <input type="text"
            placeholder="Text"
            
             onInput={(event) => setList(event.target.value.trim())} />
              <button onClick={() => setList(list)}>Add</button>
        </div>
    )
}


export default List;


;