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
const auth_router = require("./routes/auth");

/*** MAIN ROUTER */
app.get("/", (req, res) => res.send(`I'm online. All is OK !  [AUTH]`));

app.use("/auth", auth_router);

app.all("*", (req, res) => res.status(501).send("What the hell are you doing !?!"));

/*** Export for server and Test */
module.exports = app;
