import React, { Component } from 'react';
import Timer from './Timer'; // Importamos el componente Timer

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to My Timer App</h1>
        <Timer /> {/* Usamos el componente Timer */}
      </div>
    );
  }
}

export default App;

