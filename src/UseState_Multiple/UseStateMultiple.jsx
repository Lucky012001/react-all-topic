import React, { useState } from "react";
const UseStateMultiple = () => {
  const [allvalues, setAllvalues] = useState({
    firstname: "Veera",
    lastname: "Banna",
  });
  function Update() {
    setAllvalues({ ...allvalues, firstname: "lucky", lastname: "rajput" });
  }
  return (
    <div>
      <h1>
        Firs name is {allvalues.firstname} and Last name is {allvalues.lastname}
      </h1>
      <br />
      <button onClick={Update}>Update</button>
    </div>
  );
};

export default UseStateMultiple;
