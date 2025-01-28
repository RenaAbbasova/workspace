import React, { Component } from 'react';

// Subcomponente para renderizar el encabezado de la tabla
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

// Subcomponente para renderizar las filas de la tabla
const TableBody = (props) => {
  const rows = props.peopleData.map((person, index) => {
    return (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.job}</td>
        <td>
          <button onClick={() => props.removePeople(index)}>Remove</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

// Componente principal Table que utiliza TableHeader y TableBody
class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody 
          peopleData={this.props.peopleData} 
          removePeople={this.props.removePeople}
        />
      </table>
    );
  }
}

export default Table;
