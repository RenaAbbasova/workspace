
import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const token = localStorage.getItem('token'); // Get token from storage
    console.log("Retrieved token:", token); // Debugging log
    return token || null; 
  };

  const [token, setToken] = useState(getToken());
  console.log("Initial token state:", token); 
  

  const saveToken = (userToken) => {
    console.log("Saving token:", userToken); // Debugging log
    localStorage.setItem('token', userToken); // Store as a string
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  };
} 


  
  