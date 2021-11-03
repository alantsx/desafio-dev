const express = require("express");
const client = require("./src/database/connectDb");
const app = express();

client.connect();
app.set('view engine', 'ejs');

app.use('/', require('./src/routes/routes'));

app.listen(8080, () => {
    console.log("👾Servidor iniciado!👾");
});