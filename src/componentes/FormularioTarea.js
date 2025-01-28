import React, { useState } from "react";
  

function Formulario() {
  const [tarea, setTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    console.log(tarea);
    alert(`Se ha agregado a la lista la siguiente tarea: ${tarea}`);
    setTarea("");
  };

  return (
    <form onSubmit={agregarTarea}>
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

export default Formulario;
