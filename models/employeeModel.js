var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('employee', employeeSchema);
module.exports = User;
