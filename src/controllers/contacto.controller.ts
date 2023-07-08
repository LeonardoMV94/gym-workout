import express, { Request, Response } from "express";

const router = express.Router()

// obtener el modelo con crud

router.get('/', ( req: Request, res: Response) => {
    res.render('contacto', {
        title: 'contacto'
    })
})


export default router