import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multipliction = useMemo(
    function multipl() {
      console.log("*******");
      return add * 10;
    },
    [add]
  );
  return (
    <>
      <h1>UseMemo component is running</h1>
      <br />
      <h1>{multipliction}</h1>
      <h1>{add}</h1>
      <br />
      <button onClick={() => setAdd(add + 1)}>Addtion</button>
      <br />
      <h1>{minus}</h1>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
    </>
  );
};

export default UseMemo;