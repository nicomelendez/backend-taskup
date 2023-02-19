import Tarea from '../../models/Tarea.js'

const obtenerUnaTarea = async (id, idUsuario) => {

    const respuestaBien = {
        status: 'success',
        message: 'Tarea encontrada'
    }

    const respuestaMal = {
        status: 'error',
        message: 'Algo salio mal'
    }

    try {
        
        const existeTarea = await Tarea.findById(id).populate('proyecto')
        const { proyecto } = existeTarea
        
        if(!existeTarea || proyecto.creador.toString() !== idUsuario){
            return {
                respuesta: respuestaMal,
                tarea: null
            }
        }
        
        return {
            respuesta: respuestaBien,
            tarea: existeTarea
        }

    } catch (error) {
        return {
            respuesta: respuestaMal,
            tarea: null
        }
    }
}

export default obtenerUnaTarea