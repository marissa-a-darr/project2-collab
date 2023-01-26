const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');

class Payments extends Model {}

Payments.init(
  {
    id:{ 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true, 
  },
  payment_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_date: {
    type: DataTypes.DATEONLY,
    allowNull: false, 
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  bill_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Billtype',
      key: 'id',
      unique: true
    },
  },
  user_id : {
    type:DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
      unique: true
    }
  }
},
{
  sequelize,
  timestamps: false, 
  freezeTableName: true,
  underscored: true,
  modelName: 'Payments'}
);
module.exports = Payments;