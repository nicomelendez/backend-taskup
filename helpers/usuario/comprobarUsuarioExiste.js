import Usuario from "../../models/Usuario.js";

const comprobarUsuarioExiste = async (email) => {
  try {
    const existeUsuario = await Usuario.findOne({ email });

    if (existeUsuario) {
      return true;
    }
    return false;
  } catch (error) {
    return true;
  }
};

export default comprobarUsuarioExiste;
