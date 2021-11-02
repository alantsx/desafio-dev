const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerTransaction } = require('../controllers/registerTransaction');
const { selectIncomeTransactions } = require('../database/Transactions');

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
    res.send('Hello, world!');
    selectIncomeTransactions();
});

router.post("/upload", upload.single("arquivo"), (req, res) => {
    res.send("Arquivo recebido!");
    registerTransaction();
});

module.exports = router;