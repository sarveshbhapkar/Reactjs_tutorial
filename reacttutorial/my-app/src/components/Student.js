import React from 'react'

const Student = (props) => {
  return (
    <div>
        <h1>sarvesh {props.student.firstName}</h1>
        <p>sarvesh bhapkar {props.student.lastName}</p>
        <p>
            {props.email.student}
        </p>


    </div>
  )
}

export default Student