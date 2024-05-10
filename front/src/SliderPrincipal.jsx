import Acno from "./assets/Slider/acno.jpg"
import Ae from "./assets/Slider/Ae.webp"
import g2 from "./assets/Slider/g2.jpg"
import "react-image-gallery/styles/css/image-gallery.css";
import Galeria from "react-image-gallery"



function SliderPrincipal(){

  const images = [
{
     original: Acno,
        
},
{

  original: Ae,
},
{

  original: g2,
}
  ]

return(

<div  style={{width: "100%", margin:"auto", maxHeight:"calc(100vh - 80px)", marginTop: "60px" }}>

   <Galeria items = {images}
   showPlayButton={false}
   showFullscreenButton={false}
   showBullets={true}
   slideIntervale={3000}
   slideDuration={1000}
   showNav={false}
   autoPlay={true}
   />
    

</div>


);


};

export default SliderPrincipal;