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

## MongoDB Atlas instructions
* 'api/routes/todoRoutes.js' creates get and post requests at /logins endpoint
* 'api/controllers/todoController.js' contains list, create, update, and delete functions
* 'api/models/todoModel.js' contains the schema for a login, user/password/email
* 'config/db.js' contains the connection to MongoDB Atlas through Mongoose (connection url stored in ./keys)

* When calls are made to the RESTful API, updates and changes are reflected accordingly to MongoDB Atlas because we have connected.

MongoDB Atlas log-in E-mail:
```
cli.mate.mongodb@gmail.com
```

## Google Maps Matrix API
To use, navigate to the following link:
```
https://maps.googleapis.com/maps/api/distancematrix/json?destinations=New%20York%20City%2C%20NY&origins=Washington%2C%20DC&key=AIzaSyDbNa6oUwctkBvSKZixHrtW_IE3zrABBJA
```
While integration is not completed with the front-end, the matrix calculation is functional on the backend and can be used to calculate distance between two points if hard-coded. The above link is a reflection of our current hard-coded value, which can be translated to a Carbon Performance Index (CPI) value if we connected it to user-input.

## Demonstration of Functionality
### Activity Reporting:

![Alt Text](https://github.com/absandell/Cli-Mate/blob/main/assets/Fall21_11249_Cli-Mate_1.gif)

### Logging in using Google OAuth:

![Alt Text](https://github.com/absandell/Cli-Mate/blob/main/assets/Fall21_11249_Cli-Mate_2.gif)

### Page Design and Responsiveness
![Alt Text](https://github.com/absandell/Cli-Mate/blob/main/assets/Fall21_11249_Cli-Mate_3.gif)

## Team Product Presentation
[![Alt Text[ (https://youtu.be/tdaoeRC6cGg/0.jpg)](https://youtu.be/tdaoeRC6cGg)
