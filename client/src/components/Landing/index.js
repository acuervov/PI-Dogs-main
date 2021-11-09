import React from "react";
import './index.css'
import perrito from '../../images/PerritoPunkero.jpeg'
import {Link} from 'react-router-dom'

export default function Landing (){
    return (
        <div className = "Fondo">
            <Link to={'/home'}>
            <div className = "Carta">
                <h1>Perritoslindos.com</h1>
                <img src = {perrito} alt="imagen de perrito punkero"/>
                <button className='button'><h1>Entra</h1></button>
            </div>
            </Link>
        </div>
    )
}