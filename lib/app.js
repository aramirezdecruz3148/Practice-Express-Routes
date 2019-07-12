const express = require('express');
const app = express();
const thingRoutes = require('../lib/routes/things');

app.use(express.json());
app.use('api/v1/things', thingRoutes);

module.exports = app;