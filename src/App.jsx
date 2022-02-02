import { useEffect, useState } from "react";
import "./App.scss";
/* import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import ListadoInicio from "./components/ListadoInicio/ListadoInicio"; */
import {
  Formulario,
  Header,
  ListadoInicio,
  ListadoImplementacion,
  ListadoPlanificacion,
  ListadoRevision,
  ListadoProduccion,
} from "./components/index";

function App() {
  // Obtenemos las tareas guardadas de localstorage.
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  // Establecemos el estado de las tareas.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  // Guardando el estado dentro de localstorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  //acceso a localStorage
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }
  // El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    configMostrarCompletadas
  );
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);
  return (
    <div className="App">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <Formulario tareas={tareas} cambiarTareas={cambiarTareas} />
      <div className="listados">
        <ListadoInicio
          tareas={tareas}
          cambiarTareas={cambiarTareas}
          mostrarCompletadas={mostrarCompletadas}
        />
        <ListadoPlanificacion />
        <ListadoImplementacion />
        <ListadoRevision />
        <ListadoProduccion />
      </div>
    </div>
  );
}

export default App;
