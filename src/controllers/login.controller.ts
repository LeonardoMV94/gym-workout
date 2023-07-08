//importa express framework
import express, { Request, Response } from "express";
//importa el modelo de usuarios
import {getOneUsuario} from '../models/usuarios.model'
import { userInfo } from "os";
import { get } from "http";
import { Prisma } from "@prisma/client";

const router = express.Router()

// obtener el modelo con crud
//renderiza la vista login
router.get('/', ( req: Request, res: Response) => {
    res.render('login', {
        title: 'Login | Workout'
    })
})

//renderiza la vista main
router.post('/', async( req: Request, res: Response) => {    

    res.render('main', {
        title: 'Main | Workout'
    })
})

//obtiene un usuario con su correo y password
router.post('/inicio-sesion', async( req: Request, res: Response) => {
    const {correo, password} = req.body
    console.log("req.body: " + correo +" " + password)
    const usuario: any = await getOneUsuario(correo, password)   
    console.log(usuario)         
    res.json(usuario)
})


router.get('/inicio-sesion', async ( req: Request, res: Response) => {
    const {correo, password} = req.body
    const usuario = await getOneUsuario(correo, password)
    console.log(usuario)
    res.json(usuario)
})


export default router