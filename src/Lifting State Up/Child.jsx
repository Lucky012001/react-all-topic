import React, { useState } from 'react'

const Child = (props) => {
  const [data,SetData] = useState("")
     function submit(e){
       e.preventDefault();
       props.getData(data)
     }
  return (
    <> 
     <form onClick={submit}>
      <h1>Child component is running</h1>
      <input type='text' value={data} onChange={(e)=>SetData(e.target.value)}/>
        </form>
    </>
  )
}

export default Child