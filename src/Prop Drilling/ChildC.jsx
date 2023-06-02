import React from 'react'
import ChildD from './ChildD'

const ChildC = ({name,vname}) => {
  return (
    <> 
    <h1>ChildC component is running</h1>
    <ChildD name={name} vname={vname}/>
    </>
  )
}
 
export default ChildC