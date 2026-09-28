import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
        <h2>ename is : {props.ename}</h2>
        <h3>salary is : {props.sal}</h3>
        <h3>eid is : {props.eid}</h3>
    </div>
  )
}

export default Card