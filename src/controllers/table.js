const client = require("../database/connectDb");
const selectOutputTransactions = require("../database/selectOutputTransactions");

exports.selectTable = () => {
    client
        .query(selectOutputTransactions)
        .then(res => console.log(res.rows))
        .catch(e => console.error(e.stack));
}