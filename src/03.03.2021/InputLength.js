import { useState } from "react";

function InputLength({ value }) {
    const [text, setText] = useState(value ?? "");
    return (
        <div className="InputLength">
            <input
                type="text"
                value={text}
                onInput={(event) => setText(event.target.value)} /> {text.length}
        </div>
    );
}
export default InputLength;