import express from 'express'
import { login, getUsuarios, postUsuario, editUsuario, deleteUsuario } from '../controllers/usuarioController.js'

const router = express.Router()

router.get('/usuarios', getUsuarios)

router.post('/login', login)
router.post('/usuarios', postUsuario)

router.put('/usuarios', editUsuario)

router.delete('/usuarios', deleteUsuario)

export default router