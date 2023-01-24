const sequelize = require('../config/connection');
const {Payments, User, BillType, Expenses} = require('../models');
const paymentsSeedData = require('./paymentsSeeds.json');
const userSeedData= require('./userSeed.json');
const billTypeSeedData = require('./billTypeSeeds.json');
const expenseSeedData = require('./expenses.json');

const seedDatabase = async () => {
  console.log('seeding database done');
  await sequelize.sync({force: true});
  await User.bulkCreate(userSeedData);
  await Payments.bulkCreate(paymentsSeedData);
  await BillType.bulkCreate(billTypeSeedData);
  await Expenses.bulkCreate(expenseSeedData);

  process.exit(0);  
};

seedDatabase();