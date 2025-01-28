import FormularioTarea from "./componentes/FormularioTarea";
import ListaTareas from "./componentes/ListaTareas";
import "./App.css";

function App() {


  
  return (
    <div>
      <section>
        <FormularioTarea></FormularioTarea>
      </section>

      <section>
        <ListaTareas></ListaTareas>
      </section>
    </div>
  );
}

export default App;
