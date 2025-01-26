import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, eliminarTarea, completarTarea }) => {
  return (
    <ul>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}
        />
      ))}
    </ul>
  );
};

export default ListaTareas;