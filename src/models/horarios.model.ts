import { db as prisma } from '../utils/db.server'

//obtiene todos los horarios
const getAllHorarios = async () => {
    try {
        const horario = await prisma.horarios.findMany()
        return horario

    } catch (error) {
        console.log('getAllHorarios' + error)
    }
}

//obtiene un unico horario
const getOneHorario = async (id: number) => {
    const horario = await prisma.horarios.findUnique({
        where: {
            id_horario: id
        }
    })
    return horario
}

//Actualiza los horarios
const updateHorarios = async (id: any, horario: any) => {


    const { clase_id, hora, dia_semana, duracion_minutos, cantidad_dias } = horario
    const salaActualizar = await prisma.horarios.update({
        where: {
            id_horario: id
        }, data: {
            
            clase_id: clase_id || undefined, 
            hora: hora || undefined, 
            dia_semana: dia_semana || undefined, 
            duracion_minutos: duracion_minutos || undefined, 
            cantidad_dias: cantidad_dias || undefined

        }, select: {
            id_horario: true
        }
    })
    return salaActualizar
}

//crea un horario
const createHorarios = async (id: number, horario: any) => {
    const { clase_id, hora, dia_semana, duracion_minutos, cantidad_dias } = horario
    const crteHorario = await prisma.horarios.create({
        data: {
            clase_id, hora, dia_semana, duracion_minutos, cantidad_dias

        }, select: {
            id_horario: true
        }
    })
    return crteHorario
}

//elimina un horario
const deleteHorario = async (id: number) => {
    const dlteHorario = await prisma.horarios.delete({
        where: {
            id_horario: id
        }
    })
}

export {
    deleteHorario,
    createHorarios,
    updateHorarios,
    getOneHorario,
    getAllHorarios

}