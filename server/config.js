const setup = () => {
    const { port } = require('../env')

    process.env.PORT = port
}

module.exports = setup
