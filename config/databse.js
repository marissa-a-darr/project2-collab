const Sequelize = require('sequelize');
const userModel = require('./models/user');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = userModel(sequelize);

sequelize.sync()
    .then(() => console.log('Users table has been created'))
    .catch(error => console.log('This error occurred: ', error));

module.exports = User;
