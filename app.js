const express = require("express");
const middlewares = require("./middlewares");
const passport = require("passport");
require('./database');
//Routes
const authRoutes = require("./auth/auth.router").router;
const teamsRoutes = require("./teams/teams.router").router;

const app = express();

const port = 2000;

middlewares.setupMiddlewares(app);

app.get("/", (req, res) => {
  //req es la request, la petición
  //res es la respuesta
  res.status(200).send("PokeAPI Daniel Radomirov");
});

app.use("/auth", authRoutes);
app.use("/teams", teamsRoutes);

app.listen(port, () => {
  console.log("Server started at port 3000");
});

exports.app = app;
