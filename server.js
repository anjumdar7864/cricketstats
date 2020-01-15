const express = require('express');
const app = express();
require('express-async-errors');
const error = require('./middlewares/promisesErrorHandler');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const compression = require('compression');
const morgan = require('morgan');

app.use(compression());
app.use('/public', express.static('public'));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

require('./app/users/routesDefinations/userRouteDef')(app);
require('./app/media/routesDefinations/mediaRoutesDefs')(app);
require('./app/cric/routesDefinations/cricRoutesDefs')(app);



app.use(error); //this is the error handler for all promise rejections in the server.

mongoose
  .connect(config.get('dbConnection'), { useCreateIndex: true, useNewUrlParser: true })
  .then(() => {
    console.log('connected to the db......');
  })
  .catch(err => {
    console.log('Érror .....', err.message);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`We are in ${config.get('mode')} mode!`);
  console.log(`listening port ${port}`);
});
