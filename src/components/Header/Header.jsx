import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
const Header = ({mostrarCompletadas,cambiarMostrarCompletadas}) => {
  const toggleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas)
  };
  return (
    <div className="header">
      <h1 className="header__titulo">LISTADO DE TAREAS</h1>
      {mostrarCompletadas ? (
        <Button className="header__boton" onClick={toggleCompletadas}>
          ocultar tareas completadas
          <FontAwesomeIcon className="icono" icon={faEyeSlash} />
        </Button>
      ) : (
        <Button className="header__boton" onClick={toggleCompletadas}>
          tareas completadas
          <FontAwesomeIcon className="icono" icon={faEye} />
        </Button>
      )}
    </div>
  );
};

export default Header;
