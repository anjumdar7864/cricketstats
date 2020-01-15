const cricRoute = require('../routes/cricRoute')

module.exports = function (app) {
    app.use('/api/cricket', cricRoute);
}