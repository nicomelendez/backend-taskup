import Proyecto from '../../models/Proyecto.js' 

const crearProyecto = async( params , creador) => {

    const respuestaBien = {
        status: 'success',
        message: 'Proyecto creado'
    }

    const respuestaMal = {
        status: 'error',
        message: 'Algo salio mal'
    }

    try {

        const proyectoNuevo = new Proyecto(params);
        proyectoNuevo.creador = creador

        const proyectoGuardado = await proyectoNuevo.save()

        if(!proyectoGuardado){
            return {
                respuesta: respuestaMal,
                proyecto: null
            }
        }

        return {
            respuesta: respuestaBien,
            proyecto: proyectoGuardado
        }

    } catch (error) {
        return {
            respuesta: respuestaMal,
            proyecto: null
        }
    }
}
export default crearProyecto