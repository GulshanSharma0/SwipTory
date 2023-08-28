require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const userRouter = require('./Router/userRoutes.js');
const storiesRouter = require('./Router/storiesRoutes.js');
const port = process.env.PORT;
require('./DB/db');

   
app.use(cookieParser());
app.use('*',cors({
    origin:true,
    credentials:true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', userRouter);
app.use('/stories',storiesRouter);



// server will start at 3000
app.listen(port, () => {
    console.log(`Example app listening on port 3000`);
})

