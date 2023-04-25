import express from "express";
import {
  login,
  confirmarCuenta,
  recuperarPassoword,
  nuevoPassword,
  perfilUsuario,
  comprobarToken,
  getUsuarios,
  postUsuario,
  editUsuario,
  deleteUsuario,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/usuarios/login", login);
router.post("/usuarios", postUsuario);
router.get("/usuarios/confirmar/:token", confirmarCuenta);
router.post("/usuarios/olvide-password", recuperarPassoword);
router.get("/usuarios/olvide-password/:token", comprobarToken);
router
  .route("/usuarios/olvide-password/:token")
  .get(comprobarToken)
  .post(nuevoPassword);

router.get("/usuarios/perfil", checkAuth, perfilUsuario);

router.get("/usuarios", getUsuarios);
router.put("/usuarios", editUsuario);
router.delete("/usuarios", deleteUsuario);

export default router;
