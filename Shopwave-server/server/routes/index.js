const express = require('express');

const router = express.Router();

const pingRoutes = require('./ping');
const healthCheckRoutes = require('./health-check');
const apiSpecRoutes = require('./api-spec');
const shopping = require('./product');

pingRoutes(router);
healthCheckRoutes(router);
apiSpecRoutes(router);
shopping(router);

module.exports = router;
