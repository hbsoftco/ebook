const express = require('express');
const app = express();
const port = process.env.DB_PORT;

const Sequelize = require('sequelize');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifing the middleware
app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});



// Controllers
const RateController = require('./app/Controllers/RateController')
const bookController = new RateController();
bookController.index('test');

class Server {

    constructor() {

        this.initDB();
        this.initExpressMiddleware();
        this.initRoutes();
        this.start();

    }

    start() {
        // Creating an express http server
        app.listen(port, () => console.log(`App listening on port ${port}!`));
    }

    initExpressMiddleware() {
        // Attaching body parser middlware
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        app.use(bodyParser.json())
    }

    initDB() {
        const sequelize = new Sequelize(
            process.env.DB_DATABASE,
            process.env.DB_USERNAME,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: process.env.DB_CONNECTION
            });
    }

    initRoutes() { }

}

new Server();







