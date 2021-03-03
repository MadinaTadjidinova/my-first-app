import React, { useState } from "react";

export default ({ onSubmit }) => {
  const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
      value,
      onChange: (e) => setValue(e.target.value),
      resetValue: () => setValue(""),
    };
  };

  const { resetValue, ...text } = useInputValue("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input {...text}
        placeholder="Enter text"
        onInput={(event) => resetValue(event.target.value.trim())} />
    </form>
  );
};
