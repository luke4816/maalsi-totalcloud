const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(cors());

app.get("/", (req, res) =>
    res.send(
        "It's moving. It's alive. It's alive... It's alive, it's moving, it's alive, it's alive, it's alive, it's alive, IT'S ALIVE!"
    )
);

const proxyAuth = createProxyMiddleware({
    target: process.env.HOST_AUTH,
    pathRewrite: {
        "^/api/v1/auth": "/auth",
    },
});
const proxyCore = createProxyMiddleware({
    target: process.env.HOST_CORE,
    pathRewrite: {
        "^/api/v1": "",
    },
});
const proxyMail = createProxyMiddleware({
    target: process.env.HOST_MAIL,
    pathRewrite: {
        "^/api/v1/mail": "/mail",
    },
});

app.use("/api/v1", proxyCore);
app.use("/api/v1/auth", proxyAuth);
app.use("/api/v1/mail", proxyMail);

app.all("*", (req, res) => res.status(501).send("Not on my watch"));

const PORT = process.env.PORT || 12000;
app.listen(PORT, () => {
    console.log(`Gateway started on port ${PORT}`);
});
