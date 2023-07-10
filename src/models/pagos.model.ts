import{db as prisma} from '../utils/db.server'

//obtiene todos los pagos
const getAllPagos = async () =>{
    try{
        const pago = await prisma.pagos.findMany()
        return pago

    } catch(error){
        console.log('getAllPagos'+error)
        }
}

//obtiene un unico pago
const getOnePago = async (id:number)=>{
    const pago = await prisma.pagos.findUnique({
        where: {
            id_pago:id
        }
    })
    return pago
}

//Actualiza los pagos
const updatePagos = async (id:any,pago:any)=>{
    const{incs_id,alumno_id,fecha,monto,tipo_pago}=pago
    const salaActualizar= await prisma.pagos.update({
        where:{
            id_pago:id
        },data:{
            incs_id,alumno_id,fecha,monto,tipo_pago
        },select: {
            id_pago:true
        }
    })
    return salaActualizar
}

//crea un pago
const createPagos = async (id :number,pago:any)=>{
    const{incs_id,alumno_id,fecha,monto,tipo_pago}=pago
    const crtePago = await prisma.pagos.create({
      data: {incs_id,alumno_id,fecha,monto,tipo_pago

      },select: {
        id_pago:true
      }  
    })
    return crtePago
}

//elimina un pago
const deletePago = async (id:number)=>{
    const dltePago = await prisma.pagos.delete({
        where: {
            id_pago :id
        }
    })
}

export{
    getAllPagos,
    getOnePago,
    updatePagos,
    createPagos,
    deletePago
    
}