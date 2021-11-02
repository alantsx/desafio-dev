const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerTransaction } = require('../controllers/InsertTransaction');

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
    registerTransaction();
});

router.get("/transactions", async (req, res) => {
    const transactions = await transactionsService.getTransactions();
    res.json(transactions);
});

router.post("/upload", upload.single("arquivo"), (req, res) => {
    res.send("Arquivo recebido!");
});

module.exports = router;