const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const courses = require('./routes/api/Course')
const cartRoute = require('./routes/api/CartItem')
const enrollRoute = require('./routes/api/EnrollItem')
const completedRoute = require('./routes/api/Completed')


const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())
app.use(cors())

//DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err)

    )

// Routes
app.use('/api/courses', courses)
app.use('/api/cart', cartRoute)
app.use('/api/enrolled', enrollRoute)
app.use('/api/completed', completedRoute)
// Open on port process.env.PORT or 5000
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// App use the port specified above, log what port we're on.
app.listen(port, () => console.log(`Server started on port ${port}`))