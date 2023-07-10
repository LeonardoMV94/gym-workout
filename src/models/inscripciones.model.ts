import { db as prisma } from '../utils/db.server'

const getAllInscripcion = async () => {
    try {
        const inscips = await prisma.inscripciones.findMany()
        return inscips
    } catch (error) {
        console.log('getAllInscripcion' + error)
    }
}//obtener una inscripcion
const getOneInscripcion = async (id: number) => {
    const inscips = await prisma.inscripciones.findUnique({
        where: {
            id_inscripciones: id
        }

    })
    return inscips
}
//actualizar inscripcion
const updateInscripciones = async (id: any, inscripcion: any) => {
    const { clases_id, alumno_id, hora, fecha_ingreso } = inscripcion
    // clases_id        Int?
    // alumno_id        Int?
    // fecha_ingreso    DateTime? @db.Date
    const inscripAtualizada = await prisma.inscripciones.update({
        where: {
            id_inscripciones: id
        },
        data: {
            clases_id: clases_id || undefined,
            alumno_id: alumno_id || undefined,
            fecha_ingreso: fecha_ingreso || undefined
        },
        select: {
            id_inscripciones: true
        }

    })
    return inscripAtualizada
}
//crear una inscripcion
const createInscrip = async (id: number, inscrip: any) => {
    const { clases_id, alumno_id, fecha_ingreso } = inscrip
    const crteInscrip = await prisma.inscripciones.create({
        data: {
            clases_id, alumno_id, fecha_ingreso
        },
        select: {
            id_inscripciones: true
        }
    })
    return crteInscrip
}
//eliminar inscripcin
const deleteInscrip = async (id: number) => {
    const dlteInscrip = await prisma.inscripciones.delete({
        where: {
            id_inscripciones: id
        }
    })
}
export {
    deleteInscrip,
    createInscrip,
    updateInscripciones,
    getOneInscripcion,
    getAllInscripcion
}