import React from 'react'
import ChildD from './ChildD'

const ChildC = ({name}) => {
  return (
    <> 
    <h1>ChildC component is running</h1>
    <ChildD name={name}/>
    </>
  )
}

export default ChildC