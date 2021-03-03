
import { useState } from "react";
function InputColor({ value }) {

    const [color, setColor] = useState("#005500");

    return (
        <div className="example">
        <span style={{color: color }}>Exmaple</span>
            <input
                type="color"
                value={color}
                placeholder="Enter Text"
                onInput={(event) => setColor(event.target.value)}>
            </input>
        </div>
    )
}
export default InputColor; 