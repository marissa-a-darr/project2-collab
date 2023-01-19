const User = require('./User');
const  Payments= require('./paymentsDue');

User.hasMany(Payments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Payments.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Payments };
