# Day 16: Creating a Data Model with Mongoose

Welcome to Day 16 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, you’ll learn how to define a **data model** using **Mongoose**, a key step toward managing structured and reliable data in your application. By creating a schema and model, you’ll ensure consistent data storage and enable easy interaction with your MongoDB database.

## Expected Output 
At the end of **Day 16**, you will have knowledge of **model & schema** and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day16.png)  

## Overview
In this lesson, you’ll:

1. **Learn the basics of Mongoose schemas and models**: Understand how to structure your data.
2. **Create a Student model**: Define rules and validations for student data.
3. **Test your model**: Insert data into the MongoDB database and validate it.  

*Why Mongoose Models?*
Mongoose models act as a bridge between your application and the database. They define the structure of your data, enforce validation rules, and simplify CRUD (Create, Read, Update, Delete) operations.

## Objectives
1. Define a schema for structured data storage using Mongoose.
2. Create and export a Student model for database interactions.
3. Test the model by inserting sample data into MongoDB.

## Concepts in MongoDB and Mongoose
1. What is a Schema?
    - A schema defines the structure of documents in a MongoDB collection.
    - It specifies fields, data types, validation rules, and default values.
    - Example: `studentSchema` defines fields like name, email, and createdAt with their properties.

2. What is a Model?
    - A model is a JavaScript class created using a schema.
    - It provides methods to interact with the MongoDB database, such as `find`, `save`, and `delete`.
    - Example: Student is a model derived from `studentSchema`.


## Key Elements and Functions
1. **module.exports**
    - Allows exporting a module (object, function, or variable) so it can be used in other files.
    - In this case, `module.exports` = Student makes the Student model available for importing elsewhere.

2. **model()**
    - A Mongoose method to create a model from a schema.
    - Syntax: `mongoose.model('ModelName', schema)` associates the schema with the ModelName collection.

3. **schema()**
    - A Mongoose method to create a schema.
    - Syntax: `new mongoose.Schema({ field: type, options })` defines the document structure.

4. **post()**
    - A method in `Express.js` used to define a route for handling HTTP POST requests.
    - Example: `app.post('/add-student', ...)` listens for POST requests to add student records.

5. **Student()**
    - Refers to creating an instance of the Student model.
    - Example: `const student = new Student({...})` creates a new student document.

6. **save()**
    - A method of Mongoose models used to save a document to the database.
    - Example: `student.save()` persists the student instance to the students collection.


## Steps
### Step 1: Create a models Folder
1. Switch to the "Day-16" Branch
    - Switch to the "Day-16" branch by running the following command in the `terminal`
    ```bash
     git checkout Day-16
    ```
2. In your project folder, create a new directory named `models`.
3. Inside the `models` folder, create a new file named `Student.js`.

### Step 2: Define the Student Schema
1. Open the `Student.js` file and add the following code:
    ```javascript
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
    ```

2. Key Elements in the Code:  
    - `name`: String, required to ensure every student has a name.  
    - `email`: String, required, must be unique, prevents duplicate entries.  
    - `createdAt`: Automatically stores the timestamp when the record is created.  

3. Save the file.


### Step 3: Use the Student Model in Your Server
1. Open your `server.js` file.
2. Import the `Student` model:
    ```javascript
    const Student = require('./models/Student');
    ```

3. Add a route to create a dummy student record for testing:
    ```javascript
    // Define a POST route to handle adding a student
    app.post('/add-student', async (req, res) => { // If you are using browser to create a student then call get method app.get()
        try {
            // Create a new instance of the Student model with sample data
            const student = new Student({
                name: 'John Doe',
                email: 'john.doe@example.com'
            });
            await student.save(); // Save the new student to the database
            res.send('Student added successfully!'); // Send a success response to the client
        } catch (error) {
            // Handle any errors that occur during the process
            res.status(500).send('Error adding student: ' + error.message);
        }
    });
    ```

### Step 4: Test the Student Model
1. Start your server:
    ```bash
    node server.js
    ```

2. Use a tool like Postman or your browser to send a POST request to:
    ```bash
    http://localhost:3000/add-student
    ```

3. Verify the following:
    - A new document is created in the students collection in your MongoDB database.
    - The `console` logs indicate a successful database operation.


### Step 5: Handle Schema Validations (Optional)
1. Add more validation rules to your schema to enforce data integrity:
    ```javascript
    const studentSchema = new mongoose.Schema({
        name: { type: String, required: [true, 'Name is required'], minlength: 3 },
        email: { 
            type: String, 
            required: [true, 'Email is required'], 
            unique: true, 
            match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
        },
        createdAt: { type: Date, default: Date.now }
    });
    ```

2. Save and test:
    - Try adding invalid data to see how the validation rules are enforced.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Define Student schema and model with Mongoose"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-16
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-16:main --force
    ```

---

# Fantastic Work! 🎉
You’ve successfully defined a **Student schema** and created a **Mongoose model** to manage structured data. This ensures your database interactions are consistent and reliable. Tomorrow, we’ll dive into **CRUD operations** to bring full functionality to your backend. 🚀
