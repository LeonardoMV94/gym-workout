import express, { Request, Response } from "express";
import { createUsuario } from "../models/usuarios.model";
import bcrypt from "bcrypt"



const router = express.Router()

// obtener el modelo con crud


router.get('/', ( req: Request, res: Response) => {
    res.render('registro', {
        title: 'Registro de Usuario'
    })
})

//traspaso el getelementbyid del post hacia el framework de express
router.post('/nuevo-usuario', async( req: Request, res: Response) => {
    console.log(req.body)
    //encapsular los datos del formulario
    const {nombre, apellidoP, apellidoM, edad,correo, celular, password} = req.body
    
    // encriptar el password
    const passwordHash = await bcrypt.hash(password, 10)
    console.log("password encriptada: " + passwordHash)
    
    //crear un objeto con los datos del formulario
    const usuario = {nombre, apellidoP, apellidoM, edad: parseInt(edad), correo, celular, passwordHash, direccion_id: 1} 
    //lo envia al model y lo crea
    const usuarioCreado = await createUsuario(usuario)
    
    res.status(201).json(usuarioCreado)
})


export default router