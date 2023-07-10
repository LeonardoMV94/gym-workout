import { db as prisma} from '../utils/db.server'

//obtener todos los alumnos
const getAllAlumnos = async () =>{
    try{
        const alumnos = await prisma.alumnos.findMany()
        return alumnos
    }catch(error){
        console.log('getAllAlumnos'+error)
        return {}
    }

}

//obtener un alumno
const getOneAlumno =  async (id:number)=>{
    try {
        const alumno = await prisma.alumnos.findUnique({
            where: {
                id_alumno:id
            }
        })
        return alumno
    } catch (error) {
        console.log("Error getOneAlumno: " + error)
        return {}
    }
    
}
//actualizar un alumno
const updateAlmno = async (id:any,alumno:any)=>{
    const {usuario_id,peso,altura,IMC}=alumno
    try {
        const alumnoActulizado= await prisma.alumnos.update({
            where:{
                id_alumno:id
            },
            data:{usuario_id,peso,altura,IMC},
            select:{id_alumno:true}
        })
        return alumnoActulizado
    } catch (error) {
        console.log("Error updateAlumno: " + error)
        return {}
    }
    
}
//crear alumno

const createAlumno = async (id:number,alumno:any)=>{
    const {usuario_id,peso,altura,IMC}=alumno
    try {
        const crteAlumno = await prisma.alumnos.create({
            data:{
                usuario_id,peso,altura,IMC
            },
            select:{
                id_alumno:true
            }
        })
        return createAlumno
    } catch (error) {
        return {}
    }
    
}
//eliminar alumno
const deleteAlumno =async (id:number)=>{
    try {
        const dlteAlumno =await prisma.alumnos.delete({
            where: {
                id_alumno:id
            },
            select:{
                id_alumno:true
            }
        })
        return dlteAlumno
    } catch (error) {
        console.log("Error deleteAlumno: " + error)
        return {}
    }
    
}
export{
    deleteAlumno,
    createAlumno,
    updateAlmno,
    getOneAlumno,
    getAllAlumnos

}