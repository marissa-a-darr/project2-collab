const sequelize = require ('sequelize');
const {Payments, User, billType} = require ('../models');
const paymentsSeedData = require ('./paymentsSeeds.json');
const userSeedData= require ('./userSeed.json')
const billTypeSeedData = require ('./billTypeSeeds.json')

const seedDatabase = async () => {
  await sequelize.sync({force: true});
  const user = await User.bulkCreate(userSeedData);
  const payments = await Payments.bulkCreate(paymentsSeedData);
  const billTypes = await billType.bulkCreate(billTypeSeedData);
  
}

seedDatabase();