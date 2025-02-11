/* import React, { useState } from 'react';
import PropTypes from 'prop-types';



import './Login.css';

async function loginUser(credentials) {
  const res = await fetch('http://localhost:1443/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })

  if (!res.ok) {
    throw new Error(`Failed logging in`)
  }

  const res2 = await fetch(`http://localhost:1443/token`, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Autorization': "Bearer " + localStorage.getItem("accessToken")
    },
    body: JSON.stringify(credentials),
  });

  if (!res2.ok) {
    throw new Error('Failed retrieving token');
  }

  const { token } = await res2.json()
  localStorage.setItem("token", token); 
  return token;
}

  

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();



  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
 */


// login.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  const res = await fetch('http://localhost:1443/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    throw new Error('Failed logging in');
  }

  // Get the token from the response
  const { token } = await res.json();

  // Save the token in local storage
  console.log("Saving token:", token); 
  localStorage.setItem("token", token); 
  return token;
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // State for error message

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = await loginUser({
        username,
        password
      });
      console.log("Token received:", token);
      setToken(token); // Set the token in global state
    } catch (error) {
      console.error(error);
      setError("Login failed. Please try again.");
    }
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} value={username} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

  