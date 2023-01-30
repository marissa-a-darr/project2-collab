const sequelize = require ('../config/connection');
const {Payments, User} = require ('../models');
const paymentsSeedData = require ('./paymentsSeeds');
const userSeedData= require ('./userSeed')
const billTypeSeedData = require ('./billTypeSeeds')

const seedDatabase = async () => {
  await sequelize.sync({force: true});
  const users = await User.bulkCreate(userSeedData); (userSeedData, {
    individualHooks: true,
    returning: true,
  });
  await BillType.bulkCreate(billTypeSeedData);

  await Payments.bulkCreate(paymentsSeedData);
  
  process.exit(0)
}

seedDatabase();