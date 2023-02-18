import Usuario from '../../models/Usuario.js'

const confirmarCuentaUsuario = async (token) =>{
    
    const respuestaBien = {
        status: 'success',
        message: 'Usuario confirmado'
    }
    const respuestaMal = {
        status: 'error',
        message: 'Error al confirmar tu cuenta'
    }

    try {
        const usuarioConfirmar = await Usuario.findOne({token})
        
        if(!usuarioConfirmar){
            return {
                respuesta: respuestaMal
            }
        }
        usuarioConfirmar.confirmado = true;
        usuarioConfirmar.token = '';
        await usuarioConfirmar.save()

        return {
            respuesta: respuestaBien
        }

    } catch (error) {
        return {
            respuesta: respuestaMal
        }
    }
}

export default confirmarCuentaUsuario