const Login = require("../models/todoModel");

//define cntrlr fxns

//listAllLogins fxn - list all logins
exports.listAllTodos = (req,res) => {
    Login.find({}, (err, login) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).json(login);
    });
};

//createNewLogin fxn -- create new login
exports.createNewLogin = (req,res) => {
    let newLogin = new Login ({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    newLogin.save((err, login) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(201).json(login);
    })
}

//updateLogin fxn - update login by id (not sure what they mean by 'by id')
exports.updateLogin = (req, res) => {
    Login.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, (err,login) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(login)
    })
}

//deleteLogin fxn - delete login by id
exports.deleteLogin = async (req,res) => {
    await Login.deleteOne({_id:req.params.id}, (err) => {
        if(err) {
            return res.status(404).send(err);
        }
        res.status(200).json({message:"Login successfully deleted"});
    });
};