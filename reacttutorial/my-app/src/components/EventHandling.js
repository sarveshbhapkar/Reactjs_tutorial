import React, { useState } from 'react'

const EventHandling = () => {

    const [count,setCount] = useState(0)

    function handleClick(){
        setCount(count +1 )
    }

    function resetEvent(){
        setCount(0)
    }

  return (
    <div>
        <h1>event handling example</h1>
        <p>count : {count}</p>
        <button onClick={handleClick}>increment</button>
        <button onClick={resetEvent}>reset</button>
    </div>
  )
}

export default EventHandling