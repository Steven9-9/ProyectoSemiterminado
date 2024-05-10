import React from 'react';

const Slide = ({ text, active }) => {
  return (
    <div className={`slide ${active ? 'active' : ''}`}>
      <p>{text}</p>
    </div>
  );
};

export default Slide;