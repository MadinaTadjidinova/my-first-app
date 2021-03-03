import { useState } from "react";

function FontSize({value }) {
    const [size, setSize] = useState(10);

    return(
        <div className="Name">
            <span style={{fontSize: size + "px"}}>Example</span>
            <input
            style={{fontSize: size + "px"}}
             type="number"
             value={size}
             onInput={(event) => setSize(event.target.value)} />
        </div>
    )
}


export default FontSize