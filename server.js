// Import the Express library
const express = require('express');

// Create an instance of an Express application
const app = express();

// Middleware to serve static files from the "public" folder
app.use(express.static('public'));

// Define a basic route for the root URL
// app.get('/', (req, res) => {
//     res.send('Welcome to the Student Management App!');
// });

// Array of student objects with id, name, and email
const students = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com' }
];

// Route to get all students
app.get('/students', (req, res) => {
    res.json(students); // Send the array of students as a JSON response
});

// Route to get a student by ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id); // Convert the id from the request parameter to an integer
    const student = students.find(s => s.id === studentId); // Search for the student with the matching id

    if (student) {
        res.json(student); // Send the matched student data as JSON
    } else {
        res.status(404).json({ error: 'Student not found' }); // Send a 404 response if no student is found
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