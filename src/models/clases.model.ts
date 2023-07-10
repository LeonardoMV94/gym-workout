import { Prisma } from '@prisma/client'
import { db as prisma } from '../utils/db.server'

type clase = Prisma.clasesGetPayload<{
    include: {
        salas: true,
        profesores: true,
        nombre_clases: true,
        horarios: true
    }
}>


//obtiene todas las clases
const getAllClases = async () => {
    try {
        const clases = await prisma.clases.findMany()
        return clases

    } catch (error) {
        console.log('getAllClases' + error)
        return {}
    }
}
//obtiene una unica clase

const getOneClase = async (idClase: number) => {
    try {
        const clase: clase | null = await prisma.clases.findUnique({
            where: {
                id_clases: idClase
            },
            include: {
                salas: true,
                profesores: true,
                nombre_clases: true,
                horarios: true
            }
        })
        return clase
    } catch (error) {
        console.log("Error getOneClase: " + error)
        return {} as clase
    }

}
//Actualiza las clases
const updateClases = async (id: any, clase: any) => {
    const { sala_id, profe_id, nombre_clase_id, valor, descripcion, horario_id, url_imagen } = clase
    try {
        const salaActualizar = await prisma.clases.update({
            where: {
                id_clases: id
            }, data: {
                sala_id: sala_id || undefined, profe_id, nombre_clase_id, valor, descripcion, horario_id, url_imagen
            }, select: {
                id_clases: true
            }
        })
        return salaActualizar
    } catch (error) {
        console.log("Error updateClases: " + error)
        return {}
    }

}
//crea una clase
const createClases = async (id: number, clase: any) => {
    const { sala_id, profe_id, nombre_clase_id, valor, descripcion, horario_id, url_imagen } = clase
    try {
        const crteClase = await prisma.clases.create({
            data: {
                sala_id, profe_id, nombre_clase_id, valor, descripcion, horario_id, url_imagen

            }, select: {
                id_clases: true
            }
        })
        return crteClase
    } catch (error) {
        console.log("Error createClases: " + error)
        return {}
    }

}
//elimina una clase
const deleteClase = async (id: number) => {
    try {
        const dlteClase = await prisma.clases.delete({
            where: {
                id_clases: id
            },
            select: {
                id_clases: true
            }
        })
        return dlteClase;
    } catch (error) {
        console.log("Error deleteClase: " + error)
        return {}
    }

}

export {
    deleteClase,
    createClases,
    updateClases,
    getOneClase,
    getAllClases


}