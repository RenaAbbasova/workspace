import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



class App extends React.Component {
  render() {
    return (
      <h1>
        Hello world!
      </h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* function tick() {
  const element = (
    <div>
      <h1>
        hello world!
      </h1>
    </div>
  )
} */