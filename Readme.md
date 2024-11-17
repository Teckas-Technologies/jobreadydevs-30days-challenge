# Day 1: Environment Setup and "Hello, World!"

Welcome to Day 1 of the Job-Ready Devs 30-Day Challenge! Today, we’ll focus on setting up our development environment and creating a basic "Hello, World!" webpage. This setup is essential for building a strong foundation, and it will help you get comfortable with the tools and workflows we'll be using throughout the challenge.

## Expected Output
At the end of Day 1, you will have a Git and VS Code set up environment, and you will get an expected output like the one shown below:

![Expected Output](https://gfxvsstorage.blob.core.windows.net/gfxvscontainer/Day1.png)

## Overview
Today’s lesson will get you started with:

- Essential development tools and why they matter.
- Version control with Git and GitHub.
- Creating and sharing a simple "Hello, World!" project.
Whether you’re new to development or need a refresher, this day is designed to set you up for success. Let’s dive in!

## Objectives
1. **Set up your development environment**: Install essential tools like GitHub, Visual Studio Code, Git, and Node.js.
2. **Create a basic project**: Build a simple "Hello, World!" project using HTML and JavaScript.
3. **Publish your code**: Push your first project to GitHub to establish a version-controlled repository.

## Steps
### Step 1: Install the Necessary Tools

1. **Git**: [Download and install Git](https://git-scm.com/downloads)  
    Git is crucial for managing code versions and collaborating with others effectively.

2. **Node.js**: [Download and install Node.js](https://nodejs.org/)  
    Node.js will enable JavaScript execution on your local machine. Later, it will also help us install and manage additional libraries and tools.

3. **Visual Studio Code**: [Download and install VS Code](https://code.visualstudio.com/)  
    VS Code is a powerful code editor that we’ll use throughout this challenge for writing and managing code.

### Step 2: Set Up Your GitHub Repository
1. **Create a GitHub account if you don’t have one**: [Sign up for GitHub](https://github.com/)
    - GitHub is a platform for sharing and collaborating on code. You'll use it to host your projects and showcase your progress.

2. **Access the Assignment Repository**
    - Go to the assignments website: [Assignment](https://classroom.github.com/a/EnsP3b5z).
    - Click on the assignment repository URL provided.

3. **Copy the Git Repository Clone URL**
    - On the repository page, locate the **Clone** or **Code** button.
    - Copy the repository URL (e.g., `https://github.com/username/repository-name.git`).

4. **Clone the Repository to Your Local Machine**
    - Open the command prompt or terminal.
    - Run the following command to clone the repository:  

    - Clone repo cmd with sample url : `git clone https://github.com/your-username/student-management-app.git`
    

5. **Open the Cloned Repository in VS Code**
    - Launch Visual Studio Code (VS Code).
    - Open the cloned repository folder:
    - Go to `File` > `Open Folder` in VS Code.

6. **Open the Terminal in VS Code**
    - In VS Code, open the integrated terminal:
        - Go to `View` > `Terminal`. 

7. **Switch to the "Day-1" Branch**
    - Create and switch to the "Day-1" branch by running the following command in the terminal
    ```bash
    git checkout Day-1
    ```

### Step 3: Create the "Hello, World!" Project
1. **Open Visual Studio Code**
    - Open the cloned repository root folder in Visual Studio Code.

2. **Open a HTML file**
    - Inside the root folder, open a file named `index.html`.
    - Add the following code to create a basic HTML structure and display a "Hello, World!" message:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Management App - Day 1</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>Welcome to the Student Management App Project!</p>
    </body>
    </html>
    ```

    - `<!DOCTYPE html>`: Declares the document as an HTML5 document.
    - `<html lang="en">`: Defines the root of the HTML document with English as the language.
    - `<head>`: Contains metadata (information about the document) and links to resources.
    - `<meta charset="UTF-8">`: Specifies the character encoding for the document as UTF-8.
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures the page is responsive by controlling the viewport's size and scaling.
    - `<title>`: Sets the title displayed on the browser tab.
    - `<body>`: Contains the content of the HTML document visible to users.
    - `<h1>`: Displays the main heading.
    - `<p>`: Displays a paragraph with the welcome message.


3. **Create a JavaScript file**
    - In the same folder, open a file named `main.js`.
    - Add a simple console log message to test your JavaScript setup:

    ```javascript
    console.log("Hello, World! Welcome to the Student Management App.");
    ```

4. **Link JavaScript to HTML**
    - To connect `main.js` to the HTML, add a `<script>` tag at the bottom of the `<body>` section in `index.html`:

    ```html
    <script src="main.js"></script>
    ```

### Step 4: View and Test Your Work
1. Open `index.html` in a web browser
    - Right-click the file and select "Open with Browser" (or drag and drop it into your browser).
    - Verify that "Hello, World!" displays on the page.

2. Check the Developer `Console`
    - Open your browser's developer console (usually accessible by pressing `F12` or `Ctrl+Shift+I`).
    - Ensure the JavaScript message appears: "Hello, World! Welcome to the Student Management App."

### Step 5: Push the Project to GitHub
1. Open a terminal in your project folder or use the terminal in Visual Studio Code.

2. **Stage the files**:
   - Run the following command to stage all your project files:
    ```bash
     git add .
    ```

3. **Commit the changes**:
   - Save your progress with a descriptive commit message:
    ```bash
     git commit -m "Add Day 1 Hello, World! project"
    ```

4. **Push the changes to GitHub**:
   - Upload your code to your GitHub repository:
    ```bash
     git push origin Day-1
    ```

5. **Push the final code to main branch**:
   - Upload your final code to your GitHub main branch:
    ```bash
    git push origin Day-1:main --force
    ```

6. **Verify the upload**:
   - Open your GitHub repository in a browser and confirm that your `index.html` and `main.js` files have been uploaded.

---

Congratulations! 🎉 Your first project is now live on GitHub, and you're all set for Day 2!