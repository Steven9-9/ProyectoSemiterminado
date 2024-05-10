import eslogan from "../assets/eslogans/logo.png";
import esloganUno from "../assets/eslogans/Logo-American-Eagle.png";
import esloganTres from "../assets/eslogans/Mothercare-logo.png";


function MenuMarcas(){

return(

<div className="menuMarcasVitrina">
<a href=""><img className="iconMarcasVitrina" src={eslogan}/></a>
<a href=""><img className="iconMarcasVitrina" src={esloganUno}/></a>
<a href=""><img className="iconMarcasVitrina" src={esloganTres}/></a>
</div>

);
};

export default MenuMarcas;