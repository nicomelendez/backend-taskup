import Proyecto from '../../models/Proyecto.js' 

const eliminarProyecto = async(id, creador) => {

    const respuestaBien = {
        status: 'success',
        message: 'Proyecto eliminado'
    }

    const respuestaMal = {
        status: 'error',
        message: 'Algo salio mal'
    }

    try {

        const proyectoEliminado = await Proyecto.findOneAndDelete({_id: id}).where('creador').equals(creador)
        
        if(!proyectoEliminado){
            return {
                respuesta: respuestaMal,
                proyecto: null
            }
        }

        return {
            respuesta: respuestaBien,
            proyecto: proyectoEliminado
        }

    } catch (error) {
        return {
            respuesta: respuestaMal,
            proyecto: null
        }
    }
}
export default eliminarProyecto