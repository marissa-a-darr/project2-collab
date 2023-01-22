const express = require("express");
const sequelize = require("sequelize");
const path = require("path");
// const exphbs = require('express-handlebars');



const app = express();
const PORT = process.env.PORT || 3001;



// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});










// const signupRoute = require("./routes/Signup");
// const loginRoute = require("./routes/Login");

// app.use('/signup', signupRoute);
// app.use('/login', loginRoute);

// app.use('/signup', signupRoute);
// app.use('/login', loginRoute);