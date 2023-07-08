import { db as prisma} from '../utils/db.server'

//obtener todos los alumnos
const getAllAlumnos = async () =>{
    try{
        const alumnos = await prisma.alumnos.findMany()
        return alumnos
    }catch(error){
        console.log('getAllAlumnos'+error)
    }

}

//obtener un alumno
const getOneAlumno =  async (id:number)=>{
    const alumno = await prisma.alumnos.findUnique({
        where: {
            id_alumno:id
        }
    })
    return alumno
}
//actualizar un alumno
const updateAlmno = async (id:any,alumno:any)=>{
    const {usuario_id,peso,altura,IMC}=alumno
    const alumnoActulizado= await prisma.alumnos.update({
        where:{
            id_alumno:id
        },
        data:{usuario_id,peso,altura,IMC},
        select:{id_alumno:true}
    })
    return alumnoActulizado
}
//crear alumno

const createAlumno = async (id:number,alumno:any)=>{
    const {usuario_id,peso,altura,IMC}=alumno
    const crteAlumno = await prisma.alumnos.create({
        data:{
            usuario_id,peso,altura,IMC
        },
        select:{
            id_alumno:true
        }
    })
    return createAlumno
}
//eliminar alumno
const deleteAlumno =async (id:number)=>{
    const dlteAlumno =await prisma.alumnos.delete({
        where: {
            id_alumno:id
        }
    })
}
export{
    deleteAlumno,
    createAlumno,
    updateAlmno,
    getOneAlumno,
    getAllAlumnos

}