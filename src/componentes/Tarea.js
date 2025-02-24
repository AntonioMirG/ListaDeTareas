import React from "react";
import PropTypes from "prop-types";

function Tarea({ tarea, completarTarea, eliminarTarea }) {
  return (
    <div className="tarea">
      <span className={tarea.completada ? "completada" : ""}>
        {tarea.texto}
      </span>
      <div className="acciones">
        <button className="boton-completar" onClick={completarTarea}>
          {tarea.completada ? "✔️" : "⬜"}
        </button>
        <button className="boton-eliminar" onClick={eliminarTarea}>
          ❌
        </button>
      </div>
    </div>
  );
}

Tarea.propTypes = {
  tarea: PropTypes.object.isRequired,
  completarTarea: PropTypes.func.isRequired,
  eliminarTarea: PropTypes.func.isRequired,
};

export default Tarea;
