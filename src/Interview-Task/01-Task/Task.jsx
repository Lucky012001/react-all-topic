import React, { useState } from "react";

const Task = () => {
  let [items, updateitems] = useState([{ name: "new item", price: 0, qty: 0 }]);
  let [total, updatetotal] = useState(0);
  function calculateLogic(index, ky, val) {
    let newitems = [...items];
    newitems[index][ky] = val;
    updateitems(newitems);
    let sum = 0;
    for (let i of newitems) {
      sum = sum + i.price * i.qty;
    }
    updatetotal(sum);
  }
  function deleteItem() {
    let newitems = [...items];
      newitems.splice(items.length - 1, 1);
      updateitems(newitems);     
    }
    


  const addElement = () => {
    updateitems([...items, { name: "new item", price: 0, qty: 0 }]);
  };
  return (
    <>
      <h1>Task 1 is running</h1>
      {items.map((v, i) => {
        return (
          <div key={i}>
            Name
            <input
              type="text"
              name="name"
              value={v.name}
              onChange={(e) => {
                calculateLogic(i, "name", e.target.value);
              }}
            />
            Price
            <input
              type="number"
              name="price"
              value={v.price}
              onChange={(e) => {
                calculateLogic(i, "price", parseInt(e.target.value));
              }}
            />
            Qty
            <input
              type="number"
              name="qty"
              value={v.qty}
              onChange={(e) => {
                calculateLogic(i, "qty", parseInt(e.target.value));
              }}
            />
            <button onClick={deleteItem}>X</button>
          </div>
        );
      })}
      <button onClick={addElement}>Add Item</button>
      Total is {total}
    </>
  );
};

export default Task;
