const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/api/userRoutes');
const path = require('path');
const sequelize = require('./config/connection');
const { User, Payments, BillType } = require('./models');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();

const hbs = exphbs.create({ 
    helpers, 
    extname: '.hbs', 
    layoutsDir: path.join(__dirname, 'views/layouts'), 
    partialsDir: path.join(__dirname, 'views/partials') 
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(cors());
app.use(bodyParser.json());



//Sync the models with the database
sequelize.sync({ force: true }).then(() => {
console.log('Models synced successfully');
app.listen(3001, () => {
console.log('Server started on port 3001');
});
});

app.use(Router);

//Add the static folder
app.use(express.static(path.join(__dirname, 'public')));
