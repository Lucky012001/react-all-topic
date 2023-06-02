import React, { useState } from "react";

const UsestateArray = () => {
  const [items, setItem] = useState([]);
  function addItems() {
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.random(),
      },
    ]);
  }

  return (
    <>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>
      <button onClick={addItems}>Add items</button>
    </>
  );
};

export default UsestateArray;
