import React from "react";
import Nav from "../Navbar";
import './index.css'

export default function Form (){
    return (
        <div className='form'>
           <Nav/>
           <h2>Crea tu propia raza de perrito</h2>
           <span>Nombre*</span>
           <input type="text" placeholder="Nombre"></input>
           <span>Altura*</span>
           <input type="text" placeholder="Altura"></input>
           <span>Peso*</span>
           <input type="text" placeholder="Peso"></input>
           <span>Años de vida</span>
           <input type="text" placeholder="Años de vida"></input>
        </div>
    )
}