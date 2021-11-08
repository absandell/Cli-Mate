# Cli-Mate
Cli-Mate is a carbon-emissions tracking app. Users can create profiles to view their to-date carbon savings and calculate their daily savings based on distance walked, bussed, or biked. 

## Project setup
```
npm install
```

## Compiles and hot-reloads Vue Server for development
```
npm run serve
```

## Compiles and minifies files for production build
First, run:
```
npm run build
```
Next, copy the files within the build folder:
* CSS
* JS
* favicon.ico
* index.html

Paste them in the folder /app/views.
To run Express / Vue Production Server, see below.

## Lints and fixes files
```
npm run lint
```

## How to compile Express / Vue Production Server
```
node app.js
```

## How to run tests
```
npm run test
```

##MongoDB Atlas instructions ('api' folder)
* 'api/routes/todoRoutes.js' creates get and post requests at /logins endpoint
* 'api/controllers/todoController.js' contains list, create, update, and delete functions
* 'api/models/todoModel.js' contains the schema for a login, user/password/email
* 'config/db.js' contains the connection to MongoDB Atlas through Mongoose (connection url stored in ./keys)

* When calls are made to the RESTful API, updates and changes are reflected accordingly to MongoDB Atlas because we have connected.

MongoDB Atlas log-in E-mail:
```
cli.mate.mongodb@gmail.com
```
