const client = require("./connectDb");

exports.insertTransactions = async (queryTransaction) => {
  const insertText = 'INSERT into cnab.transactions(tipo, dataEfetuada, valor, cpf, cartao, hora, donoLoja, nomeLoja) VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
  const values = [queryTransaction.tipo, queryTransaction.dataEfetuada, queryTransaction.valor, queryTransaction.cpf, queryTransaction.cartao, queryTransaction.hora, queryTransaction.donoLoja, queryTransaction.nomeLoja];
  await client.query(insertText, values, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res);
    }
  });
}

exports.selectIncomeTransactions = async () => {
  const selectTransactions = 'SELECT * from cnab.transactions where tipo in (1, 4, 5, 6, 7, 8)';

  await client.query(selectTransactions, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  });
}