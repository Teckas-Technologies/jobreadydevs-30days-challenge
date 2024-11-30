const mongoose = require('mongoose');

// Define the schema for student data
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Student name is required
    email: { type: String, required: true, unique: true }, // Email is required and must be unique
    createdAt: { type: Date, default: Date.now } // Automatically set the creation date
});

// Create a Mongoose model based on the schema
const Student = mongoose.model('Student', studentSchema);

// Export the model for use in other files
module.exports = Student;