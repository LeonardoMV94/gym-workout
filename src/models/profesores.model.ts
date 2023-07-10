import { db as prisma} from '../utils/db.server'

//obtener a todos los profesores
const getAllProfesores = async ()=>{
    try{
        const profesores = await prisma.profesores.findMany()
        return profesores
    }catch(error){
        console.log('getAllProfesores'+error)
    }
}

//obtener un profesor
const getOneProfesor = async (id:number)=>{
    const profesor = await prisma.profesores.findUnique({
        where:{
            id_profe :id
        }
    })
    return profesor
}
//actualizar profesor
const updateProfesor = async (id:any,profesor:any)=>{
    const{usuario_id}=profesor
    const profesorActualizado = await prisma.profesores.update({
        where :{
            id_profe :id
        },
        data :{
            usuario_id
        },
        select :{
            id_profe:true
        }
    })
    return profesorActualizado
}
//crear un profe

const createProfe = async (id:number,profesor:any)=>{
    const{usuario_id, url_imagen}=profesor
    const crteProfe = await prisma.profesores.create({
        data:{
            usuario_id, url_imagen
        },
        select: {
            id_profe :true
        }
    })
    return crteProfe
}
//eliminar profe
const deleteProfe = async (id:number)=>{
    const deleteProfesor = await prisma.profesores.delete({
        where:{
            id_profe:id
        }
    })
}
export{
    deleteProfe,
    createProfe,
    updateProfesor,
    getOneProfesor,
    getAllProfesores

}