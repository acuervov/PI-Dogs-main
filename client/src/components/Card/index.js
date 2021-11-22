import React from "react";
import './index.css'

export default function Card (props){
    return (
        <div className='card'>
            <h4 id="titulo">{props.nombre}</h4>
            {props.img?  <img className='img' src={props.img} alt="img"/>: <span>imagen</span>}
           {(props.temp || props.peso)? <div className='informacion'>
               <div id="temperamento">Temperamento: {props.temp}</div>
               <div id="peso">Peso: {props.peso} kg</div>
           </div>:<span>No hay información</span> }
           
        </div>
    )
}