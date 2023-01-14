const express = require("express");
const app = express();
const PORT = 3001;

const signupRoute = require("./routes/Signup");
const loginRoute = require("./routes/Login");

app.use('/signup', signupRoute);
app.use('/login', loginRoute);



app.listen(PORT, () =>{
    console.log(`Server listening at ${PORT}`);
})