import React from "react";
import './index.css'
import {connect} from 'react-redux'
import {orderName, orderPeso} from '../../actions'
import { Link } from "react-router-dom";

export  function Filtro (props){
    function OrderName (){
        props.Name();
    }
    function orderPeso(){
        props.Peso(props.Perritos); 
    }
    return (
        <div className="filtro">
            <Link to= {'/home'}>
             <div className="orden">
                <h4>ordenar</h4>
                <button id='peso' onClick={orderPeso}>peso</button>
                <button id='nombre' onClick={OrderName}>nombre</button>
            </div>
            </Link>
            <div className="filtra">
                <h4>filtrar</h4>
                <div>
                    <h5>Temperamento</h5>
                    <nav>
                        <ul id="menutemp">
                        </ul>
                    </nav>
                </div>
                <div>
                    <h5>Raza</h5>
                    <nav>
                        <ul id="menuraza">
                        </ul>
                    </nav>
                </div>
            </div>     
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
        Name: () => dispatch(orderName()),
        Peso: (arreglo) => dispatch(orderPeso(arreglo))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Filtro)
//le hace falta implementar: 
//flecha al frente de peso y nombre que señale si es ascendente o descendente; 
//menu despleglable con todas las razas y temperamentos