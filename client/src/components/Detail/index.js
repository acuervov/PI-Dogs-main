import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import {getDogID} from '../../actions'
import Nav from '../Navbar'
import './index.css'

export function Detail(props){

    const {id} = useParams(); 

    React.useEffect(()=>{
        props.getDog(id); 
    })

    return (
    <div>
        <Nav/>
        <div className="detail">
            <div id="name">{props.detalle[0]? <h1>{props.detalle[0].name}</h1>: <span>No hay perrito</span>}</div>
            <div id= "imagen">{props.detalle[0]? (props.detalle[0].image? <img src={props.detalle[0].image.url}></img>: <span>No hay foto</span>): <span>No hay perrito</span>}</div>
            <div id = "peso">{props.detalle[0]? (props.detalle[0].weigth? <div>Peso aproximado: {props.detalle[0].weight.metric}</div>: props.detalle[0].peso?<div>Peso aproximado: {props.detalle[0].peso}</div>: <span>sin datos de peso</span>): <span>No hay perrito, lo siento</span>}</div>
            <div id ="altura">{props.detalle[0]? (props.detalle[0].height? <div>Altura aproximado: {props.detalle[0].height.metric}</div>: props.detalle[0].altura?<div>Altura aproximado: {props.detalle[0].altura}</div>: <span>sin datos de altura</span>): <span>No hay perrito, lo siento</span>}</div>
            <div id = "años">{props.detalle[0]? (props.detalle[0].life_span? <div>Vida aproximada: {props.detalle[0].life_span}</div>: props.detalle[0].añosvida?<div>Vida aproximada: {props.detalle[0].añosvida}</div>: <span>sin datos de vida</span>): <span>No hay perrito, lo siento</span>}</div>
            <div id =" temperamentos">{props.detalle[0]? (props.detalle[0].temperament? <div>Temperamento: {props.detalle[0].temperament}</div>: props.detalle[0].temperamentos?<div>Temperamentos {props.detalle[0].temperamentos.map(temp => <li>{temp.temperamento}</li>)}</div>: <span>sin datos de temperamento</span>): <span>No hay perrito, lo siento</span>}</div>
        </div>
    </div>
    )
}
const mapStateToProps = state => {
    return {
        detalle: state.detalle,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDog: (id)=>dispatch(getDogID(id)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Detail)