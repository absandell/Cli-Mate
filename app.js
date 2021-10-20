const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

// Set up view engine
app.set('view engine', 'ejs');

app.use('/auth', authRoutes)

// Create home route
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, ()=> {
    console.log('app now listening for requests on port 3000')
});