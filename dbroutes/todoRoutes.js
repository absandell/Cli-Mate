'use strict';

module.exports = function(app) {
    var loginList = require('../controllers/todoController.js');


//loginList routes

//get & post req for /logins endpoints
    app.route("/logins")
    .get(loginList.listAllTodos)
    .post(loginList.createNewLogin);

    app.route("/login/:id")
    .put(loginList.updateLogin)
    .delete(loginList.deleteLogin);

}