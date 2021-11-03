exports.insertTransactions = (transaction) => {
  const insertTransactionsQuery = {
    text: 'INSERT into cnab.transactions(tipo, dataEfetuada, valor, cpf, cartao, hora, donoLoja, nomeLoja) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
    values: [transaction.tipo, transaction.dataEfetuada, transaction.valor, transaction.cpf, transaction.cartao, transaction.hora, transaction.donoLoja, transaction.nomeLoja],
  }
  return insertTransactionsQuery;
}