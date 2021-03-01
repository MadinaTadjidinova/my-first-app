import { useState } from "react";

function Text() {
  const [text, setText] = useState("");

  return (
    <div className="Text">
      <input
        type="text"
        value={text}
        placeholder="Enter text"
        onInput={(event) => setText(event.target.value.trim())}
      />
      <input
        type="text"
        value={text}
        placeholder="Enter text"
        onInput={(event) => setText(event.target.value.trim())}
      />
    </div>
  );
}

export default Text;

//toWayWhyaning