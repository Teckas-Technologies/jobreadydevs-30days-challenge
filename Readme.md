# Day 19: Error Handling and Validation

Welcome to Day 19 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll focus on making your application more robust by adding error handling and validation to your backend. These techniques ensure your application behaves predictably, even when users provide incorrect inputs or unexpected issues occur.

## Expected Output 
At the end of **Day 19**, you will have knowledge of **Error handling and validation** and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day19.png) 

## Objectives
1. Add validation rules to the Student schema to enforce data integrity.
2. Implement error handling in Express routes to manage invalid inputs gracefully.
3. Provide clear feedback to the frontend for better user experience.

## Why Are Error Handling and Validation Important?

**Data Integrity**:
- Validation ensures that only valid data is stored in your database. For example, a valid student must have a unique email address and a name with at least 3 characters.
- This prevents bad or incomplete data from corrupting your database.

**Improved User Experience**:

- Meaningful error messages help users understand what went wrong and how to fix it.
- For instance, instead of a generic "Error occurred" message, inform users if an email is already in use.

**Security**:
- Proper error handling prevents sensitive data (like server logs or database details) from being exposed to users.
- It ensures attackers can’t exploit your application through invalid or malicious inputs.

**Maintainability**:
- With centralized error handling, debugging and fixing issues become much easier, saving you time and effort.


## Steps
### Step 1: Update the Student Schema with Validation
1. Switch to the "Day-19" Branch
    - Switch to the "Day-19" branch by running the following command in the `terminal`
    ```bash
     git checkout Day-19
    ```

2. Open the `models/Student.js` file.
3. Add validation rules to ensure valid input:
    ```javascript
    const studentSchema = new mongoose.Schema({
        name: { 
            type: String, 
            required: [true, 'Name is required'], 
            minlength: [3, 'Name must be at least 3 characters long'] 
        },
        email: { 
            type: String, 
            required: [true, 'Email is required'], 
            unique: true, 
            match: [/^\S+@\S+\.\S+$/, 'Invalid email format'] 
        },
        createdAt: { type: Date, default: Date.now }
    });
    ```

4. Explanation of Validation Rules:
- `required`: Ensures that the field cannot be empty.
- `minlength`: Enforces a minimum length for strings (e.g., name must be at least 3 characters).
- `unique`: Prevents duplicate entries for a field (e.g., no two students can have the same email).
- `match`: Ensures that the value matches a specific pattern (e.g., a valid email format).

5. Save the file.

### Step 2: Add Validation to the POST Route
1. Open `server.js` and update the POST `/students` route to handle validation errors:
    ```javascript
    app.post('/students', async (req, res) => {
        try {
            const { name, email } = req.body;
            const student = new Student({ name, email });
            await student.save();
            res.status(201).json({ message: 'Student created successfully', student });
        } catch (error) {
            if (error.name === 'ValidationError') {
                const errors = Object.values(error.errors).map(err => err.message);
                res.status(400).json({ errors });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    });
    ```

2. How It Works:
- If a validation error occurs, the code extracts error messages and sends them back to the frontend with a 400 Bad Request status.
- Other unexpected errors return a generic 500 Internal Server Error.

### Step 3: Add Validation to the PUT Route
1. Update the PUT `/students/:id` route to validate data when updating:
    ```javascript
    app.put('/students/:id', async (req, res) => {
        try {
            const { name, email } = req.body;
            const student = await Student.findByIdAndUpdate(
                req.params.id,
                { name, email },
                { new: true, runValidators: true }
            );
            if (!student) return res.status(404).json({ error: 'Student not found' });
            res.status(200).json({ message: 'Student updated successfully', student });
        } catch (error) {
            if (error.name === 'ValidationError') {
                const errors = Object.values(error.errors).map(err => err.message);
                res.status(400).json({ errors });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    });
    ```

2. Explanation:
- The `runValidators`: true option ensures that validation rules are applied during updates.

### Step 4: Add Global Error Handling Middleware (Optional)
1. Add a global error handler at the end of all route definitions:
    ```javascript
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ error: 'Something went wrong!' });
    });
    ```

2. This ensures that all unhandled errors are caught and logged, and a generic error response is sent to the user.


### Step 5: Test Error Handling and Validation
1. Start your server:
    ```bash
    node server.js
    ```

2. Use Postman to test the following:
- POST `/students`:
    - Send invalid data (e.g., missing name or invalid email) and verify the error messages.
- PUT `/students/:id`:
    - Update a student with invalid data and ensure meaningful errors are returned.
- DELETE `/students/:id`:
    - Try deleting a non-existent student and verify the error response.

3. Confirm that:
- Validation rules work as expected.
- Error responses include clear messages for the user.

### Step 6: Handle Errors on the Frontend (Optional)
1. Update the Fetch API logic in `script.js` to display backend error messages:
    ```javascript
    fetch('/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.errors || err.error); });
            }
            return response.json();
        })
        .then(data => {
            console.log('Student added:', data);
            fetchStudents();
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
            console.error(error);
        });
    ```

2. This ensures users see clear feedback when their actions fail.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Add error handling and validation for student routes"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-19
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-19:main --force
    ```

---

# Fantastic Job! 🎉
You’ve made your backend more reliable, secure, and user-friendly by adding **error handling** and **validation**. This ensures your application can handle edge cases gracefully while guiding users with clear error messages. Get ready to tackle more advanced features tomorrow! 🚀
