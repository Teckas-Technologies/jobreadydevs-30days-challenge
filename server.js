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