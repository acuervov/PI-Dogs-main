const { Router, response } = require('express');


const {Dog,Temperamento} = require('../db');
const router = Router();
const { uuid } = require('uuidv4');




router.post('/dog',async (req,res)=>{
    const {name,altura,peso, años, temps} = req.body;
     const perro = await Dog.create({
         id: uuid(),
         name: name,
         altura: altura,
         weight: peso, 
         añosvida: años, 
     })
     for (let ii = 0; ii < temps.length; ii++){
     const temperamento = await Temperamento.findAll({
             where: {
                 id: temps[ii]
             }
         })
     perro.addTemperamento(temperamento); }

    res.send("it works")
    })   //falta implementar en el front que envie esta respuesta cuando se haya completado el formulario. 

 

 module.exports = router;