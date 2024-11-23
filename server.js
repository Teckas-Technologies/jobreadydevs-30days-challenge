
const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a basic route with text
// app.get('/', (req, res) => {
//     res.send('Welcome to the Student Management App!');
// });

// Define a basic route with html template
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Dummy data for students
const students = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com' }
];

// Route to handle GET /students
app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id); // Parse ID from request parameters
    const student = students.find(s => s.id === studentId); // Find student by ID

    if (student) {
        res.json(student); // Return the student data
    } else {
        res.status(404).json({ error: 'Student not found' }); // Return a 404 error if not found
    }
});

// Route to handle GET /about
app.get('/about', (req, res) => {
    res.send('This is the Student Management App API!');
});

// Route to handle GET unwanted paths
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
