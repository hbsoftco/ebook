const express = require('express');
const Sequelize = require('sequelize');
const cors = require("cors");
const bodyParser = require('body-parser')
require('dotenv').config();

class Server {

    app = express();
    port = process.env.DB_PORT;

    constructor() {

        this.initDB();
        this.initMiddlewares(this.app);
        this.initRoutes(this.app);
        this.start(this.port, this.app);

    }

    start(port, app) {
        // Creating an express http server
        app.listen(port, (err) => {
            // if (!err) console.log(`App listening on port ${port}!`);
            if (!err) console.log(`Your server available at http://localhost:${port}`);
            else console.log(err)
        });
    }

    initMiddlewares(app) {
        // Attaching body parser middlware
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        app.use(bodyParser.json())
        // CORS
        app.use(cors());
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

    initRoutes(app) {
        require('./routes/api')(app);
    }

}

new Server();
