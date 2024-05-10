import { Link } from "react-router-dom";
import eslogan from "./assets/eslogans/logo.png";
import esloganUno from "./assets/eslogans/Logo-American-Eagle.png";
import esloganDos from "./assets/eslogans/g-star-logo.png";
import esloganTres from "./assets/eslogans/Mothercare-logo.png";

function MenuMarcas() {
  return (
    <div className="menu1">
      <Link to="/descripcion-prenda"><img className="icon1" src={eslogan} alt="Eslogan 1" /></Link>
      <Link to="/ruta2"><img className="icon1" src={esloganUno} alt="Eslogan 2" /></Link>
      <Link to="/proyecto-vitrina"><img className="icon1" src={esloganDos} alt="Eslogan 3" /></Link>
      <Link to="/ruta4"><img className="icon1" src={esloganTres} alt="Eslogan 4" /></Link>
    </div>
  );
};

export default MenuMarcas;
