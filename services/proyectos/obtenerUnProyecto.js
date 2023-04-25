import Proyecto from "../../models/Proyecto.js";

const obtenerUnProyecto = async (id, creador) => {
  const respuestaBien = {
    status: "success",
    message: "Proyecto encontrado",
  };

  const respuestaMal = {
    status: "error",
    message: "Algo salio mal",
  };

  try {
    const existeProyecto = await Proyecto.findById(id)
      .where("creador")
      .equals(creador);

    if (!existeProyecto) {
      return {
        respuesta: respuestaMal,
        proyecto: null,
      };
    }

    return {
      respuesta: respuestaBien,
      proyecto: existeProyecto,
    };
  } catch (error) {
    return {
      respuesta: respuestaMal,
      proyecto: null,
    };
  }
};

export default obtenerUnProyecto;
