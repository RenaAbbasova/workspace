import React, { Component } from "react";
/* import Table from "./Table";  // Asegúrate de que esta ruta sea correcta

class App extends Component {
    state = {
        people: [
            {
                name: "Maria",
                job: "developer"  // Corregí el error tipográfico de "debveloper" a "developer"
            },
            {
                name: "Olga",
                job: "accountant"
            }
        ]
    };

     // Función para eliminar personas de la lista
    removePeople = (index) => {
        this.setState((prevState) => {
            const updatedPeople = prevState.people.filter((person, i) => i !== index); 
            return { people: updatedPeople }; // Devuelve el nuevo estado
        });
    };

    render() {
        const title = <h1>Nice People</h1>;

        return (
            <div className="container">
                <Table 
                 peopleData={this.state.people} 
                 removePeople={this.removePeople} 
                 title={title}
                />
            </div>
        );
    }
}

export default App; */


// app para añadir personas dinamicamente

import Form from "./Form";  // Asegúrate de que la ruta de Form.js sea correcta
import Table from "./Table";  // Asegúrate de que la ruta de Table.js sea correcta

class App extends Component {
    state = {
        people: [],  // Inicialmente vacío, ya no tenemos datos hardcodeados
    };

    // Función para eliminar una persona
    removePeople = (index) => {
        this.setState((prevState) => ({
            people: prevState.people.filter((person, i) => i !== index),  // Filtra la persona eliminada
        }));
    };
    
    // Función para manejar el envío del formulario desde el componente Form
    handleSubmit = (newPerson) => {
        this.setState((prevState) => ({
            people: [...prevState.people, newPerson],  // Agrega la nueva persona al array
        }));
    };
    
    render() {
        return (
            <div className="container">
                {/* Pasa handleSubmit a Form como prop */}
                <Form handleSubmit={this.handleSubmit} />  

                <Table 
                    peopleData={this.state.people}  // Pasa los datos al componente Table
                    removePeople={this.removePeople}  // Pasa la función para eliminar personas
                />
            </div>
        );
    }
}

export default App;
