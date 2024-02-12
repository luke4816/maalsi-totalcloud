const app = require("./app/api");

app.listen(process.env.PORT, () => {
    console.log(`This server is running on port ${process.env.PORT}. Have fun !`);
});
