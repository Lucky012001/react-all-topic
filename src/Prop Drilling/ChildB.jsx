import React from 'react'
import ChildC from './ChildC'

const ChildB = ({name,vname}) => {
  return (
    <>
    <h1>ChildB component is running </h1>
    <ChildC name={name} vname={vname}/>
    </>
  )
}
 
export default ChildB