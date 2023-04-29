const express = require('express');
const router = express.Router();
const {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');
const { update } = require('../models/employeeModel');

router.post('/employee', createEmployee);
router.get('/employee/:id', getEmployee);
router.put('/employee/:id', updateEmployee);
// router.delete('/employee/:id', deleteEmployee);
router.delete('/employee', deleteEmployee);

module.exports = router;
