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
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
];

// Route to handle GET /students
app.get('/students', (req, res) => {
    res.json(students);
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