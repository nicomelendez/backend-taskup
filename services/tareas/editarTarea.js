import Tarea from "../../models/Tarea.js";

const editarTarea = async (id, oTarea, creador) => {
  const respuestaBien = {
    status: "success",
    message: "Tarea editada",
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
    const existeTarea = await Tarea.findById(id).populate("proyecto");
    const { proyecto } = existeTarea;

    if (!existeTarea) {
      return {
        respuesta: respuestaMal,
        tarea: null,
      };
    }

    if (proyecto.creador.toString() !== creador) {
      return {
        respuesta: respuestaSinPermisos,
        tarea: null,
      };
    }

    const editarTarea = await Tarea.findOneAndUpdate({ _id: id }, oTarea, {
      new: true,
    });

    if (!editarTarea) {
      return {
        respuesta: respuestaMal,
        tarea: null,
      };
    }

    return {
      respuesta: respuestaBien,
      tarea: editarTarea,
    };
  } catch (error) {
    return {
      respuesta: respuestaMal,
      tarea: null,
    };
  }
};

export default editarTarea;
