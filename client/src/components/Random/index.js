import React from "react";
import Nav from "../Navbar";
import { connect} from "react-redux";
import {getRandom} from '../../actions'


export  function Random (props){
React.useEffect(()=>{
   if(props.perrito.length === 0) props.getPerro(); 
})
    return (
        <div>
           <Nav/>
            <h1>Recarga esta pagina para ver la foto de un perrito random que te alegrara el dia</h1>
            {props.perrito[0]? <img src={props.perrito[0].url} alt="img"/>: <span>No hay perrito</span>}
           {props.perrito[0]? <h2>{props.perrito[0].name}</h2>:<span>No hay perrito</span> }
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