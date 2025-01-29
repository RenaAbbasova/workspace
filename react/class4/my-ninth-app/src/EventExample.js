import React from "react";

class EventExample extends React.Component {
  constructor(props) {
    super(props);
    this.manejadorClick = this.manejadorClick.bind(this);
  }

  manejadorClick() {
    console.log("this is:", this);
  }

  campoPublico = () => {
    console.log("this is:", this);
  };

  metodoDeClase() {
    console.log("this is:", this);
  }

  deleteRow = (id, e) => {
    console.log(e, id);
  };

  render() {
    const id = 10; 

    return (
      <>
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
