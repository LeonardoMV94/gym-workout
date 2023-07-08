import express, { Request, Response } from "express";
import { getAllClases,getOneClase} from '../models/clases.model';


const router = express.Router()

// obtener el modelo con crud

router.get('/', ( req: Request, res: Response) => {
    res.render('clases', {
        title: 'Clases'
    })
})

router.get('/clase_pilates', ( req: Request, res: Response) => {
    res.render('clase_pilates', {
        title: 'pilates'
    })
})

router.get('/clase_KickBoxing', ( req: Request, res: Response) => {
    res.render('clase_KickBoxing', {
        title: 'kickBoxing'
    })
})
router.get('/clase_cardio', ( req: Request, res: Response) => {
    res.render('clase_cardio', {
        title: 'cardio'
    })
})
router.get('/clase_boxeo', ( req: Request, res: Response) => {
    res.render('clase_boxeo', {
        title: 'boxeo'
    })
})





export default router