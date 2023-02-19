import crearProyecto from '../services/proyectos/crearProyecto.js'
import editarProyecto from '../services/proyectos/editarProyecto.js'
import eliminarProyecto from '../services/proyectos/eliminarProyecto.js'
import listarProyectos from '../services/proyectos/listarProyectos.js'
import obtenerUnProyecto from '../services/proyectos/obtenerUnProyecto.js'

const respuestaErrorCatch = {
    status: 'error',
    message: 'Erro en la bd'
}
const respuestaFaltanDatos = {
    status: 'error',
    message:'Faltan datos'
}

const getProyectos = async(req, res)=>{
    try {
        const creador = req.usuario

        if(!creador){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, listaDeProyectos, contador} = await listarProyectos(creador)

        if(respuesta.status === 'error' || listaDeProyectos === null){
            return res.status(500).json({
                respuesta,
                listaDeProyectos
            })
        }

        return res.status(200).json({
            respuesta,
            contador,
            listaDeProyectos
        })
        
    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

const getOneProyecto = async(req, res)=>{
    try {
        const {id} = req.params
        const idUsuario = req.usuario.id

        if(!id){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, proyecto} = await obtenerUnProyecto(id, idUsuario)

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

const addProyecto = async(req, res)=>{
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

const addColaborador = async(req, res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

const deleteColaborador= async(req, res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

const getTareas = async(req, res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(respuestaErrorCatch)
    }
}

const editProyectos = async(req, res)=>{
    try {
        const {id} = req.params
        const oProyecto = req.body;
        const creador = req.usuario.id

        if(!oProyecto.nombre || !oProyecto.descripcion || !oProyecto.cliente){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, proyecto} = await editarProyecto(id, oProyecto, creador)

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

const deleteProyectos = async(req, res)=>{
    try {
        const {id} = req.params
        const creador = req.usuario.id

        if(!id){
            return res.status(500).json(respuestaFaltanDatos)
        }

        const {respuesta, proyecto} = await eliminarProyecto(id, creador)

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

export {
    getProyectos,
    addProyecto,
    addColaborador,
    getOneProyecto,
    deleteColaborador,
    editProyectos,
    deleteProyectos,
    getTareas
}