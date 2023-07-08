import express, { Request, Response } from "express";

const router = express.Router()

router.get('/', ( req: Request, res: Response) => {
    res.render('sobreNosotros', {
        title: 'Workout | Sobre Nosotros'
    })
})


export default router