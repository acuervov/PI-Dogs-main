import {GET_DOGS, NAME_ORDER, PESO_ORDER, SEARCH, GET_TEMPS, POST_DOG, GET_ID} from '../constants'

const initialState = {
    listaPerritos: [],
    searchResult: [],
    perritoRandom: {},
    temperamentos: [],
    exitoPost: "",
    detalle: [],
}

export const reducer =  (state = initialState, action) => {
    switch (action.type){
        case GET_DOGS:
            return {
                ...state, 
                listaPerritos: action.payload,
             }
        case NAME_ORDER: 
            return {
                ...state, 
                listaPerritos: state.listaPerritos.reverse(),
            }
        case PESO_ORDER: 
            return {
                ...state, 
                listaPerritos: action.payload,
            }
        case SEARCH: 
            return {
                ...state,
                searchResult: action.payload,
            }
        case GET_TEMPS: 
            return {
                ...state,
                temperamentos: action.payload,
            }
        case POST_DOG: 
            return {
                ...state, 
                exitoPost: action.payload,
            }
        case GET_ID: 
            return {
                ...state, 
                detalle: action.payload, 
            }
        default: return state; 
    }
}

export default reducer; 