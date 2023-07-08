import { db as prisma} from '../utils/db.server'
//obtiene todas las clases
const getAllClases = async () =>{
    try{
        const clases = await prisma.clases.findMany()
        return clases

    } catch(error){
        console.log('getAllClases'+error)
        }
}
//obtiene una unica clase
const getOneClase = async (idClase:number)=>{
    const clase = await prisma.clases.findUnique({
        where: {
            id_clases:idClase
        }
    })
    return clase
}
//Actualiza las clases
const updateClases = async (id:any,clase:any)=>{
    const{sala_id,profe_id,nombre_clase_id,valor,descripcion,hora,fecha}=clase
    const salaActualizar= await prisma.clases.update({
        where:{
            id_clases:id
        },data:{
            sala_id,profe_id,nombre_clase_id,valor,descripcion,hora,fecha
        },select: {
            id_clases:true
        }
    })
    return salaActualizar
}
//crea una clase
const createClases = async (id :number,clase:any)=>{
    const{sala_id,profe_id,nombre_clase_id,valor,descripcion,hora,fecha}=clase
    const crteClase = await prisma.clases.create({
      data: {sala_id,profe_id,nombre_clase_id,valor,descripcion,hora,fecha

      },select: {
        id_clases:true
      }  
    })
    return crteClase
}
//elimina una clase
const deleteClase = async (id:number)=>{
    const dlteClase = await prisma.clases.delete({
        where: {
            id_clases :id
        }
    })
}

export{
    deleteClase,
    createClases,
    updateClases,
    getOneClase,
    getAllClases


}