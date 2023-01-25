const sequelize = require('../config/connection');
const { User, Payments, BillType } = require('../models');

const userData = require('./userSeed.json');
const paymentsData = require('./paymentsSeeds.json');
const billType = require('./billTypeSeeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const payment of paymentsData) {
    await Payments.create({
      ...paymentsData,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const billtype of billType) {
    await BillType.create({
      ...billType,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();