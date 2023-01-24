const sequelize = require ('../config/connection');
const { Payments, User, BillType } = require ('../models');
const paymentsSeedData = require ('./paymentsSeeds.json');
const userSeedData= require ('./userSeed.json')
const billTypeSeedData = require ('./billTypeSeeds.json')

const seedDatabase = async () => {
  await sequelize.sync({force: true});
  await BillType.bulkCreate(billTypeSeedData);
  await User.bulkCreate(userSeedData);
  await Payments.bulkCreate(paymentsSeedData);
  
  process.exit(0);
}

seedDatabase();