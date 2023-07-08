import { db as prisma} from '../utils/db.server'

const getAllInscripcion = async () =>{
    try{
        const inscips= await prisma.inscripciones.findMany()
        return inscips
    }catch(error){
        console.log('getAllInscripcion'+error)
    }
}//obtener una inscripcion
const getOneInscripcion = async (id :number)=>{
    const inscips = await prisma.inscripciones.findUnique({
       where: {
        id_inscripciones:id
       }

    })
    return inscips
}
//actualizar inscripcion
const updateInscrip = async (id:any,inscripcion:any)=>{
    const {clases_id,alumno_id,hora, fecha}=inscripcion
    const inscripAtualizada = await prisma.inscripciones.update({
        where: {
            id_inscripciones:id
        },
        data: {
        clases_id,alumno_id,hora,fecha
        },
        select: {
            id_inscripciones: true
        }

    })
    return inscripAtualizada
}
//crear una inscripcion
const createInscrip = async (id:number, inscrip:any)=>{
    const{clases_id,alumno_id,hora, fecha}=inscrip
    const crteInscrip =await prisma.inscripciones.create({
        data:{
            clases_id,alumno_id,hora, fecha
        },
        select: {
            id_inscripciones:true
        }
    })
    return crteInscrip
}
//eliminar inscripcin
const deleteInscrip = async (id:number)=>{
    const dlteInscrip = await prisma.inscripciones.delete({
        where: {
            id_inscripciones:id
        }
    })
}
export{
    deleteInscrip,
    createInscrip ,
    updateInscrip,
    getOneInscripcion,
    getAllInscripcion
}