import Usuario from '../../models/Usuario.js'

const comprobarTokenUsuario = async( token ) =>{

    const respuestaBien = {
        status: 'success',
        message: 'Token valido y el usuario existe'
    }
    const respuestaMal = {
        status: 'error',
        message: 'Token no valido'
    }

    try {
        
        const existeUsuario = await Usuario.findOne({ token })

        if(!existeUsuario){
            return {
                respuesta: respuestaMal
            }
        }
        
        return {
            respuesta: respuestaBien
        }
        
    } catch (error) {
        return {
            respuesta: respuestaMal
        }
    }
}

export default comprobarTokenUsuario