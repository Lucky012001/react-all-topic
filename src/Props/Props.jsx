import React from 'react'

const Props = (props) => {

    console.log(props)
  return (
      <>
      <h1>{props.name} {props.name2}</h1>
      <h1>{props.lucky_number }</h1>
          <h2>{props.lname}</h2>
    </>
  )
}

export default Props