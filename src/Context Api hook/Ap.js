 import React, { createContext } from 'react'
import ChildD from './ChildD'
 
 const data = createContext()
 const data1 = createContext()
 const data2 = createContext()
 const Ap = () => {
  const name = "Vicky"
  const lname = "Rajput"
  const age = "14"
   return (
     <>
       <data.Provider value={name}>
          <data1.Provider value={lname}>
            <data2.Provider value={age}>
              <ChildD/>
            </data2.Provider>
          </data1.Provider>     
       </data.Provider>
         
     </>
   )
 }
 
 export default Ap
 export {data,data1,data2}