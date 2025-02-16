// Se carga el módulo de Express
const express = require("express");
const mustacheExpress = require("mustache-express");
const fs = require("fs");
const https = require("https");
const session = require("express-session");
const cors = require("cors");
const { isAuth, isAdmin } = require("./middlewares/auth");
const userFrontRoutes = require("./routes/usersFront");
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");
const teacherRoutes = require("./routes/teachers");
const studentRoutes = require("./routes/students");
const authRoutes = require("./routes/auth");

// Creo la aplicación Express
const app = express();
// Declaro el puerto de escucha
const port = 1443;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`The server heard a request: ${req.method} @ ${req.url}`)
  next()
})

app.use(
  session({
    secret: "ClaveUltraSecretadeSesion",
    resave: false,
    saveUninitialized: false,
  })
);

// Allow requests from all origins OR dynamically allow the frontend origin
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], // Allow both
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // Enable if using cookies/sessions
  })
);
app.get("/", (req, res) => {
  res.send("The server works!")
})
// Mustache
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

// localhost:1443/about.html

// app.use("/api/*", isAuth);


// Routes API
app.use("/api/user", userRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);

// Routes
// Auth
app.use(authRoutes);
// User Front
app.use(userFrontRoutes);
// Home
app.get("/home", homeRoutes);

// Creo el servidor en el puerto ${port}
// https
//   .createServer(
//     {
//       cert: fs.readFileSync("./certs/expressproject.crt"),
//       key: fs.readFileSync("./certs/expressproject.key"),
//     },
//     app
//   )
  app.listen(port, function () {
    console.log(`Example server listening on http://localhost:${port}`);
  });
