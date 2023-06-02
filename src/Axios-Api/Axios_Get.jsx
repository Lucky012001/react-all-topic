import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios_Get = () => {
  const [userData, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setdata(response.data);
    });
  }, []);
  return ( 
    <>
      <h1>
        Axios component is running
        {userData.map((data) => {
          return <div>{data.name}</div>;
        })}
      </h1>
    </>
  );
};

export default Axios_Get;
