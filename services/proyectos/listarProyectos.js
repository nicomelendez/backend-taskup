import Proyecto from "../../models/Proyecto.js";

const listarProyectos = async (creador) => {
  const respuestaBien = {
    status: "success",
    message: "Proyectos encontrados",
  };

  const respuestaMal = {
    status: "error",
    message: "Algo salio mal",
  };

  try {
    const listaDeProyectos = await Proyecto.find()
      .where("creador")
      .equals(creador);

    if (listaDeProyectos.length <= 0) {
      return {
        respuesta: respuestaMal,
        listaDeProyectos: null,
      };
    }
    return {
      respuesta: respuestaBien,
      listaDeProyectos,
      contador: listaDeProyectos.length,
    };
  } catch (error) {
    return {
      respuesta: respuestaMal,
      listaDeProyectos: null,
    };
  }
};

export default listarProyectos;
