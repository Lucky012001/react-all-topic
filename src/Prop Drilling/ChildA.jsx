import React from 'react'
import ChildB from './ChildB'

const ChildA = ({name,vname}) => {
  return (
    <>
    <h1>ChildA component is running</h1> 
    <ChildB name={name} vname={vname}/>
    </>
  )
}

export default ChildA 