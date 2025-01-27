import React from 'react';

// Componente Welcome que acepta la prop 'name'
const Welcome = ({ name }) => {
  return (
    <h2>Hola {name}, bienvenido al curso de los Albañiles Digitales</h2>
  );
};

export default Welcome;


// El componente Welcome en el ejercicio es un componente 
// que recibe una prop llamada name y usa esta
// prop para mostrar un mensaje personalizado.