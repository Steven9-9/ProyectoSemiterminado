
import fondo from "../assets/publicidad/fondoFooter.webp";
import logoUno from "../assets/redes/acno.png";
import logoDos from "../assets/redes/Ae.png";
import logoTres from "../assets/redes/Gt.png";
import logoCuatro from "../assets/redes/mother.png";
import redUno from "../assets/redes/facebook.png";
import redDos from "../assets/redes/instagram.png";
import redTres from "../assets/redes/youtube.png";
import pagos from "../assets/redes/1.png";
import iconUno from "../assets/icons/sobre.png";
import iconDos from "../assets/icons/phone.png";
import iconTres from "../assets/icons/what.png";
import iconCuatro from "../assets/icons/cambios.png";
import iconCinco from "../assets/icons/localWhite.png";



function Footer(){


    return(

        <>
        <img className="fondo" src={fondo} alt=""/>

        <section className="suscripcion">

<img src={fondo} alt=""/>

  <p>SUSCRIBITE A NUESTRAS</p>
   <h2>GRANDES OFERTAS</h2>

 <button className="suscripcionBtn"><a href="">SUSCRIBIRSE</a></button>
  
</section>


<section className="marcasF">

  <div><img src={logoUno} alt=""/></div>
  <div><img src={logoDos} alt=""/></div>
  <div><img src={logoTres} alt=""/></div>
  <div><img src={logoCuatro} alt=""/></div>

</section>

<div className="redes">
<h1>Siguenos en:</h1>
<a href=""><img src={redUno} alt=""/></a>
<a href=""><img src={redDos} alt=""/></a>
<a href=""><img src={redTres} alt=""/></a>
</div>


<div className="mediosPagos">

  <a href=""><img src={pagos} alt=""/></a>

</div>

<div className="titulos">
<h3>Nuestars marcas</h3>
<h3 style={{marginRight: '320px'}}>Informacion</h3>
<h3 style={{marginRight: '20px'}}>Canales de servicio al cliente</h3>
</div>

<div className="infoMarcas">
  <a href="">Marca</a>
  <a href="">Mapa del Sitio</a>
  <a href="" style={{fontWeight: 'bold', fontSize: '20px'}}>¿Necesitas ayuda?</a>
  <a href="">Preguntas frecuentes</a>
  <a href="">¿Cómo redimir tus saldos a favor?</a>
  <a href="">¿Cómo comprar en nuestra tienda online?</a>
  <a href="">Guía de tallas hombre</a>
  <a href="">Guía de tallas mujer</a>
</div>

<div className="info">
  
<a href="">Dia sin IVA</a>
<a href="">Promociones</a>
<a href="">Política de Cookies</a>
<a href="">Política de cambios</a>
<a href="">Política de Privacidad</a>
<a href="">Protocolo de bioseguridad</a>
<a href="">Política de compra y entrega tienda online</a>
<a href="">Política de protección de datos personales</a>
<a href="">¿Quieres ser un distribuidor?</a>

</div>

<div className="info2">

  <a href="">Métodos de envío</a>
  <a href="">Pago contra entrega</a>
  <a href="">Términos y condiciones</a>
  <a href="">Tarjeta de Crédito Americanino Visa</a>
  <a href="">Trabaja con nosotros</a>
  <a href="">Solicita tu crédito SU+ pay</a>
  <a href="">¿Quieres tener una franquicia?</a>

</div>

<div className="servicio">

<a href=""><img src={iconUno} style={{
  width: '10%'}} alt=""/>servicioalcliente@americanino.com</a>
<a href=""><img src={iconDos} alt=""/>01 8000 1860 04</a>
<a href=""><img src={iconTres} alt=""/> Whatsapp</a>
<a href=""><img src={iconCuatro} alt=""/>Cambios, Garantías y PQRs!</a>
<a href=""><img src={iconCinco} alt=""/>Localizador de tiendas!</a>


</div>

<div className="final">

  <p>Todos los derechos reservados Americanino 2023 / COMODÍN S.A.S / NIT:800069933-6 / Calle 14 # 52 A 372 Medellín, Colombia</p>
</div>

</>

    );
};

export default Footer;