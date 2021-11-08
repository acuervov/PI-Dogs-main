const axios = require('axios');
const {Temperamento} = require('./db');

module.exports = function temp (){
    axios({
        method: 'get',
        url: 'https://api.thedogapi.com/v1/breeds',
        "headers": {
                    "X-Api-Key": "12f0b6c0-cd5e-449d-b138-0cbb0b99e6a7"
                }
      })
      .then(response => {
            var totalTemp = []; 
            for (let ii = 0; ii < response.data.length; ii++){
                if (response.data[ii].temperament){
                var temps = response.data[ii].temperament.split(','); 
                 for (let jj = 0; jj < temps; jj++){
                     temps[jj] = temps[jj].trim(); // quitamos los espacios; 
                    }
                 totalTemp = totalTemp.concat(temps);  
                }   
            }
            // console.log(totalTemp)
           var finalTempList = []; 
           totalTemp.forEach(x => {
               if (!finalTempList.includes(x)) finalTempList.push(x); 
           })

           // aquí se pone en la base de datos los temperamentos; 
          finalTempList.sort(); 
          for (let ii = 0; ii < finalTempList.length; ii ++){
            Temperamento.create({
                temperamento: finalTempList[ii]
            })
          }
      })
      .catch(error => console.log(error))

}

