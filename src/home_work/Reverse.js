import { useState } from "react";

function Reverse({ value }) {
    const [text, setText] = useState(value ?? "");


    let reverseText = text.split("").reverse().join("");
    return (
        <div className="Reverse">
            <input
                type="text"
                value={text}
                onInput={(event) => setText(event.target.value)} />
            <span>{reverseText}</span>
        </div>
    );
}
export default Reverse;

//toWayWhyaning