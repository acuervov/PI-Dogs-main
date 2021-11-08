const { Router, response } = require('express');

const axios = require('axios');
const {Dog,Temperamento} = require('../db');
const router = Router();




router.get('/dogs',(req,res)=>{
    var respuesta = []; //En este arreglo se usara para concatenar ambas respuestas. 

    axios({
        method: 'get',
        url: 'https://api.thedogapi.com/v1/breeds',
        "headers": {
                    "X-Api-Key": "12f0b6c0-cd5e-449d-b138-0cbb0b99e6a7"
                }
      })
        .then( response =>  {
        respuesta = response.data;
            Dog.findAll({
                include: Temperamento
            })
            .then(Dogs => {res.json(respuesta.concat(Dogs))})
        })
})

router.get('/dogs/name-:name',(req,res)=>{
    
    axios({
        method: 'get',
        url: 'https://api.thedogapi.com/v1/breeds',
        "headers": {
                    "X-Api-Key": "12f0b6c0-cd5e-449d-b138-0cbb0b99e6a7"
                }
      })
        .then( response =>  {
       var filtro1 = response.data.filter(x => x.name.toLowerCase().includes(req.params.name.toLowerCase()))
       Dog.findAll({
        include: Temperamento
    })
            .then(Dogs => {
            var filtro2 = Dogs.filter(x => x.name.toLowerCase().includes(req.params.name.toLowerCase()))
            var filtro = filtro1.concat(filtro2); 
            res.json(filtro);
        })
        })
   
})

router.get('/dogs/id-:id', (req,res) => {
    axios({
        method: 'get',
        url: 'https://api.thedogapi.com/v1/breeds',
        "headers": {
                    "X-Api-Key": "12f0b6c0-cd5e-449d-b138-0cbb0b99e6a7"
                }
      })
        .then( response =>  {
       var filtro1 = response.data.filter(x => x.id==req.params.id);//solo doble igual porque uno es numero y el otro string
       Dog.findAll({
        include: Temperamento
    })
            .then(Dogs => {
            var filtro2 = Dogs.filter(x => x.id==req.params.id);
            var filtro = filtro1.concat(filtro2); 
            res.json(filtro);
        })
        }) 
}); 
                  
router.get('/dog',(req,res)=>{
    Temperamento.findAll()
    .then(Temps => {if (Temps.length === 0) temp() // funcion temp es la que busca todos los temperamentos en la API y los envia a la base de datos.
        else {res.json(Temps)}
    
    })
 })   


module.exports = router;
