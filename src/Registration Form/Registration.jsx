import React, { useEffect, useState } from "react";
import Regstyle from "./Regstyle.css";

const Registration = () => {
  const data = { name: "", email: "", password: "" };
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        console.log("Registered")
    },[flag])
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All fields are Mandatory")
        }
        else {
            setFlag(true)
        }
    }
  return (
      <>
          <pre>{(flag) ? <h2 className="ui-define">Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your E-mail"
            name="email"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Registration;