import  crearUsuario  from '../services/usuario/crearUsuario.js'
import loginUsuario from '../services/usuario/loginUsuario.js'

const respuestaCathError = {
    status: 'error',
    message: 'Error en la bd'
}

const getUsuarios = async (req, res) => {

    try {
        
    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const login = async (req, res) => {

    try {
        
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({
                status: 'error',
                message:'Faltan datos'
            })
        }

        const {respuesta, usuario} = await loginUsuario(email, password)

        if(respuesta.status === 'error' || usuario === null){
            return res.status(500).json({
                respuesta,
                usuario
            })
        }

        return res.status(200).json({
            respuesta,
            usuario
        })

    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const postUsuario = async (req, res) => {

    try {
        const {nombre, password, email} = req.body;
        
        if(!nombre || !password || !email){
            return res.status(400).json({
                status: 'error',
                message:'Faltan datos'
            })
        }

        const {respuesta, usuario} = await crearUsuario(nombre, password, email)

        if(respuesta.status === 'error' || usuario === null){
            return res.status(500).json({
                respuesta,
                usuario
            })
        }

        return res.status(200).json({
            respuesta,
            usuario
        })

    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const editUsuario = async (req, res) => {

    try {
        
    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const deleteUsuario = async (req, res) => {

    try {
        
    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

export {
    login,
    getUsuarios,
    postUsuario,
    editUsuario,
    deleteUsuario
}