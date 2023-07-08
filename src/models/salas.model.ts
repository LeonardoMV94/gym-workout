import { db as prisma} from '../utils/db.server'

const getAllSalas = async ()=>{
    try{
        const salas = await prisma.salas.findMany()
        return salas
    }catch(error){
        console.log('getAllSalas'+error)
        
    }
}
//obtener solo una sala
const getOneSala = async(id: number) => {
    try {
        const sala = await prisma.salas.findUnique({
            where: {
                N_sala: id
            }
        })
        return sala
    } catch (error) {
        console.log('getOneSala: '+error)
    }
}