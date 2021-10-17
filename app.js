const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000, ()=> {
    console.log('app now listening for requests on port 3000')
});