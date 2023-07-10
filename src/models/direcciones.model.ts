import {db as prisma} from '../utils/db.server'

//obtiene todas las direcciones
const getAllDirecciones = async () =>{
    try{
        const direcciones = await prisma.direcciones.findMany()
        return direcciones

    } catch(error){
        console.log('getAllDirecciones'+error)
        }
}

//obtiene una unica direccion
const getOneDireccion = async (id:number)=>{
    const direccion = await prisma.direcciones.findUnique({
        where: {
            id_direccion:id
        }
    })
    return direccion
}

//Actualiza las direcciones
const updateDirecciones = async (id:any,direccion:any)=>{
    const{calle,numero,comuna_id,}=direccion
    const direccionActualizada= await prisma.direcciones.update({
        where:{ id_direccion:id
        },data:{   
             calle,numero,comuna_id
        },select: {
             id_direccion:true
        }
    })
    return direccionActualizada
}

//crea una direccion
const createDirecciones = async (id :number,direccion:any)=>{
    const{calle,numero,comuna_id}=direccion
    const crteDireccion = await prisma.direcciones.create({
      data: {calle,numero,comuna_id

      },select: {
        id_direccion:true
      }  
    })
    return crteDireccion
}

//elimina una direccion
const deleteDireccion = async (id:number)=>{
    const dlteDireccion = await prisma.direcciones.delete({
        where: {
            id_direccion :id
        }
    })
}

export{
    deleteDireccion,
    createDirecciones,
    updateDirecciones,
    getOneDireccion,
    getAllDirecciones
    
}