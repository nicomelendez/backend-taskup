import { emailOlvidePassword } from '../../helpers/email/email.js'
import generarId from '../../helpers/token/generarId.js'
import Usuario from '../../models/Usuario.js'

const usuarioOlvidoPassword = async (email) => {

    const respuestaBien = {
        status: 'success',
        message: 'Hemos enviado un email para recuperar tu contraseña'
    }
    const respuestaMal = {
        status: 'error',
        message: 'Error al mandar el correo'
    }

    try {
        const existeUsuario = await Usuario.findOne({email});
        
        if(!existeUsuario){
            return {
                respuesta: respuestaMal
            }
        }

        existeUsuario.token = generarId();
        await existeUsuario.save();
        await emailOlvidePassword(existeUsuario)

        return {
            respuesta: respuestaBien
        }

    } catch (error) {
        return {
            respuesta: respuestaMal
        }
    }
}

export default usuarioOlvidoPassword