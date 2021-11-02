const fs = require("fs");

exports.parseTransactions = () => {
    const transactions = fs.readFileSync("src/uploads/CNAB.txt").toString().split("\r\n");
    transactions.pop();

    const tipoTransaction = [], dataTransaction = [], valorTransaction = [],
        cpfTransaction = [], cartaoTransaction = [], horaTransaction = [],
        donoLojaTransaction = [], nomeLojaTransaction = [];

    for (var index = 0; index < transactions.length; index++) {
        tipoTransaction.push(parseInt(transactions[index][0]));
        dataTransaction.push(transactions[index].slice(1, 9));
        valorTransaction.push((parseInt(transactions[index].slice(9, 19))) / 100);
        cpfTransaction.push(transactions[index].slice(19, 30));
        cartaoTransaction.push(transactions[index].slice(30, 42));
        horaTransaction.push(transactions[index].slice(42, 44) + ":" + transactions[index].slice(44, 46) + ":" + transactions[index].slice(46, 48));
        donoLojaTransaction.push(transactions[index].slice(48, 62));
        nomeLojaTransaction.push(transactions[index].slice(62));
    }

    const transactionsParsed = {
        tipo: tipoTransaction,
        data: dataTransaction,
        valor: valorTransaction,
        cpf: cpfTransaction,
        cartao: cartaoTransaction,
        hora: horaTransaction,
        donoLoja: donoLojaTransaction,
        nomeLoja: nomeLojaTransaction
    }
    return transactionsParsed;
}