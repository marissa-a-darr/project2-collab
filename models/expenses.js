const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expenses extends Model {}

Expenses.init(
  {
    id:{ 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true, 
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  sequelize,
  timestamps: false, 
  freezeTableName: true,
  underscored: true,
  modelName: 'expenses'}
);


module.exports = Expenses;














// const Sequelize = require('sequelize');
// const sequelize = require('../config/connection');

// const Expenses = sequelize.define('expenses', {
//     month: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     amount: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// });

// module.exports = Expenses;






































// const { Model, DataTypes } = require ('sequelize');
// const { model, Sequelize } = require('../config/connection');

// const sales = sequelize.define('sales', {
//     month: Sequelize.STRING,
//     value: Sequelize.INTEGER
//   });
  
// module.exports = sales;