// IMPORTS
const express = require("express");
const cors = require("cors");
const middlewareTest = require("./middlewares/index");

const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ENDPOINTS
app.post("/register", (req, res) => {
  // validar email, password
  // consultar si existe el email
  // encriptar password
  // crear un usuario
  // guardar en la base de datos
});
app.post("/login", (req, res) => {
  // validar email, password
  // validar si existe el usuario
  // comparar password
  // validar si el email y el password son correctos
  // crear token de acceso
});
app.get("/users", (req, res) => {});

// SET UP
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
