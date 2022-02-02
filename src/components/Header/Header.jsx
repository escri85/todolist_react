import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({mostrarCompletadas,cambiarMostrarCompletadas}) => {
  const toggleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas)
  };
  return (
    <div className="header">
      <h1 className="header__titulo">listado de tareas</h1>
      {mostrarCompletadas ? (
        <button className="header__boton" onClick={toggleCompletadas}>
          ocultar tareas completadas
          <FontAwesomeIcon className="icono" icon={faEyeSlash} />
        </button>
      ) : (
        <button className="header__boton" onClick={toggleCompletadas}>
          tareas completadas
          <FontAwesomeIcon className="icono" icon={faEye} />
        </button>
      )}
    </div>
  );
};

export default Header;
