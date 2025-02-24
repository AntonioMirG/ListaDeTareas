import React, { useState } from "react";
import PropTypes from "prop-types";

function FormularioTarea({ agregarTarea }) {
  const [tarea, setTarea] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") return;
    agregarTarea(tarea);
    setTarea("");
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Agregar Tareas</label>
        <input
          id="tarea"
          placeholder="Introduce una tarea..."
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

FormularioTarea.propTypes = {
  agregarTarea: PropTypes.func.isRequired,
};

export default FormularioTarea;
