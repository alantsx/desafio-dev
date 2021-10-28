const database = require('./infra/database');

exports.getTransactions = () => {
    return database.query('select * from cnab.transactions');
};