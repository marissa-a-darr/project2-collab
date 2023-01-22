const User = require('./User');
const  Payments= require('./paymentsDue');
const billType = require('./billType');

User.hasMany(Payments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

billType.hasMany(Payments, {
  foreignKey: "bill_id",
  onDelete: 'CASCADE'
})



module.exports = { User, Payments, billType};
