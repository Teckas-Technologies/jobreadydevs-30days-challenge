const express = require('express'); // Import the Express library
const mongoose = require('mongoose'); // Import the mongoose library to interact with MongoDB
const Student = require('./models/Student');

const app = express(); // Create an instance of an Express application

app.use(express.static('public')); // Middleware to serve static files from the "public" folder
app.use(express.json()); // Middleware to parse JSON request bodies

// Define the MongoDB connection URI
// Replace 'localhost:27017/student-management' with your MongoDB URI (local or cloud-based)
const mongoURI = 'mongodb://localhost:27017/student-management';

// Connect to the MongoDB database using mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...')) // If the connection is successful, log a confirmation message
    .catch(err => console.error('MongoDB connection error:', err)); // If the connection fails, log an error message with the details


app.post('/students', async (req, res) => {
    try {
        const { name, email } = req.body; // Extract name and email from the request body
        const student = new Student({ name, email }); // Create a new student instance
        await student.save(); // Save the student to the database
        res.status(201).json({ message: 'Student created successfully', student }); // Respond with success
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors and send a response
    }
});

app.get('/students', async (req, res) => {
    try {
        const students = await Student.find(); // Retrieve all student records
        res.status(200).json(students); // Send the list of students
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors and send a response
    }
});

app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id); // Retrieve a specific student record using id
        if (!student) return res.status(404).json({ error: 'Student not found' }); // If the id not found
        res.status(200).json(student); // Send the student record
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/students/:id', async (req, res) => {
    try {
        const { name, email } = req.body; // Extract updated data from the request body
        const student = await Student.findByIdAndUpdate(
            req.params.id, // Find the student by ID
            { name, email }, // Update the fields
            { new: true, runValidators: true } // Return the updated document and validate fields
        );
        if (!student) return res.status(404).json({ error: 'Student not found' }); // Handle not found
        res.status(200).json({ message: 'Student updated successfully', student }); // Respond with success
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
});

app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id); // Find the student by id and delete the record
        if (!student) return res.status(404).json({ error: 'Student not found' });
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });  // handle the error while delete the student record
    }
});

// Route to handle GET /about
app.get('/about', (req, res) => {
    // Respond with a message
    res.send('This is the Student Management App API!');
});

// Middleware to handle undefined routes
app.use((req, res) => {
    // Respond with a 404 status and a custom message
    res.status(404).send('Route not found');
});

// Serve the index.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Define the port for the server to listen on
const PORT = 3000;

// Start the server and log a message to the console
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});