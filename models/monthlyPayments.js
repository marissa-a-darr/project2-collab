const { Model, DataTypes} = require ('sequelize');
const { model, Sequelize } = require('../config/connection');

class Sales extends Model {}
Sales.init(
  {
    id:{ 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true, 

  },
  month: {
    type:DataTypes.STRING,
    allowNull: false
  },
  value: {
    type:DataTypes.INTEGER,
    allowNull: false
  }
},
{sequelize,
timestamps: false, 
freezeTableName: true,
underscored: true,
modelName: 'Sales'}
);


module.exports = Sales;












// const { Model, DataTypes } = require ('sequelize');
// const { model, Sequelize } = require('../config/connection');

// const sales = sequelize.define('sales', {
//     month: Sequelize.STRING,
//     value: Sequelize.INTEGER
//   });
  
// module.exports = sales;