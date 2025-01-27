import React from 'react';
import Welcome from './Welcome'; // Importamos el componente Welcome

// Componente App que renderiza 3 Welcome con diferentes nombres
const App = () => {
  return (
    <div className="App">
      <h1>Bienvenidos a la aplicación de saludos</h1>
      <Welcome name="Juan" />
      <Welcome name="Ana" />
      <Welcome name="Carlos" />
    </div>
  );
};

export default App;
