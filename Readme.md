# Day 17: CRUD Operations (Create, Read, Update, Delete) with Express and MongoDB

Welcome to Day 17 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, you’ll implement **CRUD operations** in your backend to manage student data. By building these API routes, you’ll unlock the ability to create, read, update, and delete data dynamically in your application.

## Overview
In this lesson, you’ll:

1. **Learn CRUD operations**: Understand how to manage data in a full-stack application.
2. **Build CRUD API routes**: Use Express.js and MongoDB for seamless backend functionality.
3. **Test APIs with Postman**: Get hands-on experience using Postman, a popular API testing tool.  

*Why CRUD Operations?*
CRUD operations form the backbone of any application. Whether it’s saving a user’s profile, displaying a list of items, or updating preferences, CRUD makes it possible to manage data effectively.

## Objectives
1. Build API routes for `creating`, `reading`, `updating`, and `deleting` student data.
2. Use Postman to test API endpoints and verify their functionality.
3. Prepare your backend for seamless frontend integration.

## Understanding APIs

### What is an API?
1. **API (Application Programming Interface)** is a set of rules that allows one application to interact with another.
2. It acts as a bridge between the frontend (what users see) and the backend (server/database).
3. For example, when you submit a form, the frontend sends data to the backend API, which processes it and sends back a response.

### Methods in an API
- APIs use HTTP methods to define the type of operation being performed. Here are the common methods:

1. **GET**: Fetches data from the server.
    - Example: Getting a list of students or details of a specific student.

2. **POST**: Sends data to the server to create a new resource.
    - Example: Adding a new student to the database.

3. **PUT**: Updates an existing resource entirely.
    - Example: Updating a student's name and email.

4. **PATCH**: Partially updates an existing resource. (Similar to PUT but updates only specified fields.)
5. **DELETE**: Removes a resource from the server.
    - Example: Deleting a student's record from the database.


### What is **async** and **await**?
1. **async**
    - Marks a function as asynchronous, meaning it can handle operations that take time (like fetching data from a server) without blocking other code.
    - Example: Declaring a function with `async` allows using `await` inside it.

2. **await**
    - Pauses the execution of an async function until a promise is resolved or rejected.
    - Example: `await student.save()` ensures the student is saved before the next line executes.


## Steps
### Step 1: Set Up the CRUD API Routes
1. Switch to the "Day-17" Branch
    - Switch to the "Day-17" branch by running the following command in the `terminal`
    ```bash
     git checkout Day-17
    ```
2. Open your `server.js` file.
3. Import the Student model:
    ```javascript
    const Student = require('./models/Student');
    ```

4. Use the middleware to parse the JSON from request
    ```javascript
    app.use(express.json()); // Middleware to parse JSON request bodies
    ```

5. Add the following routes:

**Create (POST) a New Student**
1. Add a POST `/students` route:
    ```javascript
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
    ```

**Read (GET) All Students**
1. Add a GET `/students` route:
    ```javascript
    app.get('/students', async (req, res) => {
        try {
            const students = await Student.find(); // Retrieve all student records
            res.status(200).json(students); // Send the list of students
        } catch (error) {
            res.status(500).json({ error: error.message }); // Handle errors and send a response
        }
    });
    ```

**Read (GET) a Single Student by ID**
1. Add a GET `/students/:id` route:
    ```javascript
    app.get('/students/:id', async (req, res) => {
        try {
            const student = await Student.findById(req.params.id); // Retrieve a specific student record using id
            if (!student) return res.status(404).json({ error: 'Student not found' }); // If the id not found
            res.status(200).json(student); // Send the student record
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    ```

**Update (PUT) a Student by ID**
1. Add a PUT `/students/:id` route:
    ```javascript
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
    ```

**Delete (DELETE) a Student by ID**
1. Add a DELETE `/students/:id` route:
    ```javascript
    app.delete('/students/:id', async (req, res) => {
        try {
            const student = await Student.findByIdAndDelete(req.params.id); // Find the student by id and delete the record
            if (!student) return res.status(404).json({ error: 'Student not found' });
            res.status(200).json({ message: 'Student deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });  // handle the error while delete the student record
        }
    });
    ```

### Step 2: Install and Use Postman to Test API Routes
**What is Postman?**
- Postman is a tool that allows developers to send HTTP requests to APIs, test responses, and debug backend functionality. It’s an essential tool for API development.
  
**How to Install Postman**
1. Download Postman:
    - Visit [Postman’s official website](https://www.postman.com/downloads/) and download the app for your operating system.  

2. Install Postman:
    - Follow the installation instructions for your OS.
    - Open the app once installed.

**How to Use Postman to Test APIs**
1. Start Your Server:
    ```bash
    node server.js
    ```

2. Create a New Request:
    - Open `Postman` and click `New` > `Request`.
    - Choose a request type (e.g., GET, POST, PUT, DELETE).

3. Set the Endpoint:
    - Enter the endpoint URL (e.g., http://localhost:3000/students).

4. Send Data for POST/PUT Requests:
    - Go to the Body tab.
    - Select raw and set the data format to JSON.
    - Add the JSON data (e.g., for a POST request):
    ```json
    {
        "name": "Jane Doe",
        "email": "jane.doe@example.com"
    }
    ```

5. Send the Request:
    - Click the Send button and view the response in the bottom pane.  

6. Verify Results:
    - Check the status code (e.g., `200` OK or `201` Created).
    - Confirm the response matches your expectations.

### Step 3: Test Each Route
1. **POST /students**: Create a new student.
2. **GET /students**: Retrieve all students.
3. **GET /students/:id**: Fetch a specific student by their ID.
4. **PUT /students/:id**: Update a student’s details.
5. **DELETE /students/:id**: Delete a student.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Add CRUD API routes for student data"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-17
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-17:main --force
    ```

# Fantastic Work! 🎉

You’ve implemented full **CRUD operations** and learned to test APIs with `Postman`. This is a crucial step toward mastering backend development. Next, we’ll focus on integrating these APIs with the frontend for a seamless user experience. 🚀
