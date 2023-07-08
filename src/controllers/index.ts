import express, { Application, Request, Response } from 'express'
import indexRouter from './home.controller'
import sobreNosotros from './sobreNosotros.controller'
import horario from './horario.controller'
import registro from './registro.controller'
import clases from './clases.controller'
import clasePilates from './clasePilates.controller'
import claseKickBoxing from './claseKickBoxing.controller'
import claseCardio from './claseCardio.controller'
import claseBoxeo from './claseBoxeo.controller'
import contacto from './contacto.controller'
import login from './login.controller'


const rutas = ( app : Application) => {
    const router = express.Router()
    // rutas ejemplo localhost:port/index
    // rutas ejemplo localhost:port/login
    app.use('/', indexRouter)
    app.use('/sobreNosotros', sobreNosotros)
    app.use('/contacto', contacto)
    app.use('/horario', horario)
    app.use('/registro',    registro)
    app.use('/clases',  clases)
    // app.use('/clasePilates',clasePilates)
    // app.use('/claseKickBoxing',claseKickBoxing)
    // app.use('/claseCardio', claseCardio)
    // app.use('/claseBoxeo',  claseBoxeo)
    app.use('/login',   login)
    
}


export default rutas