const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/api/userRoutes');
const path = require('path');
const { User, Payments, BillType } = require('./models');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const session = require('express-session');

const app = express();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
// app.engine('hbs', hbs.engine({
//     layoutsDir: __dirname + '/views/layouts',
//     extname: 'hbs',
//     defaultLayout: 'main',
// }));
app.set('view engine', 'handlebars');
app.set('views', './public/views');

app.get('/login', (req, res) => {
    res.render('login');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(Router);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

