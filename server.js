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

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});