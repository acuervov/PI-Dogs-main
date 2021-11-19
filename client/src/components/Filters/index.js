import React from "react";
import './index.css'
import {connect} from 'react-redux'
import {orderName, orderPeso, temperamentos,tempFilter} from '../../actions'
import { Link } from "react-router-dom";

export  function Filtro (props){

    React.useEffect(()=>{
        if(props.Temperamentos.length === 0)props.temp()
    })
    const [state, setState] = React.useState({
        temps: [],
        raza: [],
    })
    function OrderName (){
        props.Name();
    }
    function orderPeso(){
        props.Peso(props.Perritos); 
    }
    function filter (){
        props.tempFil(props.Perritos, state.temps); 
        setState({
            temps: [],
            raza: [],})
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
                <div className="tempos">
                    <h5>Temperamento</h5>
                    <select  className="state" onChange={event => {setState({...state, temps: state.temps.concat(event.target.value.trim())})}}>
           {props.Temperamentos.map(temp => {return <option key={temp.id} value = {temp.temperamento} >
                   {temp.temperamento}
                   </option>
                   })}
            </select>
                </div>
                <button onClick={filter}>Enviar</button>
            </div>     
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Temperamentos: state.temperamentos,
        Perritos: state.listaPerritos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Name: () => dispatch(orderName()),
        Peso: (arreglo) => dispatch(orderPeso(arreglo)),
        temp: () => dispatch(temperamentos()),
        tempFil: (arreglo, temps)=>dispatch(tempFilter(arreglo, temps))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Filtro)
//le hace falta implementar: 
//flecha al frente de peso y nombre que señale si es ascendente o descendente; 
//menu despleglable con todas las razas y temperamentos