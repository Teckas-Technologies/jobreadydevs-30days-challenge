# Day 9: Introduction to Node.js + Setting Up a Basic Server

Welcome to Day-9 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll dive into **Node.js**, the powerful runtime environment that allows JavaScript to run on the server. By setting up a basic Node.js server, you’ll lay the foundation for handling dynamic requests, serving files, and more in the upcoming lessons.

## Overview
In this lesson, you’ll:

1. **Learn the basics of Node.js**: Understand why it’s essential for backend development.
2. **Set up your first Node.js server**: Serve your application files dynamically.
3. **Prepare for advanced backend tasks**: Get your project ready for handling APIs and data storage.    
    Why Node.js? Node.js is fast, lightweight, and widely used in modern web development. Mastering it opens doors to building scalable and high-performance applications.

## Objectives
1. Understand the purpose and benefits of Node.js in web development.
2. Set up a simple `Node.js` server using `Express`.
3. Organize your project structure to serve static files efficiently.

## Steps
### Step 1: Install Node.js
1. Download Node.js:
    - Visit the official website and install the latest stable version.

2. Verify Installation:
    - Open your `terminal` and check the installed versions:
    ```bash
    node -v
    npm -v
    ```

    - You should see the version numbers for `Node.js` and `npm` (Node Package Manager).


### Step 2: Initialize a New Node.js Project
1. Open your project folder in a terminal.
2. Switch to the "Day-9" Branch
    - Switch to the "Day-8" branch by running the following command in the terminal
    ```bash
     git checkout Day-9
    ```

3. Initialize a Node.js project with default settings:
    ```bash
    npm init -y
    ```

    - This command creates a `package.json` file in your project folder, which tracks project metadata and dependencies.

4. Open `package.json` in your editor to view the project details.


### Step 3: Install the Express Framework
1. Install Express:
    - Express simplifies the process of creating servers in `Node.js`. Install it using `npm`:
    ```bash
    npm install express
    ```

2. Verify Installation:
    - Check the `package.json` file to ensure express is listed as a dependency.


### Step 4: Create a Basic Server File
1. Create a new file named `server.js` in your project folder.
2. Add the following code to set up a basic server:
    ```javascript
    const express = require('express');
    const app = express();

    // Serve static files from the "public" directory
    app.use(express.static('public'));

    // Define a basic route
    app.get('/', (req, res) => {
        res.send('Welcome to the Student Management App!');
    });

    // Start the server
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    ```

3. Save the file.


### Step 5: Organize Your Project
1. Create a `public` folder:
    - In your project directory, create a folder named public.

2. Move your files:
    - Place `index.html`, `styles.css`, `script.js`, and `teckas-logo.jpg` into the public folder.


### Step 6: Start the Server
1. In the terminal, start the server:
    ```bash
    node server.js
    ```

2. Open your browser and go to:
    ```arduino
    http://localhost:3000
    ```

    - You should see the message: "Welcome to the Student Management App!"

### Step 7: Serve Your Application
1. Update the server’s root route to serve your index.html file:
    ```javascript
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
    ```

2. Save the file and restart the server:
    ```bash
    node server.js
    ```

    - Refresh your browser at `http://localhost:3000` to see your application served by Node.js.


## Push Your Changes to GitHub
1. **Stage the changes**:
    ```bash
    git add .
    ```

2. **Commit the changes with a descriptive message**:
    ```bash
    git commit -m "Set up a basic Node.js server"
    ```

3. **Push the changes to your repository**:
    ```bash
    git push origin Day-9
    ```

4. **Push the final code to main branch**:
    - Upload your final code to your `GitHub` main branch:
    ```bash
    git push origin Day-9:main --force
    ```

---

## Congratulations! 🎉
You’ve successfully set up a **Node.js server** to serve your application. This is a significant milestone in transitioning to backend development. Next, we’ll explore **dynamic data handling** and build APIs to make your app even more powerful. 🚀