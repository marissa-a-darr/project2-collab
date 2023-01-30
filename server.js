const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require("path");
const bodyParser = require("body-parser");
const homeRoutes = require("./controllers/index");
const apiRoutes = require("./controllers/api/index");
const sequelize = require("./config/connection");
const helpers = require('./utils/helpers')


const app = express();

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
app.set('view engine', 'handlebars');
app.set('views', './public/views');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Routing for login page
app.get('/login', (req, res) => {
  res.render('login', {});
});

// Routing for register page
app.get('/register', (req, res) => {
  res.render('register', {});
});

app.use(homeRoutes);
app.use(apiRoutes)

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening at', PORT));
});

