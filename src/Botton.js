import React from 'react'

const Botton = (props) => {
    switch (props.color){
        case "cyan":
            return (
                <button className=' rounded-pill px-3 me-3'  style={{ color: "#6CD1D2", fontSize: 14, border: "1px solid #6CD1D2" }} >{props.title}</button>
                )
                case "warning-light":
                    return (
                        <button className=' rounded-pill px-3'  style={{ color: "#FF9900", fontSize: 14, border: "1px solid #FF9900" }}>Delete</button>
                    )
                    default:
                        return(
                            <button style={{ background: "#FF9900", fontSize: 14, border: "1px solid #FF9900" }} className='text-white rounded-pill px-3'>{props.title}</button>
                        )
    }
 
}

export default Botton