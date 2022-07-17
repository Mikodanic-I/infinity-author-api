const setup = ({ router, controller }) => {
    router.get('/test', controller.test)
}

module.exports = setup
