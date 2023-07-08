import { db as prisma} from '../utils/db.server'
import bcrypt from "bcrypt"

//obtiene todos los ususarios
const getAllUsuarios = async () => {
    try {
        const usuarios = await prisma.usuarios.findMany()
        return usuarios
    } catch (error) {
        console.log('getAllUsuarios error ' + error)
    }

}
//obtiene un usuario
const getOneUsuario = async (correo: string, password: string) => {

    // obtiene la contraseña del usuario
    // select correo, password from usuarios where correo = correo
    // select password from usuarios where correo like 'marco@lskd.cl';
    const usuarioPass: any  = await prisma.usuarios.findFirst({
        where: {
            correo: correo
        },
        select: {
            password:true
        }
    })
    // si no la encuentra retorna null
    console.log( "usuarioPass:" + usuarioPass.password )
    if(usuarioPass === null) return null


    // compara la contraseña del usuario con la contraseña encriptada
    const isLogin: boolean = await bcrypt.compare(password, usuarioPass.password)
    console.log("BCrypt Match -> " + isLogin + " -> " + password + " -> " + usuarioPass.password )

    // si es correcta retorna el usuario
    // select correo, nombre, apellidoP, apellidoM from usuarios where correo like 'test@test.cl';
    if (isLogin) {
        const usuario = await prisma.usuarios.findFirst({
            where: {
                correo: correo
            },
            select: {
                correo: true,
                nombre: true,
                apellidoP: true,
                apellidoM: true
            }
        })
        return usuario
    } else {
        return null
    }

    
}
//actualiza un ususario
const updateUsuario = async (id: any, usuario: any) => {
    const { direccion_id, nombre, apellidoP, apellidoM, celular, correo, edad, password } = usuario

    const usuarioActualizado = await prisma.usuarios.update({
        where: {
            id_usuario: id
        },
        data: {
            direccion_id, nombre, apellidoP, apellidoM, celular, correo, edad, password

        },
        select: {
            id_usuario: true
        }
    })
    return usuarioActualizado
}
//crea un usuario
const createUsuario = async ( usuario: any) => {
    // desestructurar el objeto usuario
    const { nombre, apellidoP, apellidoM, celular, correo, edad, passwordHash, direccion_id } = usuario

    // insertar una direccion y que me retorne el id de direccion creada
    //let direccion_id = 0 // return id here
    // insertar un usuario con el id de direccion  
    const createUser = await prisma.usuarios.create({
        data: {
            direccion_id, nombre, apellidoP, apellidoM, celular, correo, edad, password: passwordHash
        },
        select: {
            id_usuario: true,
            correo: true,
            nombre: true,
            apellidoP: true
                
        }
    })
    return createUser
}
//elimina un usuario
const deleteUsuario = async (id: number) => {
    const deletedUsuer = await prisma.usuarios.delete({
        where: {
            id_usuario: id
        }
    })
}

export {
    deleteUsuario,
    createUsuario,
    updateUsuario,
    getOneUsuario,
    getAllUsuarios
}