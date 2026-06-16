import React, { useState } from 'react'


const UseState=()=>{
    const[count,setCount]=useState(0)
    //const [quantiy,price]=useState(0)
    const inc=()=>{
        setCount((count)=> count+1)
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        <div>
            <button onClick={inc}>Inc</button>
              <button onClick={reset}>Reset</button>
              <h1>Count:{count}</h1>
        </div>
    )
}
export default UseState