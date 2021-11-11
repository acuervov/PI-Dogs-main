import {GET_DOGS, NAME_ORDER,PESO_ORDER, SEARCH,GET_RANDOM, GET_TEMPS, POST_DOG, GET_ID, TEMP_FILTER} from '../constants'

export function getDogs (){
  return function (dispatch){
    fetch("http://localhost:3001/home/dogs", {
      "method": "GET",
    })
    .then(response => response.json())
    .then(json => dispatch({type: GET_DOGS, payload: json})); 

  }
}

export function orderName(){
  return function (dispatch){
    dispatch({type: NAME_ORDER})
  }
}

export function orderPeso(arreglo){
  return function (dispatch){
    var arregla = []; 
    var arreglu = [];
    arreglo.map(item =>{if(item.hasOwnProperty("weight"))arreglu.push(item)})
    arreglu.map(item =>{if(item.weight.hasOwnProperty("metric"))arregla.push(item)})
    arregla.map(dog => {
      var num =  dog.weight.metric.slice(-2); 
      num = parseInt(num);  
      dog.weight = num
      function compare( a, b ) {
    if ( a.weight < b.weight ){
      return -1;
    }
    if (a.weight > b.weight ){
      return 1;
    }
    return 0;
  }
  arregla.sort(compare)
      })
    dispatch({type: PESO_ORDER, payload: arregla})
  }
}

export function search (dogName){
  return function (dispatch){
    fetch(("http://localhost:3001/home/dogs/name-"+(dogName)), {
      "method": "GET",
    })
    .then(response => response.json())
    .then(json =>{ dispatch({type: SEARCH, payload: json})});
  }
}

export function temperamentos(){
  return function (dispatch){
    fetch(("http://localhost:3001/home/dog"), {
      "method": "GET",
    })
    .then(response => response.json())
    .then(json => {dispatch({type: GET_TEMPS, payload: json})});
  }
}

export function postDog(data){
  return function (dispatch){
    fetch(("http://localhost:3001/form/dog"), {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.nombre,
        altura: data.altura,
        peso: data.peso,
        años: data.añosVida,
        temps: data.temps,})
      }
    )
    .then(response => {dispatch({type: POST_DOG, payload: response})})
    .catch(error => console.log(error)); 
  }
}

export function getDogID (id){
  return function (dispatch){
    fetch(("http://localhost:3001/home/dogs/id-"+(id)), {
      "method": "GET",
    })
    .then(response => response.json())
    .then(json => dispatch({type: GET_ID, payload: json})); 

  }
}

export function tempFilter(perritos, temps){
  return function (dispatch){
    var result = []; 
    console.log(temps)
    for (let ii = 0; ii< temps.length; ii++){
      var aux = perritos.filter(perro=> {if (perro.temperament)return perro.temperament.includes(temps[ii])})
      result = result.concat(aux);
      }
    dispatch({type: TEMP_FILTER, payload: result})
  }
}

export function getRandom (){
  return function (dispatch){
    fetch("https://api.thedogapi.com/v1/images/search", {
      "method": "GET",
    })
    .then(response => response.json())
    .then(json => dispatch({type: GET_RANDOM, payload: json})); 

  }
}