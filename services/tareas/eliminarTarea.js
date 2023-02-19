import Tarea from '../../models/Tarea.js'

const eliminarTarea = async (id, creador) => {

    const respuestaBien = {
        status: 'success',
        message: 'Tarea eliminada'
    }

    const respuestaMal = {
        status: 'error',
        message: 'Algo salio mal'
    }

    const respuestaSinPermisos = {
        status: 'error',
        message: 'No tienes permisos para esta acción'
    }

    try {
        
        const existeTarea = await Tarea.findById(id).populate('proyecto')
        const { proyecto } = existeTarea
       
        if(!existeTarea){
            return {
                respuesta: respuestaMal,
                tarea: null
            }
        }
        
        if(proyecto.creador.toString() !== creador){
            return {
                respuesta: respuestaSinPermisos,
                tarea: null
            }
        }
        
        const eliminarTarea = await Tarea.findOneAndDelete({_id: id})

        if(!eliminarTarea){
            return {
                respuesta: respuestaMal,
                tarea: null
            }
        }
        
        return {
            respuesta: respuestaBien,
            tarea: eliminarTarea
        }

    } catch (error) {
        return {
            respuesta: respuestaMal,
            tarea: null
        }
    }
}

export default eliminarTarea