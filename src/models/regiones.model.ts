import { db as prisma} from '../utils/db.server'

const getAllRegiones = async() => {
    try {
        const regiones = await prisma.regiones.findMany()
        return regiones   

    } catch (error) {
        console.log(`getAllRegiones error: ${error}`)
    }
}

const getOneRegiones = async (id: number) =>{
    const regiones = await prisma.regiones.findUnique({
        where:{
            id_region:id
        }
    })
    return regiones
}

const updateRegion = async (id:any,region:any)=>{
    const {nombre,ordinal}=region
   const reginActualizada = await prisma.regiones.update({
    where:{
        id_region:id
    },
    data: {
        nombre,ordinal       
    },
    select: {
        id_region: true
    }
   })
   return reginActualizada
}

const createRegion =async (id:number,region:any)=>{
    const {nombre,ordinal}=region
    const crtRegion= await prisma.regiones.create({
        data: {
            nombre,ordinal
        },
        select:{
            id_region:true
        }
    })
    return createRegion
}
const deleteRegion = async (id:number)=>{
    const dlteRegion = await prisma.regiones.delete({
       where: {
        id_region: id
       } 
    })    
}

export {
    getAllRegiones,
    getOneRegiones,
    createRegion,
    deleteRegion,
    updateRegion 
    
}