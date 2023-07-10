import { db as prisma } from '../utils/db.server'

//obtiene todas las asistencias
const getAllAsistencias = async () => {
    try {
        const asistencia = await prisma.asistencias.findMany()
        return asistencia

    } catch (error) {
        console.log('getAllAsistencias' + error)
    }
}

//obtiene una unica asistencia
const getOneAsistencia = async (idAsistencia: number) => {
    const asistencia = await prisma.asistencias.findUnique({
        where: {
            id_asistencia: idAsistencia
        }
    })
    return asistencia
}

//Actualiza las asistencias
const updateAsistencias = async (id: any, asistencia: any) => {
    const { clases_id, alumno_id, fecha, hora } = asistencia
    const salaActualizar = await prisma.asistencias.update({
        where: {
            id_asistencia: id
        }, data: {
            clases_id, alumno_id, fecha, hora
        }, select: {
            id_asistencia: true
        }
    })
    return salaActualizar
}

//crea una asistencia
const createAsistencias = async (id: number, asistencia: any) => {
    const { clases_id, alumno_id, fecha, hora } = asistencia
    const crteAsistencia = await prisma.asistencias.create({
        data: {
            clases_id, alumno_id, fecha, hora

        }, select: {
            id_asistencia: true
        }
    })
    return crteAsistencia
}

//elimina una asistencia
const deleteAsistencia = async (id: number) => {
    const dlteAsistencia = await prisma.asistencias.delete({
        where: {
            id_asistencia: id
        }
    })
}

export {
    deleteAsistencia,
    createAsistencias,
    updateAsistencias,
    getOneAsistencia,
    getAllAsistencias

}