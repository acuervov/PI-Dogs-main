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
        temps: [], 
    })
function handleSubmit(){
     props.post(state); 

    // setSate({ nombre: "", 
    // altura: "", 
    // peso: "",
    // añosVida: "", 
    // temps: [], })
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
           <div className="Nav">Temperamentos 
               <ul id="lista">
                   {props.Temperamentos.map(temp => {return <li>
                   <button className="temps" key={temp.id} onClick={()=>{setSate({...state, temps: state.temps.concat(temp.id)})}}>{temp.temperamento}</button>
                   </li>
                   })}
               </ul>
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

export default connect (mapStateToProps,mapDispatchToProps)(Form)