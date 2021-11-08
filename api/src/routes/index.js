const { Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogGet = require('./dogGet.js');
const dogPost = require('./dogPost');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/home',dogGet);
router.use('/form',dogPost);

module.exports = router;
