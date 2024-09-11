import React, { useState } from 'react'

const User = () => {

    const [firstName ,setFirstName]= useState('sarvesh bhapkar')

    function updateUser(){
        setFirstName('darvesh darkar')
    }

  return (
    <div>

    <h1>user details</h1>
    <p>{firstName}</p>

    <button onClick={updateUser}> update user</button>
     </div>
  )
}



export default User