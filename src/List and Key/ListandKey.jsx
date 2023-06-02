import React from "react";

const ListandKey = () => {
 // const IPL = ["CSK", "MI", "RCB", "CSK"];
    const l1 = [
       { id : "1",
            name: "lucky"
        },
        {
            id: "2",
            name:"vicky"
        }
    ]
    const result = IPL.map((ipl, index) => <h1 key={index}>{ipl}index is {index}</h1>);
  return (
    <>
      <div className="app">
        <h1>{result}</h1>
      </div>
    </>
  );
};

export default ListandKey;
