const express = require('express')
const router = express.Router()

const routeNames = ['Test']

// Setup all routers
routeNames.forEach(name => {
    const setup = require(`./${name}`) // Get a function for setting up the router
    const controller = require(`../controllers/${name}`) // Pass the controller to the router setup

    setup({ router, controller }) // Pass values as an object so later on optional values can come in...
})

module.exports = router

