const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class billType extends Model {}
billType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bill_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Bill Type",
  }
);
module.exports = billType;
