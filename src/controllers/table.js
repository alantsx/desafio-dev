const client = require("../database/connectDb");
const selectOutputTransactions = require("../database/selectOutputTransactions");

const outputs = client.query(selectOutputTransactions);

outputs