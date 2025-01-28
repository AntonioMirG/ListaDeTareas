import React from "react";

function Tarea(tarea, CompletarTarea, EliminarTarea) {
  return (
    <div>
      <button onClick={EliminarTarea}></button>

      <button onClick={CompletarTarea}></button>
    </div>
  );
}

export default Tarea;
