const selectOutputTransactions = {
  text: 'SELECT * from cnab.transactions where tipo in ($1, $2, $3)',
  values: [2, 3, 9],
}

module.exports = selectOutputTransactions;