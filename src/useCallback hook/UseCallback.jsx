import React, { useState,useCallback } from 'react'
import Child from './Child'

const UseCallback = () => {
    const [add,setAdd] = useState(0)
    const [minus,setMinus] = useState(100)
    const Learning = useCallback( ()=>{
    },[add])
    
  return (
    <>
    <h1>UseCallback component is running</h1>
    <Child Learning={Learning} />
    <h1>{add}</h1><br />
    <button onClick={()=>setAdd(add + 1)}>Addition</button><br />
    <h1>{minus}</h1>
    <button onClick={()=>setMinus(minus - 1)}>Subtraction</button>
    </>
  )
}

export default UseCallback