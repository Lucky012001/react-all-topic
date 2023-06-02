import React, { useState } from 'react'

const Usestate = () => {
const [num,SetNum] = useState(0)
function increment(){
  SetNum(num + 1)
}
  return (
    <>
     <h1>UseState component is running</h1> <br />
     <h1>Button cliked {num} times</h1>
     <button onClick={increment}>Cliked</button>
    </>
  )
}

export default Usestate