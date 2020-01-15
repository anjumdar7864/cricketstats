const userRoute = require('../routes/usersRoute')
const rolesRoute = require('../routes/rolesRoute')


module.exports = function (app) {
    app.use('/api/user', userRoute);
    app.use('/api/roles', rolesRoute);
}