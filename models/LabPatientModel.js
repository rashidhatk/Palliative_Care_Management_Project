const mongoose = require("mongoose");

const LabpatientSchema = new mongoose.Schema({
  RegNo: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  addingDate: {
    type: Date,
    required: true,
  },
  DoctorName: {
    type: String,
    required: true,
  },
  
  test_result: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'test', // Reference to the test result model
  }]
});

module.exports = mongoose.model("LabPatient", LabpatientSchema);
