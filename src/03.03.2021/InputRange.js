import { useState } from "react";
function InputRange({value, min, max}){

    const [range, setRange] = useState(value ?? 0);

    return <div className="example-5">
            <p>{range}</p>
            <input 
            min={min}
            max={max}
            value= {range}
            type="range" 
             onInput={(event) => setRange(event.target.value)}/>
             {range}/{max}
    </div>   
}
export default InputRange;