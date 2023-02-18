import Usuario from '../../models/Usuario.js'

const cambiarPassword = async(token,password) => {
    
    const respuestaBien = {
        status: 'success',
        message: '-'
    }
    const respuestaMal = {
        status: 'error',
        message: '-'
    }

    try {
        const oUsuario = await Usuario.findOne({ token })

        if(!oUsuario){
            return {
                respuesta: respuestaMal
            }
        }

        oUsuario.password = password
        oUsuario.token = ''
        await oUsuario.save()
        
        return {
            respuesta: respuestaBien
        }
    } catch (error) {
        return {
            respuesta: respuestaMal
        }
    }
}

export default cambiarPassword