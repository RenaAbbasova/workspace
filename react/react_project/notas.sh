1. npm install sequelize
2. npx sequelize db:migrate
3. sequelize db:seed:all

client:
npm create vite@latest name-of-your-project -- --template react
npm install react-router-dom
npm run dev


update the server app.js
app.use(cors()) and replace it with 
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend requests (Change to your domain in production)
    credentials: true, // Allow cookies & sessions if needed
  })
);

create a file .env in the root folder of the client folder
VITE_API_URL=https://localhost:1443

in client folder create src/api.js
put this on it:
const API_URL = import.meta.env.VITE_API_URL; // Read from .env file

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/api/user`, {
    method: "GET",
    credentials: "include", // Important if using sessions
  });
  return response.json();
};


create in src/pages/Home.jsx:
import { useEffect, useState } from "react";
import { fetchData } from "../api"; // Import API function

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Data from Server:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Home;


Modify your vite.config.js file inside your client folder like this:
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:1443", // Your Express backend URL
        changeOrigin: true,
        secure: false, // Ignore SSL certificate errors (important for self-signed certs)
      },
    },
  },
});

creating login page
npm install react-router-dom

