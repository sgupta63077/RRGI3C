import React from 'react'

import Childcomponent from './Childcomponent'

const Parentcomponent = () =>{
    const mobile ={
        name:"Vivo",
        price:56000,
        color:"black"


}

     const car=["buloro","bmw","fortunure"]
    return(
         <div>
              <Childcomponent  phone= {mobile} van= {car}/>

        </div>
    
    )
    
}
export default Parentcomponent