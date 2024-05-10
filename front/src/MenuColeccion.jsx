import imgUno from "./assets/imgMenuDescubre/marcas/denimSentido.webp";
import imgDos from "./assets/imgMenuDescubre/marcas/acnoConciente.jpg";
import imgTres from "./assets/imgMenuDescubre/marcas/Acno1.jpg";
import Galeria from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";


function MenuColeccion() {

  const images = [
    {
         original: imgUno,
            
    },
    {
    
      original: imgDos,
    },
    {
    
      original: imgTres,
    }
  ]
  
    return (
        <div className="coleccion">

            <button className="conoceMas"><a href="">Conoce mas</a></button>

            <div className="imgColeccion" style={{width: "100%" }}>

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

export default MenuColeccion;