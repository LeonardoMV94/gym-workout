import express, { Request, Response } from "express";
import { getAllClases, getOneClase } from '../models/clases.model';


const router = express.Router()

// obtener el modelo con crud

router.get('/', async (req: Request, res: Response) => {
    const clases = await getAllClases()
    res.render('clases', {
        title: 'Clases',
        clases: clases
    })
})

// get one clase
// localhost:3000/clases/1
router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const clase = await getOneClase(id)
    console.log("clase-detalle ", clase)
    res.render('detalle-clases', {
        title: clase?.nombre_clases?.nombre,
        clase: clase
    })
})

// router.get('/clase_pilates', ( req: Request, res: Response) => {
//     res.render('clase_pilates', {
//         title: 'pilates'
//     })
// })

// router.get('/clase_KickBoxing', ( req: Request, res: Response) => {
//     res.render('clase_KickBoxing', {
//         title: 'kickBoxing'
//     })
// })
// router.get('/clase_cardio', ( req: Request, res: Response) => {
//     res.render('clase_cardio', {
//         title: 'cardio'
//     })
// })
// router.get('/clase_boxeo', ( req: Request, res: Response) => {
//     res.render('clase_boxeo', {
//         title: 'boxeo'
//     })
// })





export default router