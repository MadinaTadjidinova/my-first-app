import { useState } from "react";

function Dollar({value }) {
    const [name, setName] = useState(value ?? 0);

    return(
        <div className="Name">
            <span>$</span>
            <input type="number"
             onInput={(event) => setName(event.target.value)} />
             <span>={name * 85} </span>
        </div>
    )
}


export default Dollar