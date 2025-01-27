import React from 'react';

const Greeting = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Your job is: {props.job}</p>
    </div>
  );
};

export default Greeting;
