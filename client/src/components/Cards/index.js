import React from "react";
import Filters from '../Filters'
import './index.css'
import Card from '../Card'
import { Link } from "react-router-dom";

export default function Cards (props){
    return (
        <div>
            <Filters/>
            <div className="listado">
                <ul>
                  {props.perritos? props.perritos.map(perro => {
                      if (!perro.image || !perro.weight) return <Link to= {"/Dog/"+(perro.id)} style={{textDecoration: 'none', color: 'black'}}> <Card nombre = {perro.name}/> </Link>
                      else {return <Link to= {"/Dog/"+(perro.id)} style={{textDecoration: 'none', color: 'black'}}><Card key={perro.id} nombre = {perro.name} img = {perro.image.url} temp = {perro.temperament} peso = {perro.weight.metric}/></Link>}
                  }): <h1>No hay perritos</h1>}
                </ul>
            </div>
        </div>
    )
}
