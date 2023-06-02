import axios from "axios";
import React, { useState } from "react";

const Axios_Post = () => {
  const data = { fname: "", lname: "" };
    const [inputData, setInputdata] = useState(data)
    
    const handleData = (e) => {
      setInputdata({...inputData,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
            .then((response) => {
            console.log(response)
        })
    }
  return (
    <>
      <label>First Name: </label>
      <input
        type="text"
        name="fname"
        value={data.fname}
        onChange={handleData}
      ></input>
      <br />
      <label>Last Name: </label>
      <input
        type="text"
        name="lname"
        value={data.lname}
        onChange={handleData}
          ></input>
          <br />
          <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Axios_Post;
