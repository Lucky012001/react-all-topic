import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, SetNum] = useState(0);
  const [count, SetCount] = useState(100);
  function increment() {
    SetNum(num + 1);
  }
  function decrement() {
    SetCount(count - 1);
  }
  useEffect(() => {
    console.log("UseEffect render count");
  }, [count]);

  return (
    <>
      <h1>UseEffect component is running</h1>
      <h2>Increment Button Cliked {num} times</h2>
      <button onClick={increment}>Increment</button>
      <h2>Decrement Button Cliked {count} times</h2>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default UseEffect;
