import React, { useState } from 'react'

const ConditionalRendering = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)


    let message;

    // if(isLoggedIn){
    //    message = <p>welcome user</p>
    // }else{
    //     message =  <p>plz login</p>
    // }

    function handleLogin(){
        setIsLoggedIn(true)
    }

  return (
    <div>
        {
            isLoggedIn ? <p>welcome user</p> :  <p>plz login</p>
        }
            {message}

            <button onClick={handleLogin}> login</button>
    </div>
  )
}

export default ConditionalRendering