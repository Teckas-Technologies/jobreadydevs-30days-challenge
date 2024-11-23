# Day 9: Introduction to Node.js + Setting Up a Basic Server

Welcome to Day-9 of the **Job-Ready Devs 30-Day Challenge!** 🎉 Today, we’ll dive into **Node.js**, the powerful runtime environment that allows JavaScript to run on the server. By setting up a basic Node.js server, you’ll lay the foundation for handling dynamic requests, serving files, and more in the upcoming lessons.

## Expected Output 
At the end of **Day 9**, you will have knowledge of **Node JS project creation**, **Define the routes** and **Serving HTML files from backend** and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day9.gif)


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

## Explanation of the Day-9 Code:

- `require('express')`: Imports the Express library, which helps in creating and managing the server.
- `express()`: Initializes an Express application.
- `app.use(express.static('public'))`: Middleware that serves static files (e.g., HTML, CSS, JS) from the public directory.
- `app.get()`: Defines a route for HTTP GET requests. The root route ('/') returns a response to the browser.
- `res.send()`: Sends a plain text or HTML response to the client.
- `res.sendFile()`: Sends a file as a response. The __dirname variable provides the absolute path of the current directory.
- `app.listen()`: Starts the server and listens for incoming requests on the specified port.


## Note: Folder structure

```java
    project-directory/
    ├── public/
    │   ├── index.html
    │   ├── styles.css
    │   ├── script.js
    │   └── teckas-logo.jpg
    ├── server.js
    └── package.json
```


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
    // Import the Express library
    const express = require('express');

    // Create an instance of an Express application
    const app = express();

    // Middleware to serve static files from the "public" folder
    app.use(express.static('public'));

    // Define a basic route for the root URL
    app.get('/', (req, res) => {
        res.send('Welcome to the Student Management App!');
    });

    // Define the port for the server to listen on
    const PORT = 3000;

    // Start the server and log a message to the console
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
    // Serve the index.html file for the root route
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
    ```

2. Save the file and restart the server:
    ```bash
    node server.js
    ```

3. Refresh your browser at `http://localhost:3000` to see your application served by Node.js.


### Step 8: Prevent Pushing the node_modules Folder to Git
The `node_modules` folder contains all the dependencies installed via `npm`. Since these can be re-installed using the `package.json` and `package-lock.json` files, it's best to exclude `node_modules` from your Git repository to save storage space and avoid unnecessary uploads.

**Follow these steps**:
1. Create or Update the `.gitignore` File:
    - Open your project root directory.
    - If you don’t already have a `.gitignore` file, create one.

2. Add node_modules to `.gitignore`:
    - Open the `.gitignore` file in a text editor.
    - Add the following line to ignore the `node_modules` folder:
    ```bash
    node_modules/
    ```

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