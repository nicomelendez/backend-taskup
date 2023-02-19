import Proyecto from '../../models/Proyecto.js' 

const editarProyecto = async(id, params , creador) => {

    const respuestaBien = {
        status: 'success',
        message: 'Proyecto editado'
    }

    const respuestaMal = {
        status: 'error',
        message: 'Algo salio mal'
    }

    try {

        const proyectoEditado = await Proyecto.findOneAndUpdate({_id: id},params,{new:true}).where('creador').equals(creador)
        
        if(!existeProyecto){
            return {
                respuesta: respuestaMal,
                proyecto: null
            }
        }

        return {
            respuesta: respuestaBien,
            proyecto: proyectoEditado
        }

    } catch (error) {
        return {
            respuesta: respuestaMal,
            proyecto: null
        }
    }
}
export default editarProyecto