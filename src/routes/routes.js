const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerTransaction } = require('../controllers/registerTransaction');
const { selectTable } = require('../controllers/table');
const client = require('../database/connectDb');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "src/uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, "CNAB.txt");
    }
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
    res.render("index");
    selectTable();
});

router.get("/transactions", async (req, res) => {
    const { rows } = await client.query('SELECT * from cnab.transactions');
    res.json(rows);
});

router.post("/upload", upload.single("arquivo"), (req, res) => {
    res.send("Arquivo recebido!");
    registerTransaction();
});

module.exports = router;