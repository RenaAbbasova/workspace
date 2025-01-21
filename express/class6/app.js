// Se carga el módulo de Express
const express = require("express");
// Creo la aplicación Express
const app = express();

const session = require("express-session");

const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");

// Declaro el puerto de escucha
const port = 3000;
// Defino la ruta que se llamará cuando se reciba una petición HTTP GET
// en la dirección '/'
// La función callback recibe una petición y una respuesta como argumentos
app.get("/", (req, res) => {
  // Se define la cabecera HTTP con el tipo de contenido
  res.set("Content-Type", "text/plain");
  // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World!!"
  res.status(200).send("Hello World!!");
});

app.use(cookieParser("ClaveSuperSecreta"));


// Ruta para asignar las cookies
app.get("/cookies/set" , (req, res) => {
const date = new Date();
 date.setHours (date.getHours () + 5);
res.cookie("customCookie" , "Cookie value" , {
 secure: false,
 httpOnly: true,
 expires: date,
 sameSite: "strict" ,
 });
res.cookie("customSignedCookie" , "Cookie value signed" ,
{
 signed: true,
 httpOnly: true,
 expires: date,
 sameSite: "strict" ,
 });
res.send("Cookies set!" );
});

// Ruta para eliminar las cookies
app.get("/cookies/delete" , (req, res) => {
  res.clearCookie ("customCookie" );
  res.clearCookie ("customSignedCookie" );
  res.send("Cookies removed!" )
  });

// Ruta para obtener los valores de las cookies
app.get("/cookies" , (req, res) => {
// Cookies que no han sido firmadas
 console. log("Cookies: " , req.cookies);
// Cookies que han sido firmadas
 console. log("Signed Cookies: " , req.signedCookies);
res.json({
 customCookie: req.cookies.customCookie,
 customSignedCookie: req.signedCookies.customSignedCookie,
 });
});
// Ruta protegida, necesita que la variable haya sido configurada
app.get("/protected" , (req, res) => {
if (req.cookies.customCookie) {
 res.send("Cookie has been set!" );
 } else {
 res.send("The Cookie doesn't exist!" )
 }
});

// midleware de session
app.use(session({
 secret: "ClaveUltraSecreta" ,
 resave: false,
 saveUninitialized: false
}));

// Ruta para asignar la session
app.get("/sessions/set" , (req, res) => {
  req.session.isSessionSet = true;
  res.send("isSessionSet set!" );
  });

// Ruta para eliminar la variable de la session
app.get("/sessions/delete" , (req, res) => {
  delete req.session.isSessionSet
  res.send("Session variable removed!" );
  });  



// Ruta para obtener los valores de la session
app.get("/sessions" , (req, res) => {
  console. log("Sessions: " , req.session);
 // Cookies que han sido firmadas
 res.json({
  isSessionSet: req.session.isSessionSet
  });
 });
 // Ruta protegida, necesita que la variable haya sido configurada

 app.get("/protected-by-session" , (req, res) => {
 if (req.session.isSessionSet) {
  res.send("isSessionSet has been set!" );
  } else {
  res.send("The session variable doesn't exist!" );
  }
 });
 // token
 const JWT_SECRET = "ClaveMegaSecreta" ;
 app.get("/jwt/set" , (req, res) => {
 const token = jwt.sign({ data: "jwt value" },
 JWT_SECRET, {
  expiresIn: "5m",
  });
 res.json({ token: token });
 });

 // Middleware para obtener el data de JWT
const isAuth = (req, res, next) => {
if (!req.headers.authorization) {
 return res.status(401).json({
 message: "Authorization Header missing",
 });
 }
let authorization = req.headers.authorization;
let token = authorization.split(" ")[1];
let jwtData;
try {
 jwtData = jwt.verify(token, JWT_SECRET);
 } catch (error) {
 console.log(error);
 return res.status(401).json({
 message: "Invalid Token.",
 });
 }
req.data = jwtData.data;
next();
};

app.get("/jwt", isAuth, (req, res) => {
  res.json({ data: req.data });
  });


// Creo el servidor en el puerto ${port}
app.listen(port, () => {
  // Se escribe la URL para el acceso al servidor
  console.log(`Example server listening on http://localhost:${port}`);
});