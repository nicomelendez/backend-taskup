import cambiarPassword from '../services/usuario/cambiarPasssword.js'
import comprobarTokenUsuario from '../services/usuario/comprobarToken.js'
import confirmarCuentaUsuario from '../services/usuario/confirmarCuentaUsuario.js'
import  crearUsuario  from '../services/usuario/crearUsuario.js'
import loginUsuario from '../services/usuario/loginUsuario.js'
import usuarioOlvidoPassword from '../services/usuario/usuarioOlvidoPassword.js'

const respuestaCathError = {
    status: 'error',
    message: 'Error en la bd'
}
const respuestaFaltanDatos = {
    status: 'error',
    message:'Faltan datos'
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
            return res.status(400).json(respuestaFaltanDatos)
        }

        const {respuesta, usuario, token} = await loginUsuario(email, password)

        if(respuesta.status === 'error' || usuario === null){
            return res.status(500).json({
                respuesta,
                usuario
            })
        }

        return res.status(200).json({
            respuesta,
            usuario,
            token
        })

    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const confirmarCuenta = async (req, res) => {

    try {
        
        const { token } = req.params;

        if(!token){
            return res.status(400).json(respuestaFaltanDatos)
        }
        
        const { respuesta } = await confirmarCuentaUsuario(token)

        if(respuesta.status === 'error'){
            return res.status(500).json(respuesta)
        }

        return res.status(200).json(respuesta)

    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const recuperarPassoword = async (req, res) => {

    try {
        const { email } = req.body;
        
        if(!email){
            return res.status(400).json(respuestaFaltanDatos)
        }

        const { respuesta } = await usuarioOlvidoPassword(email);

        if(respuesta.status === 'error'){
            return res.status(500).json(respuesta)
        }

        return res.status(200).json(respuesta)

    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const comprobarToken = async (req, res) => {

    try {
        const { token } = req.params

        if(!token){
            return res.status(400).json(respuestaFaltanDatos)
        }

        const { respuesta } = await comprobarTokenUsuario(token)

        if(respuesta.status === 'error'){
            return res.status(500).json(respuesta)
        }

        return res.status(200).json(respuesta)
    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const nuevoPassword = async (req, res) => {

    try {
        const { token } = req.params
        const { password } = req.body

        if(!token || !password){
            return res.status(400).json(respuestaFaltanDatos)
        }

        const { respuesta } = await cambiarPassword(token, password)

        if(respuesta.status === 'error'){
            return res.status(500).json(respuesta)
        }

        return res.status(200).json(respuesta)
    } catch (error) {
        return res.status(500).json(respuestaCathError)
    }
}

const postUsuario = async (req, res) => {

    try {
        const {nombre, password, email} = req.body;
        
        if(!nombre || !password || !email){
            return res.status(400).json(respuestaFaltanDatos)
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
    confirmarCuenta,
    recuperarPassoword,
    comprobarToken,
    getUsuarios,
    nuevoPassword,
    postUsuario,
    editUsuario,
    deleteUsuario
}