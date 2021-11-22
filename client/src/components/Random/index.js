import React from "react";
import Nav from "../Navbar";
import { connect} from "react-redux";
import {getRandom} from '../../actions'
import loading from '../../images/loading.gif'
import { Link } from "react-router-dom";


export  function Random (props){
React.useEffect(()=>{
   if(props.perrito.length === 0) props.getPerro(); 
})

function refresh(){
    window.location.reload();
}
    return (
        <div>
           <Nav/>
            <h1>Oprime el boton para obtener un nuevo perrito lindo que alegrara tu dia</h1>
            {props.perrito[0]? <div><img src={props.perrito[0].url} alt="img"/>
            <h2>{props.perrito[0].name}</h2></div>: <img id="loading" src={loading} alt="cargando"/>}
         <button onClick={refresh}>Nuevo perrito</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        perrito: state.perritoRandom,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPerro: ()=>dispatch(getRandom()),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Random)