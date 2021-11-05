const mongoose = require("mongoose");

var uri = "mongodb+srv://climateAdmin:climateAdminpassword@climate-cluster1.47ecp.mongodb.net/user?retryWrites=true&w=majority";

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