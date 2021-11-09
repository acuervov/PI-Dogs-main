import {GET_DOGS} from '../constants'
import axios from 'axios'

export function getDogs (){
    axios({
        method: 'get',
        url: 'http://localhost:3001/home/dogs',
      })
      .then(response => dispatch({type: GET_DOGS, payload: response}) )
}