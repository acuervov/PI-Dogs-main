import React from "react";
import './index.css'

export default function Filtro (){
    return (
        <div className="filtro">
             <div>
                <h4>ordenar</h4>
                <span id='peso'>peso</span>
                <span id='nombre'>nombre</span>
            </div>
            <div>
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

//le hace falta implementar: 
//flecha al frente de peso y nombre que señale si es ascendente o descendente; 
//menu despleglable con todas las razas y temperamentos