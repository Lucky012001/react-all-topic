import React from 'react'
import ChildA from './ChildA'

const Ap = () => {
const name = "lucky  B@nn@"
const vname = "Vicky B@nn@"
  return ( 
    <> 
     <h1>App component Name transfar A to D {name} {vname}</h1>
     <ChildA name={name} vname={vname}/>
    </>
  )
}

export default Ap