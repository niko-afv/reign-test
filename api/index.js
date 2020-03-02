'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const cron = require('node-cron')
const port = 3800;
const HNService = require('./services/hacker-news-service')


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db:27017/reign-test-db')
    .then(() => {
        console.log("MongoDB Connected")
        app.listen(port, () => {
            console.log("server is running ( http://localhost:3800 )");
            HNService.storeNews()
        });
    })
    .catch(err => console.log(`DB Error: ${err}`));