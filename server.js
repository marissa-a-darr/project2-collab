const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
// const mysql = require('mysql');

const PORT = 3001;

const app = express();

let initialPath = path.join(__dirname, "public");
app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/home', (req, res) => {
    res.sendFile(path.join(initialPath, "home.html"));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"));
})


app.listen(PORT, () =>{
    console.log(`Server listening at ${PORT}`);
});










// const signupRoute = require("./routes/Signup");
// const loginRoute = require("./routes/Login");

// app.use('/signup', signupRoute);
// app.use('/login', loginRoute);

// app.use('/signup', signupRoute);
// app.use('/login', loginRoute);