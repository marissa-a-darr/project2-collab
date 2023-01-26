const sequelize = require ('sequelize');
const {Payments, User, BillType} = require ('../models');
const paymentsSeedData = require ('./paymentsSeeds.json');
const userSeedData= require ('./userSeed.json')
const billTypeSeedData = require ('./billTypeSeeds.json')

const seedDatabase = async () => {
  console.log('seeding database done');
  await sequelize.sync({force: true});
  await BillType.bulkCreate(billTypeSeedData);
  await User.bulkCreate(userSeedData);
  await Payments.bulkCreate(paymentsSeedData);
  
  process.exit(0);
}

seedDatabase();