const User = require('./User');
const  Payments= require('./paymentsDue');
const BillType = require('./billType');
const Expenses = require('./expenses');

User.hasMany(Payments, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

BillType.hasMany(Payments, {
  foreignKey: "bill_id",
  onDelete: "CASCADE",
});



module.exports = { User, Payments, BillType, Expenses};
