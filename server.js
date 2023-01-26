const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/routes");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers = require('./utils/helpers')

const PORT = process.env.PORT || 3001;
const app = express();

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
