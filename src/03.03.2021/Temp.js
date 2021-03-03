import { useState } from "react";

function Temp({value }) {
    const [temp, setTemp] = useState(value ?? 0);

    return(
        <div className="Temp">
            <input 
            type="number"
             onInput={(event) => setTemp(event.target.value)} />
             <span >C={temp * 33.8}F </span>
        </div>
    )
}


export default Temp