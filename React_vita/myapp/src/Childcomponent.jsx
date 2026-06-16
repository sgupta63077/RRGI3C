import React from 'react'


const Childcomponent = ({ phone,van}) =>{
    return (
        <div>
            <p>{phone.name}</p>
            <p>{phone.price}</p>
            <p>{phone.color}</p>

            <div>
                {
                    van.map((car)=>{
                        return(
                            <>
<ul>
    <li>
        {car}
    </li>
</ul>

                            </>
                        )

                    })
                }
            </div>

        </div>
    )
}
export default Childcomponent