import React, { useState } from "react";
import FormularioTarea from "./componentes/FormularioTarea";
import ListaTareas from "./componentes/ListaTareas";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div className="contenedor">
      {/* Título atractivo */}
      <h1 className="titulo">📝 Lista de Tareas</h1>

      <section>
        <FormularioTarea agregarTarea={agregarTarea} />
      </section>

      <section>
        <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} completarTarea={completarTarea} />
      </section>
    </div>
  );
}

export default App;
