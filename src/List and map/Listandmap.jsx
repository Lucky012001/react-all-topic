import React from "react";

const Listandmap = () => {
  const result = IPL.map((ipl) => <h1>{ipl}</h1>);
  return (
    <>
      <div className="app">
        <h1>{result}</h1>
      </div>
    </>
  );
};

export default Listandmap; 
