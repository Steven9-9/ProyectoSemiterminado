import React from 'react';
import "../../proyecto-vitrina/src/indexVitrina.css"

const Slide = ({ text, active }) => {
  return (
    <div className={`slideVitrina ${active ? 'active' : ''}`}>
      <p>{text}</p>
    </div>
  );
};

export default Slide;