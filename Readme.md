# Day 10: Express.js Basics + Creating Routes

Welcome to Day 10 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, you’ll start building a robust backend with **Express.js**, a lightweight and flexible web framework for Node.js. By the end of this lesson, you’ll be able to set up and test basic API routes to handle requests and responses for your application.

## Overview
In this lesson, you’ll:

1. **Learn Express.js basics**: Understand its role in routing and handling requests.
2. **Create a /students route**: Serve dynamic data through an API.
3. **Handle custom and invalid routes**: Add flexibility and error handling to your application.  

Why Express.js?  
Express.js simplifies the process of creating and managing routes, making it the go-to framework for backend development in Node.js. Mastering it is a key step in building dynamic, API-driven web applications.

## Objectives
1. Understand how `Express.js` handles routing and middleware.
2. Create API routes for serving dynamic data.
3. Learn to handle invalid routes gracefully.

## Steps

### Step 1: Install Express.js (if not already installed)
1. Switch to the "Day-10" Branch
    - Switch to the "Day-10" branch by running the following command in the terminal
    ```bash
     git checkout Day-10
    ```

2. Open your `terminal` and navigate to your project directory.
3. If `Express.js` is not installed, add it as a dependency:
    ```bash
    npm install express
    ```

4. Open the `package.json` file to verify that express is listed as a dependency.


### Step 2: Update Your server.js File
1. Open `server.js` in your project folder.
2. Modify it to include a `/students` route:
    ```javascript
    const express = require('express');
    const app = express();

    // Middleware to serve static files
    app.use(express.static('public'));

    // Dummy data for students
    const students = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
    ];

    // Route to handle GET /students
    app.get('/students', (req, res) => {
        res.json(students);
    });

    // Start the server
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    ```

### Step 3: Test the /students Route
1. Start the server:
    ```bash
    node server.js
    ```

2. Visit the /students route:
    - Open your browser to navigate to:
    ```bash
    http://localhost:3000/students
    ```

3. Verify the response:
    - You should see the dummy student data displayed as a `JSON` array.


### Step 4: Add Another Route (Optional)
1. Add a new route to serve a custom response. For example, an `/about` route:
    ```javascript
    app.get('/about', (req, res) => {
        res.send('This is the Student Management App API!');
    });
    ```

2. Restart the server and test by visiting:
    ```bash
    http://localhost:3000/about
    ```

### Step 5: Handle a Not Found Route
1. Add `middleware` to handle invalid routes:
    ```javascript
    app.use((req, res) => {
        res.status(404).send('Route not found');
    });
    ```

2. Restart the server and test by visiting a non-existent route, e.g.:
    ```bash
    http://localhost:3000/invalid
    ```
    - You should see the message: "Route not found."


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Add Express.js routes including GET /students"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-10
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-10:main --force
    ```

---

## Amazing Work! 🎉
You’ve successfully created your first API routes with **Express.js**. This is a major milestone in backend development! Next, we’ll explore handling dynamic data with **POST** requests to allow users to add data to your app. Keep up the great work, and see you in the next lesson! 🚀
