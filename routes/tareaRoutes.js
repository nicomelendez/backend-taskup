import express from "express";
import {
  addTarea,
  getOneTarea,
  editTarea,
  cambiarEstadoTarea,
  deleteTarea,
} from "../controllers/tareaController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/tareas", checkAuth, addTarea);
router
  .route("/tareas/:id")
  .get(checkAuth, getOneTarea)
  .put(checkAuth, editTarea)
  .delete(checkAuth, deleteTarea);
router.post("/tareas/estado/:id", checkAuth, cambiarEstadoTarea);

export default router;
