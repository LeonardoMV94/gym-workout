import{  db as prisma} from '../utils/db.server'

//obtiene todas las comunas
const getAllComunas = async () =>{
    try{
        const comunas = await prisma.comunas.findMany()
        return comunas

    } catch(error){
        console.log('getAllComunas'+error)
        }
}

//obtiene una unica comuna
const getOneComuna = async (id:number)=>{
    const comuna = await prisma.comunas.findUnique({
        where: {
            id_comuna:id
        }
    })
    return comuna
}

//Actualiza las comunas
const updateComunas = async (id:any,comunas:any)=>{
    const{comuna,provincia_id}=comunas
    const comunaActualizada= await prisma.comunas.update({
        where:{ id_comuna:id
        },data:{   
             comuna,provincia_id
        },select: {
             id_comuna:true
        }
    })
    return comunaActualizada
}

//crea una comuna
const createComunas = async (id :number,comunas:any)=>{
    const{comuna,provincia_id}=comunas
    const crteComuna = await prisma.comunas.create({
      data: {comuna,provincia_id

      },select: {
        id_comuna:true
      }  
    })
    return crteComuna
}

//elimina una comuna
const deleteComuna = async (id:number)=>{
    const dlteComuna = await prisma.comunas.delete({
        where: {
            id_comuna :id
        }
    })
}

export {
    getAllComunas,
    getOneComuna,
    updateComunas,
    createComunas,
    deleteComuna

}