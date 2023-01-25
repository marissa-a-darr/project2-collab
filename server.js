const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
// const routes = require('./routes');
//const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
// app.use(express.static(initialPath));
// app.use(routes); 


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
//   });
  




//TO DO: 




// const signupRoute = require("./routes/Signup");
// const loginRoute = require("./routes/Login");

// app.use('/signup', signupRoute);
// app.use('/login', loginRoute);

// app.use('/signup', signupRoute);
// app.use('/login', loginRoute);