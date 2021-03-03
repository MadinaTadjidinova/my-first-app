import { useState } from "react";

function FontSize({value }) {
    const [name, setName] = useState(value ?? 0);

    return(
        <div className="Name">
            <span >Example</span>
            <input
            style={{fontSize}}
             type="number"
             onInput={(event) => setName(event.target.value)} />
             <span>={name * 85} </span>
        </div>
    )
}


export default FontSize