import Galeria from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import imgUno from "./assets/imgMenuDescubre/imgEventos/AE2.jpg";
import imgDos from "./assets/imgMenuDescubre/imgEventos/G1.jpg";
import imgTres from "./assets/imgMenuDescubre/imgEventos/Acno1.webp";
import imgCuatro from "./assets/imgMenuDescubre/imgEventos/Gs.jpg";




function MenuEventos (){
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
     }

      ]
return(

<div className="eventos">

  <button className="conoceMas"><a href="">Descubre mucho mas</a></button>

  <div className="imgLateral" style={{width: "100%", height:"720px" }}>

<Galeria items = {images}
showPlayButton={false}
showFullscreenButton={false}
showBullets={false}
slideIntervale={3000}
slideDuration={1000}
showNav={false}
autoPlay={true}
/>
     </div>
  
</div>
)
}

export default MenuEventos