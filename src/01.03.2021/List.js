const { useState } = require("react")

function List(){

    const [list, setList] = useState([<li>Apple</li>, <li>Banana</li>]);
    const [form, setForm] = useState("");


    // for (let i = 0; i <list.length; i++) {
    //     list.push(<li>{list[i]}</li>)
    // }
    
    

    return <div className="example-5">
            <ul>{list}</ul>
            {/* <h1>{list}</h1> */}
            <input type="text" onInput={(event) => setForm(event.target.value.trim())}/>
            <button onClick={(event) => setForm(list.push(<li>{form}</li>))}>Add</button>
            <button onClick={(event) => setForm(list.pop(<li>{form}</li>))}>Del</button>

    </div>
    
}
 
export default List;