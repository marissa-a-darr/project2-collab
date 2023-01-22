const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Payments extends Model { }

Payments.init({

    id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, 
    },
    payment_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false, 
    },
    amount : {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    bill_id: {
      type:DataTypes.STRING,
      references: {
        model: 'billType',
        key: 'id',
        unique: false
      }
    },
    user_id : {
      type:DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        unique: false
      }
    },
  },
  {
    sequelize,
    timestamps: false, 
    freezeTableName: true,
    underscored: true,
    modelName: 'PaymentsDue'
  }
);
module.exports = Payments;
