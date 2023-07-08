import express, { Application, Request, Response, json } from "express";
import cors from "cors";
// import { engine } from 'express-handlebars';
import { Liquid } from "liquidjs";

import rutas from "./controllers";
import path from "path";

const app: Application = express();
const port = process.env.PORT || 3000;


const engine = new Liquid({
    root: __dirname, // for layouts and partials
    extname: '.liquid'
})

// configuraciones liquidjs
app.engine('liquid', engine.express())
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'liquid')

app.use(cors())
// exponiendo carpeta public en el path raiz /
app.use('/',express.static(path.join(__dirname, '../public')))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// usando router
rutas(app)

try {
    app.listen(port, (): void => {
        console.clear()
        console.log(`Connected successfully on port http://localhost:${port}`);
       // console.log(path.join(__dirname, '../public'))
    });
} catch (error) {
    console.error(`Error occured: ${error}`);
}