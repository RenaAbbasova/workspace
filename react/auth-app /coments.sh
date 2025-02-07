created files in src/components/
layout
login
profile
students
users
app.jsx updated

update vite.config.js: add certificates path

open file api.js in he src

update server app.js: const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:5173', // or your Vite dev server port
  credentials: true
}));