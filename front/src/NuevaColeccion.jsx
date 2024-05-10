import React, { useState } from 'react';

import Acno from "./assets/imgNuevaColeccion/collageAcno.png";
import Ae from "./assets/imgNuevaColeccion/collageAe.jpeg";
import Gstart from "./assets/imgNuevaColeccion/PaulaPattonHd.jpg";
import Mother from "./assets/imgNuevaColeccion/collageMother.jpeg";

import AcnoHover from "./assets/Ropa/Americanino/camisas/Acno4.4.webp";
import AeHover from "./assets/Ropa/Ae/Ae1.webp";
import GstartHover from "./assets/Ropa/G-star/Buzos/g5Recortada.png";
import MotherHover from "./assets/Ropa/Mother/Bebe.jpg";

function NuevaColeccion (){
  const [acnoSrc, setAcnoSrc] = useState(Acno);
  const [aeSrc, setAeSrc] = useState(Ae);
  const [gstartSrc, setGstartSrc] = useState(Gstart);
  const [motherSrc, setMotherSrc] = useState(Mother);

  // Funciones para manejar el hover de cada imagen
  const handleMouseEnter = (setImageSrc, hoverImage) => () => {
      setImageSrc(hoverImage);
  };

  const handleMouseLeave = (setImageSrc, initialImage) => () => {
    setImageSrc(initialImage);
};
return(

  <>

  <div className="LoNuevo">

  <div className='palabra'>

<h1>NUEVA</h1>
<h1>COLECCION</h1>

</div>
  <div>
      <a href="#">
          <img className='loNuevoImg'
              src={acnoSrc}
              alt="Imagen Acno"
              onMouseEnter={handleMouseEnter(setAcnoSrc, AcnoHover)}
              onMouseLeave={handleMouseLeave(setAcnoSrc, Acno)}
          />
      </a>
  </div>
  <div>
      <a href="#">
          <img className='loNuevoImg'
              src={aeSrc}
              alt="Imagen Ae"
              onMouseEnter={handleMouseEnter(setAeSrc, AeHover)}
              onMouseLeave={handleMouseLeave(setAeSrc, Ae)}
          />
      </a>
  </div>
  <div>
      <a href="#">
          <img className='loNuevoImg'
              src={gstartSrc}
              alt="Imagen Gstart"
              onMouseEnter={handleMouseEnter(setGstartSrc, GstartHover)}
              onMouseLeave={handleMouseLeave(setGstartSrc, Gstart)}
          />
      </a>
  </div>
  <div>
      <a href="#">
          <img className='loNuevoImg'
              src={motherSrc}
              alt="Imagen Mother"
              onMouseEnter={handleMouseEnter(setMotherSrc, MotherHover)}
              onMouseLeave={handleMouseLeave(setMotherSrc, Mother)}
          />
      </a>
  </div>
</div>
</>
);
}


export default NuevaColeccion;