# Day 22: User Authentication Basics (Optional)

Welcome to Day 22 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, you’ll learn how to implement a basic user authentication system in your app. Authentication is a crucial feature in modern applications, ensuring only authorized users can access specific features.

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
        <h2>Login</h2>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
        <p id="login-message"></p>
    </section>
    ```

4. **Explanation**:
- The `<form>` element collects user credentials (username and password).
- The `<p>` element with id="login-message" will display success or error messages after login attempts.

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
            feature.style.display = isLoggedIn ? 'block' : 'none';
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
