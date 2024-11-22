# Day 11: Working with JSON Data + Building the Student API

Welcome to Day 11 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll create a fully functional **Student API** to serve JSON data. This will allow your frontend to fetch and display dynamic student information, bringing your application closer to real-world functionality.

## Overview
In this lesson, you’ll:

1. **Learn to serve JSON data**: Use Express.js to send structured data from the backend.
2. **Build API endpoints**: Create routes to fetch all students and individual student details.
3. **Integrate with the frontend**: (Optional) Dynamically load data from your API into the application.  

Why JSON?
JSON (JavaScript Object Notation) is the most commonly used data format for APIs. Understanding how to work with JSON is a core skill for any developer building modern web applications.

## Objectives
1. Create an API to serve student data in JSON format.
2. Implement dynamic routes to fetch individual student records.
3. Prepare for frontend-backend integration with real-time data retrieval.

## Steps
### Step 1: Update the /students Endpoint
1. Switch to the "Day-11" Branch
    - Switch to the "Day-11" branch by running the following command in the terminal
    ```bash
     git checkout Day-11
    ```
    
2. Open your `server.js` file.
3. Ensure you have dummy student data or add the following:
    ```javascript
    const students = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com' }
    ];
    ```

4. Modify the `/students` route to return the student data as JSON:
    ```javascript
    app.get('/students', (req, res) => {
        res.json(students);
    });
    ```

5. Save the file.


### Step 2: Test the /students Endpoint
1. Start your server:
    ```bash
    node server.js
    ```

2. Use a browser or API testing tool like Postman to send a GET request to:
    ```bash
    http://localhost:3000/students
    ```

3. Verify that the response is the student data in JSON format:
    ```json
    [
        { "id": 1, "name": "John Doe", "email": "john.doe@example.com" },
        { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com" },
        { "id": 3, "name": "Sam Wilson", "email": "sam.wilson@example.com" }
    ]
    ```

### Step 3: Add a Route to Serve a Single Student
1. Add a new route to retrieve a student by their ID:
    ```javascript
    app.get('/students/:id', (req, res) => {
        const studentId = parseInt(req.params.id); // Parse ID from request parameters
        const student = students.find(s => s.id === studentId); // Find student by ID

        if (student) {
            res.json(student); // Return the student data
        } else {
            res.status(404).json({ error: 'Student not found' }); // Return a 404 error if not found
        }
    });
    ```

2. Save the file and restart the server:
    ```bash
    node server.js
    ```

### Step 4: Test the /students/:id Endpoint
1. Send a `GET` request to:
    ```bash
    http://localhost:3000/students/1
    ```

2. Verify the response:
    ```json
    { "id": 1, "name": "John Doe", "email": "john.doe@example.com" }
    ```

3. Test an invalid ID (e.g., /students/999) and confirm that the server responds with:
    ```json
    { "error": "Student not found" }
    ```


### Step 5: Integrate with the Frontend - (Optional)
1. Open `script.js` and add a fetch request to retrieve the student data:
    ```javascript
    fetch('/students')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the fetched student data
        })
        .catch(error => {
            console.error('Error fetching students:', error);
        });
    ```

2. Save the file and open your browser’s `console` to verify that the student data is being fetched.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Add JSON data endpoints for students"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-11
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-11:main --force
    ```

---

## Great Job! 🎉
You’ve built a fully functional Student **API** that serves JSON data and handles dynamic routes. This is a critical step in building interactive, data-driven applications. Keep up the amazing work—tomorrow, we’ll add the ability to create and update data via **POST** and **PUT** requests. 🚀
































# Day 11: Working with JSON Data + Building the Student API

Welcome to Day 11 of the Job-Ready Devs 30-Day Challenge! Today, you’ll focus on serving JSON data from your backend to your frontend. You’ll create a dedicated API endpoint to retrieve a list of students in JSON format, laying the groundwork for dynamic frontend integration.

## Objectives
1. Understand how to serve JSON data from the backend using Express.js.
2. Build an API endpoint to serve a list of students in JSON format.
3. Prepare the backend to support dynamic data retrieval for the frontend.

---

## Steps

### Step 1: Update the `/students` Endpoint
1. Open your `server.js` file.
2. Ensure you have dummy data for students, or add the following if missing:
    ```javascript
    const students = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com' }
    ];
    ```

3. Modify the /students route to send the student data as a JSON response:
    ```javascript
    app.get('/students', (req, res) => {
        res.json(students);
    });
    ```

### Step 2: Test the /students Endpoint
1. Start your server:
    ```bash
    node server.js
    ```

2. Open your browser or use a tool like Postman to send a `GET` request to:
    ```plaintext
    http://localhost:3000/students
    ```

3. Verify that the student data is returned in JSON format:
    ```json
    [
        { "id": 1, "name": "John Doe", "email": "john.doe@example.com" },
        { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com" },
        { "id": 3, "name": "Sam Wilson", "email": "sam.wilson@example.com" }
    ]
    ```

### Step 3: Add a Route to Serve a Single Student
1. Create a new route to retrieve a single student by their ID:
    ```javascript
    app.get('/students/:id', (req, res) => {
        const studentId = parseInt(req.params.id);
        const student = students.find(s => s.id === studentId);

        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    });
    ```

2. Save the file and restart the server.

### Step 4: Test the /students/:id Endpoint
1. Use your browser to send a GET request to:
    ```plaintext
    http://localhost:3000/students/1
    ```

2. You should see the JSON data for the student with ID 1:
    ```json
    { "id": 1, "name": "John Doe", "email": "john.doe@example.com" }
    ```

    - Test an invalid ID (e.g., http://localhost:3000/students/999) and verify that a 404 error is returned with the appropriate message.


### Step 5: Handle JSON Data with Frontend Integration (Optional)
1. Update your `script.js` to fetch the student list dynamically:
    ```javascript
    fetch('/students')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the student data for testing
        })
        .catch(error => {
            console.error('Error fetching students:', error);
        });
    ```

    - Test by running the server and checking the browser console for the fetched data.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Add JSON data endpoints for students"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-11
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-11:main --force
    ```

## Great job! 🎉
You’ve successfully created a student API that serves JSON data to the frontend. This is a crucial step in integrating dynamic data into your application. Keep up the excellent progress, and get ready for more advanced features tomorrow!
