import React from 'react';
import Greeting from './Greeting'; // Componente que usará props

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to my App</h1>
      <Greeting name="John" job="Engineer" />
      <Greeting name="Sarah" job="Designer" />
    </div>
  );
};

export default App;



