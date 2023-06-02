import React, { useContext } from 'react'
import { data,data1,data2 } from './Ap'
 
 

const ChildD = () => {
  const firstName = useContext(data)
  const lastName = useContext(data1)
  const myage = useContext(data2)
   
  return (
    <>
      <h1>ChildD component is running</h1>
      <h1>my name is {firstName} {lastName} {myage} </h1>
    </>
  )
}

export default ChildD