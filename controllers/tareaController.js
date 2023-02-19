import crearTarea from '../services/tareas/crearTarea.js'
import editarTarea from '../services/tareas/editarTarea.js'
import eliminarTarea from '../services/tareas/eliminarTarea.js'
import obtenerUnaTarea from '../services/tareas/obtenerUnaTarea.js'

const respuestaErrorCatch = {
    status: 'error',
    message: 'Erro en la bd'
}
const respuestaFaltanDatos = {
    status: 'error',
    message:'Faltan datos'
}

const getOneTarea = async(req, res)=>{
    try {
        const {id} = req.params
        const idUsuario = req.usuario.id

        if(!id || !idUsuario){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, tarea} = await obtenerUnaTarea(id, idUsuario)

        if(respuesta.status === 'error' || tarea === null){
            return res.status(500).json({
                respuesta,
                tarea
            })
        }

        return res.status(200).json({
            respuesta,
            tarea
        })
    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

const addTarea = async(req, res)=>{
    try {
        const oTarea = req.body;
        const idUsuario = req.usuario.id
        
        if(!oTarea.nombre || !oTarea.descripcion || !oTarea.prioridad || !oTarea.proyecto){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, tarea} = await crearTarea(oTarea, idUsuario)

        if(respuesta.status === 'error' || tarea === null){
            return res.status(500).json({
                respuesta,
                tarea
            })
        }

        return res.status(200).json({
            respuesta,
            tarea
        })

    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

const cambiarEstadoTarea = async(req, res)=>{
    try {
        const oProyecto = req.body;
        const creador = req.usuario.id

        if(!oProyecto.nombre || !oProyecto.descripcion || !oProyecto.cliente){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, proyecto} = await crearProyecto(oProyecto, creador)

        if(respuesta.status === 'error' || proyecto === null){
            return res.status(500).json({
                respuesta,
                proyecto
            })
        }

        return res.status(200).json({
            respuesta,
            proyecto
        })

    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

const editTarea = async(req, res)=>{
    try {
        const { id } = req.params
        const oTarea = req.body;
        const creador = req.usuario.id

        if(!oTarea.nombre || !oTarea.descripcion || !oTarea.prioridad || !oTarea.proyecto){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, tarea} = await editarTarea(id, oTarea, creador)

        if(respuesta.status === 'error' || tarea === null){
            return res.status(500).json({
                respuesta,
                tarea
            })
        }

        return res.status(200).json({
            respuesta,
            tarea
        })
    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

const deleteTarea = async(req, res)=>{
    try {
        const { id } = req.params
        const creador = req.usuario.id

        if(!id || !creador){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, tarea} = await eliminarTarea(id, creador)

        if(respuesta.status === 'error' || tarea === null){
            return res.status(500).json({
                respuesta,
                tarea
            })
        }

        return res.status(200).json({
            respuesta,
            tarea
        })
    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

export {
    addTarea,
    getOneTarea,
    editTarea,
    cambiarEstadoTarea,
    deleteTarea
}