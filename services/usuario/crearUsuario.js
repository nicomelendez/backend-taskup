import Usuario from '../../models/Usuario.js'
import comprobarUsuarioExiste from '../../helpers/usuario/comprobarUsuarioExiste.js';
import generarId from '../../helpers/token/generarId.js';

const crearUsuario = async (nombre, password, email) =>{
    const respuestaBien = {
        status: 'success',
        message: 'Usuario creado'
    }
    const respuestaMal = {
        status: 'error',
        message: 'Error al crear el usuario'
    }
    const respuestaExiste = {
        status: 'error',
        message: 'Ya existe el usuario'
    }
    try {
        
        const existeUsuario = await comprobarUsuarioExiste(email);

        if(existeUsuario){
            return {
                respuesta: respuestaExiste,
                usuario: null
            }
        }

        const nuevoUsuario = new Usuario({nombre, password, email});
        nuevoUsuario.token = generarId()
        
        const usuarioAlmacenado = await nuevoUsuario.save();

        if(!usuarioAlmacenado){
            return {
                respuesta: respuestaMal,
                usuario: null
            }
        }
        return {
            respuesta: respuestaBien,
            usuario: usuarioAlmacenado
        }
        
    } catch (error) {
        return {
            respuesta: respuestaMal,
            usuario: null
        }
    }
}

export default crearUsuario