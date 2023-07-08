import express, { Request, Response } from "express";
import { getAllClases,getOneClase} from '../models/clases.model';
const router = express.Router()

// obtener el modelo con crud

router.get('/clases', ( req: Request, res: Response) => {
    res.render('clase_oxeo', {
        title: 'boxeo'
    })
})




export default router