import React, { useState } from 'react'
import UseState from './UseState'

const Password = () =>{
    const   [showPassword, setshowPassword]=useState(false)
    const[inputPassword, setInputPassword]=useState("")

    const[liked , setliked]=useState(false)
    const likes=()=>{
        setliked(!liked)
    }
    return(
        <div>
            <input tupe={showPassword?"text":"Password"} name="" id="" value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)}/>
            <button onClick={()=>setshowPassword((ggg)=>!ggg)}>{showPassword?"Hide":"Show"}</button>
            <p>Likes: {liked?1:0}</p>
            <button onClick={likes}>{liked?"Remove like":"Add like"}</button>
        </div>
    )
}
 export default Password