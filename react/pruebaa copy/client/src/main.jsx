import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';  // Ensure the correct import path
///


////
function Main() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}



createRoot(document.getElementById('root')).render(<Main />);


