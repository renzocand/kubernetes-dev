const {Router} = require('express');
const Usuario = require('../models/usuario.model');
const router = Router();

router.get('/', (req,res)=>{
    return res.json({
        message:'Hola mundo'
    })
})

router.post('/' , async (req, res) => {
    try {
        let body = req.body;

        let usuario = new Usuario({
            nombre: body.nombre,
            puesto: body.puesto
        })
        usuarioGuardado = await usuario.save()
    
        res.status(201).json({
            ok: true,
            mensaje: 'Se guardo correctamente',
            usuarioGuardado
        });
    } catch (error) {
        res.json({
            ok:false,
            error
        })
    }
})

module.exports = router;