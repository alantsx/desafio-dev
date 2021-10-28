const transactionsService = require('../../database/dbConnection');

exports.getTransactions = () => {
    return transactionsService.getTransactions();
}