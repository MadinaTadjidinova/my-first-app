import { useState } from "react";

function Rotate({ value }) {
  const [rotate, setRotate] = useState(value ?? "");
  return (
    <div className="rotate">
      <div
        style={{
          backgroundColor: "red",
          width: 80 + "px",
          height: 80 + "px",
          margin: 30 + "px",
          transform: `rotate(${rotate + "deg"})`,
        }}
      ></div>
      <input
        type="range"
        min={0}
        max={360}
        value={rotate}
        onInput={(event) => setRotate(event.target.value)}
      />
    </div>
  );
}
export default Rotate;
