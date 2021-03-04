import { useState } from "react";

function Rotate({ value }) {
  const [rotate, setRotate] = useState(value ?? "");
  return (
    <div className="rotate">
      <div
        style={{
          backgroundColor: "red",
          width: 100 + "px",
          height: 100 + "px",
          margin: 10 + "px",
          transform: `rotate(${rotate + "deg"})`,
        }}
      ></div>
      <input
        type="range"
        min={0}
        max={360}
        value={number}
        onInput={(event) => setRotate(event.target.value)}
      />
    </div>
  );
}
export default Rotate;
