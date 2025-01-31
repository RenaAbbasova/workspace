import React from "react";
import Warning from "./Warning"; // Importamos el componente Warning

class EventExample extends React.Component {
  constructor(props) {
    super(props);
    this.manejadorClick = this.manejadorClick.bind(this);
    this.state = { 
      isLoggedIn: true,  // Estado para saber si está logueado
    
    };
  }

  manejadorClick() {
    console.log("this is:", this);
  }

  campoPublico = () => {
    console.log("this is:", this);
  };

  metodoDeClase() {
    console.log("this is:", this);
  };

  deleteRow = (id, e) => {
    console.log(e, id);
  };


  render() {
    const id = 10; 
    const { isLoggedIn } = this.state; // Obtenemos los estados de isLoggedIn 
    return (
      <>
         {/* Pasamos la prop "warn" al componente Warning */}
         <Warning warn={!isLoggedIn} />  {/* Se muestra si isLoggedIn es false */}

        <button onClick={this.manejadorClick}>
          Manejador ligado con bind
        </button>
        <button onClick={this.campoPublico}>
          Manejador con campo público
        </button>
        <button onClick={() => this.metodoDeClase()}>
          Manejador con método de clase
        </button>
        <button onClick={(e) => this.deleteRow(id, e)}>
          Eliminar con función flecha
        </button>
      </>
    );
  }
}

export default EventExample;


