const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerTransaction } = require('../controllers/registerTransaction');
const client = require('../database/connectDb');
const selectTransactionsQuery = require('../database/selectInputTransactions');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "src/uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, "CNAB.txt");
    }
});

const upload = multer({ storage });

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/transactions", async (req, res) => {
    const { rows } = await client.query('SELECT * from cnab.transactions');
    res.json(rows);
});

router.post("/upload", upload.single("arquivo"), async (req, res) => {
    res.send("Arquivo recebido!");
    await registerTransaction();
});

module.exports = router;