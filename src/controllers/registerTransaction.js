const client = require('../database/connectDb');
const { insertTransactions } = require('../database/insertTransaction');
const { parseTransactions } = require('./parser');

exports.registerTransaction = () => {
  const transactionsParsed = parseTransactions();
  for (var index = 0; index < transactionsParsed.tipo.length; index++) {
    transaction = {
      tipo: transactionsParsed.tipo[index],
      dataEfetuada: transactionsParsed.data[index],
      valor: transactionsParsed.valor[index],
      cpf: transactionsParsed.cpf[index],
      cartao: transactionsParsed.cartao[index],
      hora: transactionsParsed.hora[index],
      donoLoja: transactionsParsed.donoLoja[index],
      nomeLoja: transactionsParsed.nomeLoja[index]
    }
    client.query(insertTransactions(transaction), (err, res) => {
      if (err) {
        console.log(err.stack);
      }
    });
  }
}