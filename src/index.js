const express = require ("express");
const app = express();
const multer = require("multer");
const path = require("path");
const parser = require ("./parser");
const fs = require("fs");
const { parseTransactions } = require("./parser");

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function(req, file, cb) {
        cb(null, "CNAB" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

app.get("/", (req, res) => {
    res.render("index");
    parseTransactions();
});

app.post("/upload", upload.single("arquivo"), (req, res) => {
    res.send("Arquivo recebido!");
});

app.listen(8080, () => {
    console.log("👾Servidor iniciado!👾");
});