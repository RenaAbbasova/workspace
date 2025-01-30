// Warning.js
import React from 'react';

const Warning = (props) => {
  if (!props.warn) {
    return null;  // No renderiza nada si la prop "warn" no está presente o es false
  }
  
  return <div className="warning">Warning!!</div>;  // Renderiza el warning si "warn" es true
};

export default Warning;


