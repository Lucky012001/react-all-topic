import React, { createContext } from 'react'
import ChildD from './ChildD'

const data = createContext()
const data1 = createContext()
const Ap = () => {
const name = "lucky"
const lname = "Rajput"
  return (
    <> 
     <h1>App component Name transfar A to D</h1>

       
     <data.Provider value={name}> 
     <data1.Provider value={lname}> 
     <ChildD/>
     </data1.Provider>
     </data.Provider>
     
    </>
  )
}

export default Ap
export {data,data1}