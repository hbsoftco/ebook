const express = require('express');
const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.DB_PORT;

// Controllers
const RateController = require('./app/Controllers/RateController')
const bookController = new RateController();
bookController.index('test');

class Server {
    constructor() {

        const sequelize = new Sequelize(
            process.env.DB_DATABASE,
            process.env.DB_USERNAME,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: process.env.DB_CONNECTION
            });

    }

}

new Server();







