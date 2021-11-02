const client = require('../database/connectDb');
const { insertTransactions } = require('../database/Transactions');
const { parseTransactions } = require('./parser');

exports.registerTransaction = () => {
  client.connect();
  const transactionsParsed = parseTransactions();
  for (var index = 0; index < transactionsParsed.tipo.length; index++) {
    queryTransaction = {
      tipo: transactionsParsed.tipo[index],
      dataEfetuada: transactionsParsed.data[index],
      valor: transactionsParsed.valor[index],
      cpf: transactionsParsed.cpf[index],
      cartao: transactionsParsed.cartao[index],
      hora: transactionsParsed.hora[index],
      donoLoja: transactionsParsed.donoLoja[index],
      nomeLoja: transactionsParsed.nomeLoja[index]
    }
    insertTransactions(queryTransaction);
  }
}