const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

require ('dotenv/config');

// Must use in tandem with bodyParser
app.use(bodyParser.json());

//Import routes
const courseRoute = require('./routes/api/Course');
const cartRoute = require('./routes/api/CartItem');
const enrollRoute = require('./routes/api/EnrollItem');

// Link /posts to postsRoutes (which links to './routes/posts' where it you have app.get('/')
app.use('/courses', courseRoute);
app.use('/cartCourses', cartRoute);
app.use('/shoppingCourses', enrollRoute);


//Routes
// Type new route in a '/routegoeshere'
app.get('/', (req, res) => {
    res.send("We are home!");
});



//Connect to DB
// To access '.env' file's DB_CONNECTION, simply require ('dotenv/config'), and address it as 'process.env.DB_CONNECTION'
mongoose.connect(process.env.DB_CONNECTION,  
{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to database");
});

// Listen to server
app.listen(3000);