import React from "react";
import {Link} from 'react-router-dom'
import perrito from '../../images/Bulldog.jpeg'
import './index.css'

export default function Nav (){
    return (
        <div className="nav">
           <Link to={'/home'} style={{textDecoration: 'none', color: 'black'}}>
               <div className="home">
               <img className="logo" src={perrito} alt="perrito Punkero"/>
               <h4>Home</h4>
               </div>
           </Link> 
           <Link to={'/form'} style={{textDecoration: 'none', color: 'black'}}>
               <div className="perrito">
               <h4>Crea tu Perrito</h4>
               </div>
           </Link> 
           <Link to={'/random'} style={{textDecoration: 'none', color: 'black'}}>
               <div className="random">
               <h4>Perrito Random</h4>
               </div>
           </Link>
           <div className='input'>
               <input type="text" placeholder="busca raza de perrito"></input>
               <Link to ={'/Search'} style={{textDecoration: 'none', color: 'black'}}>
               <span className='Buscar'>Buscar</span>
               </Link>
           </div>
        </div>
    )
}