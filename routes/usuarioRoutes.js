import express from 'express'
import { login, confirmarCuenta, recuperarPassoword, nuevoPassword, comprobarToken, getUsuarios, postUsuario, editUsuario, deleteUsuario } from '../controllers/usuarioController.js'

const router = express.Router()

router.post('/login', login)
router.post('/usuarios', postUsuario)
router.get('/usuarios/confirmar/:token', confirmarCuenta)
router.post('/olvide-password', recuperarPassoword)
router.get('/olvide-password/:token', comprobarToken)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

router.get('/usuarios', getUsuarios)
router.put('/usuarios', editUsuario)
router.delete('/usuarios', deleteUsuario)

export default router