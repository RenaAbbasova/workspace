import React from 'react';

const App = () => {
  const data = [
    { name: 'John', job: 'Engineer' },
    { name: 'Sarah', job: 'Designer' },
    { name: 'Tom', job: 'Manager' }
  ];

  return (
    <div className="App">
      <h1>Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;


