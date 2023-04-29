const express = require('express');
const app = express();

const router = require('../routes/employeeRoutes');
const router1 = require('../routes/queryRoutes');

//Router Middlewares
app.use(express.json());

app.use('/api', router);
app.use('/api', router1);

module.exports = app;
