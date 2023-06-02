import React, { useRef, useState } from "react";

const UseRef = () => {
  const refElement = useRef("");
  const [input, SetInput] = useState("");
  console.log(refElement);
  function reset() {
    SetInput("");
    refElement.current.focus();
  }
  function Eventhendal() {
    refElement.current.style.color = "red";
  }

  return (
    <>
      <h1>UseRef component is running</h1>
      <input
        ref={refElement}
        type="text"
        value={input}
        onChange={(e) => {
          SetInput(e.target.value);
        }}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={Eventhendal}>Eventhendal</button>
    </>
  );
};

export default UseRef;
