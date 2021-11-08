const mongoose = require("mongoose");
const keys = require('./keys');

var uri = keys.mongoose.uri;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri,options).then(() => {
    console.log("DB connection established!");
},
err => {
    {
        console.log("Errror connecting to DB:", err);
    }
});