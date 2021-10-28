const { Sequelize } = require('sequelize');

exports.dbConnection = async () => {
    const sequelize = new Sequelize('postgres', 'postgres', 'lol123', {
        host: 'localhost',
        dialect: 'postgres'
    });
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}