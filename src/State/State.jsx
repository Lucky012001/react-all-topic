import React  from "react";

const State = () => {
  
  let count = 10;
  function update() {
    count = 15;
  }

  return (
    <>
      <h1>State component is running {count}</h1>
      <button onClick={update}>update</button>
    </>
  );
};

export default State;
