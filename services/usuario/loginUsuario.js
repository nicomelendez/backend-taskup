import Usuario from '../../models/Usuario.js'

const loginUsuario = async (email, password) => {

    const respuestaBien = {
        status: 'success',
        message: 'Login correcto'
    }
    
    const respuestaNoConfirmado = {
        status: 'error',
        message: 'Tu cuenta no ha sido confirmada'
    }

    const respuestaMal = {
        status: 'error',
        message: 'Datos incorrectos'
    }

    try {
        
        const existeUsuario = await Usuario.findOne({email: email})
        
        if(!existeUsuario){
            return {
                respuesta: respuestaMal,
                usuario: null
            }
        }

        if(existeUsuario.confirmado === false){
            return {
                respuesta: respuestaNoConfirmado,
                usuario: null
            }
        }

        const passwordCorrecta = await existeUsuario.comprobarPassword(password);
        if(!passwordCorrecta){
            return {
                respuesta: respuestaMal,
                usuario: null
            }
        }

        return {
            respuesta: respuestaBien,
            usuario: existeUsuario.datosNoSensibles()
        }
        

    } catch (error) {
        return {
            respuesta: respuestaMal,
            usuario: null
        }
    }
}

export default loginUsuario