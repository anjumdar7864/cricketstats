const mediaRoute = require('../routes/mediaRoute')

module.exports = function (app) {
    app.use('/api/media', mediaRoute);
}