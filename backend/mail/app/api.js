/************************************/
/*** Import des modules nécessaires */
const express = require("express");
const cors = require("cors");

/*****************************/
/*** Initialisation de l'API */
const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/***********************************/
/*** Import des modules de routage */

const mailRouter = require("./routes/mail");

/******************************/
/*** Mise en place du routage */

app.get("/", (req, res) => {
    res.send("It's alive");
});

app.use("/mail", mailRouter);

app.get("*", (req, res) => res.status(501).send("What the hell are you doing !?!"));

module.exports = app;
