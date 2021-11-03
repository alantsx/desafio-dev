const selectInputTransactions = {
  text: 'SELECT * from cnab.transactions where tipo in ($1, $2, $3, $4, $5, $6)',
  values: [1, 4, 5, 6, 7, 8],
}

module.exports = selectInputTransactions;