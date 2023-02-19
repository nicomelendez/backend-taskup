import express  from 'express'
import { getProyectos, addProyecto, addColaborador, getOneProyecto, deleteColaborador, editProyectos, deleteProyectos, getTareas } from '../controllers/proyectoController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

router.route('/proyectos').get(checkAuth, getProyectos).post(checkAuth, addProyecto)
router.route('/proyectos/:id').get(checkAuth, getOneProyecto).put(checkAuth, editProyectos).delete(checkAuth, deleteProyectos)

router.get('/proyectos/tareas/:id', checkAuth, getTareas)
router.post('/proyectos/agregar-colaborador/:id', checkAuth, addColaborador)
router.delete('/proyectos/agregar-colaborador/:id', checkAuth, deleteColaborador)

export default router