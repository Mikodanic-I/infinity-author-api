const express = require('express')
const app = express()

/**
 * APP ROUTES
 */
app.use('/', require('./routes'))

module.exports = app;

