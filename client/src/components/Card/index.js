import React from "react";
import './index.css'

export default function Card (props){
    return (
        <div className='card'>
            <h4>{props.nombre}</h4>
            {props.img?  <img className='img' src={props.img}/>: <span>imagen</span>}
           {(props.temp || props.peso)? <div className='informacion'>
               <div>Temperamento: {props.temp}</div>
               <div>Peso: {props.peso} kg</div>
           </div>:<span>Información</span> }
           
        </div>
    )
}