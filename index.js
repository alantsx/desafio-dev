const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./src/routes/routes'));

app.listen(8080, () => {
    console.log("👾Servidor iniciado!👾");
});