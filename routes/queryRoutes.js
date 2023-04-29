const express = require('express');
const router = express.Router();
const { filterQueries } = require('../controllers/queryController');
const { update } = require('../models/employeeModel');

router.get('/employees', filterQueries);

module.exports = router;
