const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const sequelize = require('./config/connection');
const { User, Payments, BillType } = require('./models');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(cors());
app.use(bodyParser.json());

// Define associations
User.hasMany(Payments, {
foreignKey: 'user_id',
onDelete: 'CASCADE'
});

BillType.hasMany(Payments, {
foreignKey: "bill_id",
onDelete: 'CASCADE'
});

//Sync the models with the database
sequelize.sync({ force: false }).then(() => {
console.log('Models synced successfully');
app.listen(3001, () => {
console.log('Server started on port 3001');
});
});

app.use(routes);

//Add the static folder
app.use(express.static(path.join(__dirname, 'public')));