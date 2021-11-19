import React from "react";
import Nav from "../Navbar";
import './index.css'
import { temperamentos, postDog} from "../../actions";
import { connect } from "react-redux";

export  function Form (props){
    const [state, setSate] = React.useState({
        nombre: "", 
        altura: "", 
        peso: "",
        añosVida: "", 
        origen: "",
        temps: [], 
    })
function handleSubmit(){
    if (!validate(state)) props.post(state); 
    
    setSate({ 
    nombre: "", 
    altura: "", 
    peso: "",
    añosVida: "", 
    origen: "",
    temps: [], })
}
    
React.useEffect(()=>
{
   if (props.Temperamentos.length === 0) props.temp(); 
})

    return (
        <div className='form'>
           <Nav/>
           <h2>Crea tu propia raza de perrito</h2>
           <span>Nombre*</span>
           <input type="text" placeholder="Nombre" value={state.nombre} onChange={event => {setSate({...state, nombre: event.target.value})}}></input>
           <span>Altura*</span>
           <input type="text" placeholder="Altura" value={state.altura} onChange={event => {setSate({...state, altura: event.target.value})}}></input>
           <span>Peso*</span>
           <input type="text" placeholder="Peso" value={state.peso} onChange={event => {setSate({...state, peso: event.target.value})}}></input>
           <span>Años de vida</span>
           <input type="text" placeholder="Años de vida" value={state.añosVida} onChange={event => {setSate({...state, añosVida: event.target.value})}}></input> 
           <span>Pais de origen</span>
           <input type="text" value={state.origen} onChange={event => {setSate({...state, origen: event.target.value})}}/>
           <div className="Nav">Temperamentos 
           <select  className="state" onChange={event => {setSate({...state, temps: state.temps.concat(event.target.value)})}}>
           {props.Temperamentos.map(temp => {return <option key={temp.id} value = {temp.id} >
                   {temp.temperamento}
                   </option>
                   })}
            </select>
           </div>
           <button type= "submit" id="boton" onClick={handleSubmit}>Enviar</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Temperamentos: state.temperamentos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        temp: () => dispatch(temperamentos()),
        post: (data) => {dispatch(postDog(data))}
    }
}
export function validate(input) {
    let errors = false 
    if (!input.nombre) {
        alert('Name is required')
      errors = true; 
    } else if (!/^[A-Za-z0-9]+$/g.test(input.nombre)) {
        alert('Name is invalid')
        errors = true; 
    }
    

    if (!input.altura) {
        alert('altura is required')
      errors = true
    } else if (!/^[A-Za-z0-9]+$/g.test(input.alutra)) {
        alert('altura is invalid')
        errors = true; 
    }

    if (!input.peso) {
        alert('peso is required')
      errors = true
    } else if (!/^[A-Za-z0-9]+$/g.test(input.peso)) {
        alert('peso is invalid')
        errors = true; 
    }
    return errors;
  };

export default connect (mapStateToProps,mapDispatchToProps)(Form)