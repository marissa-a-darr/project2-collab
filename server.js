const express = require("express");

const PORT = 3001;

const app = express();

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