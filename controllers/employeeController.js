const Employee = require('../models/employeeModel');

//Registering Employee into database
const createEmployee = async (req, res) => {
  try {
    // Write a code here to store Employee data
  } catch (err) {
    res.status(500).json({ error: 'Failed to create employee' });
  }
};

//Get Employee From a Particular id
const getEmployee = async (req, res) => {
  try {
    // Write a code here to get Employee from a Particular id
  } catch (err) {
    res.status(500).json({ error: 'Failed to get employee details' });
  }
};

//Updating Employee
const updateEmployee = async (req, res) => {
  try {
    //Write a code here for updating Employee details using 'PUT' request
  } catch (err) {
    res.status(500).json({ error: 'Failed to update employee details' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    //Write a code here for Deleting all the employees whose salary is greater than 10000
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete employees' });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
