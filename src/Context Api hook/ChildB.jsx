import React from 'react'
import ChildC from './ChildC'

const ChildB = ({name}) => {
  return (
    <>
    <h1>ChildB component is running </h1>
    <ChildC name={name}/>
    </>
  )
}

export default ChildB