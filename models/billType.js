const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BillType extends Model {}

BillType.init(
  {
    id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, 
    },
    bill_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false, 
    freezeTableName: true,
    underscored: true,
    modelName: 'Billtype'}
);

sequelize.sync({force: true});

module.exports = BillType;