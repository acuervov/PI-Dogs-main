import React from "react";
import Nav from '../Navbar';
import Cards from '../Cards'; 
import './index.css'
import {getDogs} from '../../actions'
import {connect} from 'react-redux'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import loading from '../../images/loading.gif'

export function Home (props){

const {id} = useParams();

React.useEffect(()=>
{
   if (props.Perritos.length === 0) props.getDogs(); 

})

function siguiente (id){
    if (parseInt(id) +8 >props.Perritos.length) return 0; 
    else {return parseInt(id) + 8}
}

function previo (id){
    if (parseInt(id)-8<0) return props.Perritos.length - 5; 
    else {return parseInt(id)-8}
}

var perritosPagina = paginaActual(id, props); 
    return (
        <div>   
            <Nav/>
            {props.Perritos.length === 0? <img id="loading" src={loading} alt="cargando"/>:  <Cards perritos = {perritosPagina}/>}
            {!id? <div className='botones'>
            <Link to ={"/home/"}>
            <button className='botoncito'>previo</button>
            </Link>
            <Link to ={"/home/" + (8)}>
            <button className='botoncito'>siguiente</button>
            </Link>
            </div>:  <div className='botones'>
            <Link to ={"/home/" + previo(id)}>
            <button className='botoncito'>previo</button>
            </Link>
            <Link to ={"/home/" + siguiente(id)}>
            <button className='botoncito'>siguiente</button>
            </Link>
            </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Perritos: state.listaPerritos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDogs: () => dispatch(getDogs())
    }
}

function paginaActual(id, props){
    if (!id) return props.Perritos.slice(0,8); 
    else {
       id = parseInt(id); 
        return props.Perritos.slice(parseInt(id), parseInt(id + 8)); //manda dependiendo de la pagina 8 perritos
    }
} 
export default connect (mapStateToProps,mapDispatchToProps)(Home)