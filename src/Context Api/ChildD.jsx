import React from 'react'
import { data,data1 } from './Ap'

const ChildD = () => {
  return (
    <>
     <data.Consumer>{
              (name)=> {
                      return(
                            <data1.Consumer>{
                                  (lname)=> {
                                          return(
                                             <> 
                                             <h1>ChildD component is running</h1>
                                             <h1>my name is {name} {lname}</h1>
                                             </>
                                          )
                                  }
                              }
                            </data1.Consumer>
                          )
                   }
      }
     </data.Consumer>
    </>
  )
}

export default ChildD