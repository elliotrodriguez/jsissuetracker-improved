const express = require('express');
const config = require('../config/');
const passwords = require('../config/passwords')
const mongoose = require('mongoose');
const Issue = require('../src/model');

let app = express();

const {DB_USER_NAME, DB_HOST_NAME, DB_PORT, DB_NAME} = config;

const connString = `mongodb://${DB_USER_NAME}:${passwords.DB_PASSWORD}@${DB_HOST_NAME}:${DB_PORT}/${DB_NAME}`

mongoose.connect(connString, {useNewUrlParser : true}, () => {
    console.log('connected')
})

let db = mongoose.connection;

db.on('error', console.error.bind('an error occurred connecting to MongoDB'));

db.once('open', () => {
    console.log('database connected')
})

app.listen(config.APP_PORT, () => {
    const issue = new Issue.Issue({
        description: 'From node',
        severity: 'Low',
        assignedTo: 'a person',
        status: 'Open'
    });

    console.log(`app listening on ${config.APP_PORT}`);
})

