/*** IMPORT */
const express = require("express");
const cors = require("cors");

/*** INIT API */
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

/*** IMPORT ROUTER */
const user_router = require("./routes/users");
const cocktail_router = require("./routes/cocktails");

/*** MAIN ROUTER */
app.get("/", (req, res) => res.send(`I'm online. All is OK !  [DATA]`));

app.use("/users", user_router);
app.use("/cocktails", cocktail_router);

app.all("*", (req, res) => res.status(501).send("What the hell are you doing !?!"));

/*** Export for server and Test */
module.exports = app;
