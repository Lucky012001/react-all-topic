import React, { useRef } from "react";

const From_Uncontrol = () => {
  const refObject = useRef();
  console.log(refObject);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(refObject.current.value.toUpperCase());
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First name</label>
        <br />
        <input type="text" ref={refObject} />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default From_Uncontrol;
