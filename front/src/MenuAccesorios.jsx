
import Galeria from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import imgUno from "./assets/imgMenuDescubre/accesorios/locionAcno.webp";
import imgDos from "./assets/imgMenuDescubre/accesorios/morralG.jpg";
import imgTres from "./assets/imgMenuDescubre/accesorios/gafasG.jpg";
import imgCuatro from "./assets/imgMenuDescubre/accesorios/mediasAe.webp";
import imgCinco from "./assets/imgMenuDescubre/accesorios/gorroG.jpg";
import imgSeis from "./assets/imgMenuDescubre/accesorios/cunaMother.jpg";



function MenuAccesorios(){

  const images = [
    {
         original: imgUno,
            
    },
    {
    
      original: imgDos,
    },
    {
    
      original: imgTres,
    },
    {
      original: imgCuatro,
         
 },
 {
 
   original: imgCinco,
 },
 {
 
   original: imgSeis,
 }
      ]
  return(
<div className="accesorios">
  <button className="conoceMas"><a href="">Conoce nuestros accesorios</a></button>

  <div className="imgAccesorios" style={{width: "100%" }}>

   <Galeria items = {images}
   showPlayButton={false}
   showFullscreenButton={false}
   showBullets={false}
   slideIntervale={3000}
   showNav={false}
   autoPlay={true}
   />
        </div>

</div>
)
}

export default MenuAccesorios