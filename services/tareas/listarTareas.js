import Tarea from '../../models/Tarea.js'

const listarTareas = async (id, creador) => {

    const respuestaBien = {
        status: 'success',
        message: 'Tareas encontradas'
    }

    const respuestaMal = {
        status: 'error',
        message: 'Algo salio mal'
    }

    try {
        const listaDeTareas = await Tarea.find().where('proyecto').equals(id).populate('proyecto')

        if(listaDeTareas.length <= 0){
            return {
                respuesta: respuestaMal,
                listaDeTareas: null
            }
        }
        return {
            respuesta: respuestaBien,
            listaDeTareas,
            contador: listaDeTareas.length
        }
    } catch (error) {
        return {
            respuesta: respuestaMal,
            listaDeTareas: null
        }
    }
}

export default listarTareas