# Day 22: User Authentication Basics

Welcome to Day 22 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, you’ll learn how to implement a basic user authentication system in your app. Authentication is a crucial feature in modern applications, ensuring only authorized users can access specific features.

## Expected Output 
At the end of **Day 22**, you will have knowledge of **Restrict the actions to the user** and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day22.png)  

## Why is Authentication Important?
1. **Security**: Prevents unauthorized access to sensitive data or features.
2. **User Personalization**: Enables unique user experiences, such as dashboards or saved preferences.
3. **Scalability**: Forms the foundation for advanced features like role-based access control (e.g., admin vs. regular users).  

Even though today's task is optional, it's a valuable learning experience and an essential skill for building real-world applications.

## Objectives
- Implement a simple login form on the frontend.
- Validate user credentials against a mock database on the backend.
- Restrict access to certain features based on login status.

## Steps
#### Step 1: Add a Login Form to the Frontend
1. Switch to the "Day-22" Branch
    - Switch to the "Day-22" branch by running the following command in the `terminal`
    ```bash
     git checkout Day-22
    ```
2. Open your `index.html` file.

3. Add a login form at the top of the page:
    ```html
    <section id="login-form">
        <div class="form-box">
            <h2>Login</h2>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Login</button>
            </form>
            <p id="login-message"></p>
        </div>
    </section>

    <div class="sections restricted">  <!-- Add restricted class -->
        <!-- Show Empty Student List -->
        <section id="student-list">
            <h2>Student List</h2>
            <ul></ul>
        </section>

        <!-- Add student form -->
        <section id="add-student-form">
            <h2>Add Student</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter student name" required>
                <br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter student email" required>
                <br>
                <div class="buttons">
                    <button type="submit">Add Student</button>
                </div>
            </form>
        </section>
    </div>
    ```

4. **Explanation**:
- The `<form>` element collects user credentials (username and password).
- The `<p>` element with id="login-message" will display success or error messages after login attempts.

5. Open your `styles.css` & Add styles for the login form
    ```css
    /* Styles for the sections container */
    .sections {
        display: none;
        width: 100%; /* Make the container take up the full width of the page */
        gap: 3%; /* Add spacing between child elements */
        padding: 1rem; /* Add padding inside the container */
    }

    /* Container for the login form with full width and dynamic height */
    #login-form {
        width: 100%; /* Takes up the full width of the viewport */
        height: calc(100vh - 7rem); /* Sets the height to full viewport height minus 7rem */
        display: flex; /* Uses flexbox for layout */
        justify-content: center; /* Centers the form horizontally */
        align-items: center; /* Centers the form vertically */
    }

    /* Styling for the form container */
    .form-box {
        width: 25rem; /* Sets a fixed width of 25rem */
        height: auto; /* Allows the height to adjust based on content */
        padding: 10px; /* Adds 10px padding inside the form box */
        border-radius: 10px; /* Rounds the corners with a 10px radius */
        background: #979797; /* Sets a grey background color */
    }

    /* Styling for the heading within the form */
    .form-box h2 {
        text-align: center; /* Centers the text horizontally */
        padding: 3px 0; /* Adds 3px vertical padding */
    }

    /* Styling for input fields within the form */
    .form-box input {
        height: 25px; /* Sets a fixed height of 25px */
        margin-top: 3px; /* Adds a 3px top margin */
        margin-bottom: 10px; /* Adds a 10px bottom margin */
    }

    /* Styling for the form element itself */
    .form-box form {
        width: 100%; /* Takes up the full width of the `.form-box` */
        display: flex; /* Uses flexbox for layout */
        flex-direction: column; /* Stacks form elements vertically */
        justify-content: center; /* Centers items vertically within the form */
        align-items: center; /* Centers items horizontally within the form */
    }

    /* Styling for the submit button */
    .form-box button {
        width: 10rem; /* Sets a fixed width of 10rem */
        height: 30px; /* Sets a fixed height of 30px */
        margin-top: 10px; /* Adds a 10px top margin */
        background: #48bde8; /* Sets a blue background color */
        border: none; /* Removes the default border */
        outline: none; /* Removes the default outline when focused */
        border-radius: 6px; /* Rounds the corners with a 6px radius */
        cursor: pointer; /* Changes the cursor to a pointer on hover */
    }
    ```

### Step 2: Create a Mock User Database
1. Open your `server.js` file.
2. Add a simple array to store user credentials:
    ```javascript
    const users = [
        { username: 'admin', password: 'password123' } // Predefined user for testing
    ];
    ```

### Step 3: Set Up a Login Route in the Backend
1. Add a POST `/login` route to handle login requests:
    ```javascript
    app.post('/login', (req, res) => {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    });
    ```

2. Explanation:
- `req.body`: Contains the login data sent from the frontend.
- `users.find()`: Checks if the provided credentials match any user in the mock database.
- Responses:
    - `200 OK`: Login is successful.
    - `401 Unauthorized`: Login fails due to incorrect credentials.

### Step 4: Implement Login Functionality on the Frontend
1. Open your `script.js` file.

2. Add a function to handle login requests:
    ```javascript
    const loginForm = document.querySelector('#login-form form');
    const loginMessage = document.querySelector('#login-message');
    const loginFormSection = document.querySelector('#login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.querySelector('#username').value.trim();
        const password = document.querySelector('#password').value.trim();

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Invalid username or password');
                }
                return response.json();
            })
            .then(data => {
                loginMessage.textContent = data.message;
                loginMessage.style.color = 'green';
                // Optional: Hide login form and show restricted features
            })
            .catch(error => {
                loginMessage.textContent = error.message;
                loginMessage.style.color = 'red';
            });
    });
    ```

3. Explanation:
- **fetch('/login')**: Sends login data to the backend.
- **response.ok**: Checks if the login was successful.
- **Success**: Displays a green success message.
- **Failure**: Displays a red error message.

### Step 5: Restrict Access to Features (Optional)
1. Add a simple login check before allowing access to certain features:
    ```javascript
    let isLoggedIn = false;

    function toggleFeatures() {
        const features = document.querySelectorAll('.restricted');
        features.forEach(feature => {
            feature.style.display = isLoggedIn ? 'flex' : 'none';
            loginFormSection.style.display = "none";
        });
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: document.querySelector('#username').value.trim(),
                password: document.querySelector('#password').value.trim()
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Invalid username or password');
                }
                return response.json();
            })
            .then(() => {
                isLoggedIn = true;
                toggleFeatures();
            })
            .catch(() => {
                isLoggedIn = false;
                toggleFeatures();
            });
    });
    ```

2. Add a class restricted to features you want to hide until the user logs in:
    ```html
    <div class="restricted" style="display: none;">
        <h3>Restricted Feature</h3>
        <p>You can see this only after logging in!</p>
    </div>
    ```

### Step 6: Test the Authentication Flow
1. Start your server:
    ```bash
    node server.js
    ```

2. Open your app in a browser and test the following:
- **Valid Login**: Use `admin` and `password123` to log in and verify the success message.
- **Invalid Login**: Use incorrect credentials and check for the error message.
- **Restricted Features**: Ensure restricted features are visible only after successful login.

## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Add basic user authentication"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-22
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-22:main --force
    ```

---

# Great Work! 🎉
You’ve implemented a basic **user authentication** system, allowing users to log in. This is a foundational step for building secure, user-centric applications. Prepare for more advanced features in the coming days as we approach deployment! 🚀
