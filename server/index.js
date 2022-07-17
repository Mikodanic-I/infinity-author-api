require('./config')() // Setup env variables to process.env from env.js

const app = require('../app');

// Create HTTP Server
const server = require('http').createServer(app)
server.listen(process.env.PORT)
