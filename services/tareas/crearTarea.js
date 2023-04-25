import Proyecto from "../../models/Proyecto.js";
import Tarea from "../../models/Tarea.js";

const crearTarea = async (params, idUsuario) => {
  const respuestaBien = {
    status: "success",
    message: "Tarea creada",
  };

  const respuestaMal = {
    status: "error",
    message: "Algo salio mal",
  };

  const respuestaSinPermisos = {
    status: "error",
    message: "No tienes permisos para esta acción",
  };

  try {
    const existeProyecto = await Proyecto.findById(params.proyecto);

    if (!existeProyecto) {
      return {
        respuesta: respuestaMal,
        tarea: null,
      };
    }

    if (existeProyecto.creador.toString() !== idUsuario) {
      return {
        respuesta: respuestaSinPermisos,
        tarea: null,
      };
    }

    const nuevaTarea = new Tarea(params);

    const tareaAlmacenada = await nuevaTarea.save();

    return {
      respuesta: respuestaBien,
      tarea: tareaAlmacenada,
    };
  } catch (error) {
    return {
      respuesta: respuestaMal,
      tarea: null,
    };
  }
};

export default crearTarea;
