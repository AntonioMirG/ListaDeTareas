import React from "react";
import PropTypes from "prop-types";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, eliminarTarea, completarTarea }) => {
  return (
    <ul>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={() => eliminarTarea(tarea.id)}
          completarTarea={() => completarTarea(tarea.id)}
        />
      ))}
    </ul>
  );
};

ListaTareas.propTypes = {
  tareas: PropTypes.array.isRequired,
  eliminarTarea: PropTypes.func.isRequired,
  completarTarea: PropTypes.func.isRequired,
};

export default ListaTareas;
