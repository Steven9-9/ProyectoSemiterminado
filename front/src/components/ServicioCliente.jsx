import imgUno from "../assets/icons/mediosPago.png";
import imgDos from "../assets/icons/devolu.png";
import imgTres from "../assets/icons/box.png";
import imgCuatro from "../assets/icons/help.png";

function ServicioCliente(){

  return(

    <div className="menuInformacion">
<div><a href=""><img src={imgUno} alt="iconos"/>
    
<p>MULTIPLES</p>
<h3>MEDIOS DE PAGO</h3>

</a></div>
<div><a href=""><img src={imgDos} alt="iconos"/>
<p>CAMBIOS Y</p>
<h3>DEVOLUCIONES</h3>
</a></div>
<div><a href=""><img src={imgTres} alt="iconos"/>
<p>SIGUE</p>
<h3>TUS PEDIDOS</h3>
</a></div>
<div><a href=""><img src={imgCuatro} alt="iconos"/>
<p>¿NECESITAS</p>
<h3 style={{
marginLeft: '-80px',
marginTop: '52px'}}>AYUDA?</h3>
</a></div>
</div>
);
};

export default ServicioCliente;