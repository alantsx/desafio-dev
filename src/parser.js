const fs = require("fs");

module.exports = {
    parseTransactions: () => {
        const transactions = fs.readFileSync("uploads/CNAB.txt").toString().split("\n");
        transactions.pop();

        const tipoTransaction = [], dataTransaction = [], valorTransaction = [],
        cpfTransaction = [], cartaoTransaction = [], horaTransaction = [], 
        donoLojaTransaction = [], nomeLojaTransaction = [];

        for (var index = 0; index < transactions.length; index++) {
            tipoTransaction.push(transactions[index][0]);
            dataTransaction.push(transactions[index].slice(1, 9));
            valorTransaction.push((parseInt(transactions[index].slice(9, 19)))/100);
            cpfTransaction.push(transactions[index].slice(19, 30));
            cartaoTransaction.push(transactions[index].slice(30, 42));
            horaTransaction.push(transactions[index].slice(42, 48));
            donoLojaTransaction.push(transactions[index].slice(48, 62));
            nomeLojaTransaction.push(transactions[index].slice(62));
        }
        console.log(nomeLojaTransaction);
    }
}