import React, { useState } from "react";

const From_control = () => {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  function handleChange(e) {
   // console.log(e.target.name);
    if (e.target.name === "firstName") {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPswd(e.target.value);
    }
  }

  return (
    <>
      <form>
        <label>First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          name="password"
          value={pswd}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default From_control;
